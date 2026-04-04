'use client'

import { useEffect, useState } from "react";

interface UseRemoteContentResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useRemoteContent = <T>(fetcher: () => Promise<T>): UseRemoteContentResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadContent = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const remoteData = await fetcher();

        if (isMounted) {
          setData(remoteData);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to fetch remote content.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadContent();

    return () => {
      isMounted = false;
    };
  }, [fetcher]);

  return { data, isLoading, error };
};
