interface ServerContentOptions {
  url: string;
  revalidate?: number;
}

export const fetchExternalContent = async <T>({
  url,
  revalidate = 300
}: ServerContentOptions): Promise<T> => {
  const response = await fetch(url, {
    next: { revalidate }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch external content from ${url}.`);
  }

  return (await response.json()) as T;
};
