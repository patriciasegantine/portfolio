export const hasText = (value?: string) => Boolean(value?.trim());

export const hasItems = (items?: string[]) => Boolean(items && items.length > 0);
