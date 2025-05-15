export function getHeadings(markdown: string) {
  const regex = /^(#{2,4})\s+(.*)$/gm;
  const headings = [];
  let match;

  while ((match = regex.exec(markdown)) !== null) {
    const depth = match[1].length;
    const text = match[2].trim();
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({ depth, text, slug });
  }

  return headings;
}
