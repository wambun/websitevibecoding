'use client';

import { SearchProvider as PlinySearchProvider } from '@shipixen/pliny/search';
import { siteConfig } from '@/data/config/site.settings';
import { useRouter } from 'next/navigation';

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const searchConfig = siteConfig.search;

    if (!searchConfig) {
        return <>{children}</>;
    }

    return (
        <PlinySearchProvider
            searchConfig={searchConfig}
        >
            {children}
        </PlinySearchProvider>
    );
};
