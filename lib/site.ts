export const assetPath = (path: string) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
};

export const absoluteUrl = (path = "") => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kevzho.github.io";
  return new URL(path, siteUrl).toString();
};
