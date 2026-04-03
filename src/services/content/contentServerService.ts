interface ServerContentOptions<T> {
  url: string;
  fallback: T;
  revalidate?: number;
}

export const fetchExternalContentWithFallback = async <T>({
                                                            url,
                                                            fallback,
                                                            revalidate = 300
                                                          }: ServerContentOptions<T>): Promise<T> => {
  try {
    const response = await fetch(url, {
      next: { revalidate }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch external content from ${url}.`);
    }

    return (await response.json()) as T;
  } catch {
    return fallback;
  }
};
