/** Prefixes public assets when deployed as a GitHub Pages project site. */
export function sitePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  return `${basePath}${path}`
}
