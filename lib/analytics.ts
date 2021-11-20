import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // TODO: load analytics
    }

    function onRouteChangeComplete() {
      // TODO: track pageview
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);
};
