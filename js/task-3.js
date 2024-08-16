function getElementWidth(content, padding, border) {
  const content1 = parseFloat(content);
  const padding1 = parseFloat(padding);
  const border1 = parseFloat(border);
  console.log(`${content1 + padding1 * 2 + border1 * 2}`);
}
