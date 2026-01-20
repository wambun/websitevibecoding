'use client';

import { siteConfig } from '@/data/config/site.settings';

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  // Search is disabled for now
  if (!siteConfig.search || siteConfig.search === true) {
    return <>{children}</>;
  }

  // When search is enabled with proper config, we can use PlinySearchProvider
  // import { SearchProvider as PlinySearchProvider } from '@shipixen/pliny/search';
  // return (
  //   <PlinySearchProvider searchConfig={siteConfig.search}>
  //     {children}
  //   </PlinySearchProvider>
  // );

  return <>{children}</>;
};
