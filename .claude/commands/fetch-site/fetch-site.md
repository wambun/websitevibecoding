---
description: Comprehensive site content extraction with fallbacks (Playwright → Firecrawl → WebFetch)
---

# Fetch Site Content

**Arguments**: $ARGUMENTS

Parse arguments:
- **URL**: The site URL to fetch
- **--target "old|new"**: Where to save (client/old or client/new)
- **--type "content|design"**: Content extraction or design reference (default: infer from target)

Example: `"https://example.com" --target "old" --type "content"`

---

## PHASE 1: DISCOVERY

### Step 1: Determine Fetch Strategy

Based on target type:
- **"old" / "content"**: Need comprehensive content extraction (all pages, all text)
- **"new" / "design"**: Need visual capture (screenshots, styling, layout)

### Step 2: Discover All Pages

Try methods in order until one succeeds:

#### Method A: Sitemap.xml
```
Fetch: [URL]/sitemap.xml
If exists: Parse all <loc> URLs
```

#### Method B: Playwright Navigation Crawl
```
1. Navigate to homepage with Playwright
2. Extract all internal links
3. Follow navigation menus
4. Build URL list
```

#### Method C: Common Page Patterns
```
Check for common pages:
- /about, /about-us
- /services, /solutions
- /contact, /contact-us
- /team, /our-team
- /blog, /news
- /pricing
- /faq
- /privacy, /terms
```

### Step 3: Create Page Inventory

Save discovered pages to `Memory/content-inventory.json`:

```json
{
  "site": "[URL]",
  "discoveredAt": "[timestamp]",
  "totalPages": [count],
  "pages": [
    {
      "url": "[full URL]",
      "path": "/about",
      "title": "[if known]",
      "status": "pending"
    }
  ],
  "assets": {
    "images": [],
    "documents": []
  }
}
```

---

## PHASE 2: EXTRACTION (For Content/Old Site)

### Step 4: Extract Each Page

For each discovered page, try methods in order:

#### Method A: Playwright (Preferred)
```
1. Navigate to page
2. Wait for full load
3. Extract:
   - document.title
   - meta description
   - All headings (h1-h6)
   - Main content text
   - Images (src, alt)
   - Links
   - Any structured data
4. Take screenshot (for reference)
5. Save to client/old/[path].md
```

#### Method B: WebFetch (Fallback)
```
1. Fetch URL with WebFetch
2. Prompt: "Extract all content from this page including:
   - Page title
   - All headings
   - All paragraph text
   - Image descriptions
   - Navigation items
   - Footer content
   Format as structured markdown."
3. Save to client/old/[path].md
```

#### Method C: Firecrawl (Bulk Fallback)
```
If Firecrawl is available and working:
node scripts/firecrawl-fetch.mjs --url "[URL]" --target "old"
```

### Step 5: Structure Content

For each page, create structured markdown:

```markdown
# [Page Title]

> URL: [original URL]
> Extracted: [timestamp]

## Metadata
- Title: [title]
- Description: [meta description]

## Navigation Context
[Where this page sits in site structure]

## Content

### [Section 1 Heading]
[Content...]

### [Section 2 Heading]
[Content...]

## Images
- ![alt text](image-url)

## Links
- [Link text](url)

## Raw Content
[Full text dump for reference]
```

### Step 6: Extract Assets

For images and documents:
1. List all image URLs found
2. List all PDF/document links
3. Save to `Memory/content-inventory.json` assets section
4. Optionally download to `client/old/assets/`

---

## PHASE 3: VISUAL CAPTURE (For Design/New Site)

### Step 7: Capture Design Reference

Using Playwright (required for design):

#### For Each Key Page:

```
1. Navigate to page
2. Set viewport: 1920x1080 (desktop)
3. Wait for animations to complete
4. Take full-page screenshot → client/new/screenshots/[page]-desktop.png

5. Set viewport: 390x844 (mobile)
6. Take full-page screenshot → client/new/screenshots/[page]-mobile.png

7. Extract computed styles:
   - Primary colors (backgrounds, text, accents)
   - Font families and sizes
   - Spacing patterns
   - Border radius values

8. Note animations/interactions:
   - Hover effects
   - Scroll animations
   - Transitions
```

#### Capture Design Tokens:

```markdown
# Design Reference: [Site Name]

## Colors
- Primary: [hex]
- Secondary: [hex]
- Background: [hex]
- Text: [hex]
- Accent: [hex]

## Typography
- Headings: [font-family], [weights]
- Body: [font-family], [size], [line-height]

## Spacing
- Section padding: [values]
- Container max-width: [value]
- Component gaps: [values]

## Components Observed
- Navigation: [description]
- Hero: [description]
- Cards: [description]
- Footer: [description]

## Animations
- [Description of observed animations]
```

Save to `client/new/design-tokens.md`

---

## PHASE 4: VERIFICATION

### Step 8: Verify Completeness

Update `Memory/content-inventory.json`:
- Mark each page as "extracted" or "failed"
- Count total content extracted
- List any failures

### Step 9: Create Summary

Output summary:

```
═══════════════════════════════════════════════════════════════
  SITE EXTRACTION COMPLETE: [URL]
═══════════════════════════════════════════════════════════════

Target: client/[old|new]
Method used: [Playwright|WebFetch|Firecrawl]

Pages Discovered: [X]
Pages Extracted: [Y]
Failed: [Z]

Content saved to:
  client/[target]/[files...]

Screenshots (if design):
  client/new/screenshots/[files...]

Inventory:
  Memory/content-inventory.json

[If failures, list them and suggest manual review]

Ready for next phase.
═══════════════════════════════════════════════════════════════
```

---

## FALLBACK CHAIN SUMMARY

```
DESIGN REFERENCE (--target new):
  Playwright (required) - screenshots + visual analysis
  ↓ if fails
  WebFetch - content only (warn: no screenshots)

CONTENT EXTRACTION (--target old):
  Playwright - best quality, structured
  ↓ if fails
  WebFetch - good quality, AI-processed
  ↓ if fails
  Firecrawl - bulk extraction
  ↓ if all fail
  Manual: Ask user to provide content
```

---

## CRITICAL: Ensure Nothing Is Missed

Before marking extraction complete:

1. **Check page count** - Does it match expected site size?
2. **Verify key pages** - Home, About, Services, Contact all captured?
3. **Check navigation** - All nav items have corresponding pages?
4. **Review inventory** - Any "failed" pages need retry?

If anything seems missing, attempt re-extraction or flag for user review.
