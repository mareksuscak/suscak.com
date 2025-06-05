'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // TODO: load analytics
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // TODO: track pageview
    }
  }, [pathname, searchParams]);

  return null;
};
