function replaceContent(content) {
  const newContent = content.replace(/\[.*\/*/, "");
  return newContent;
}
export default replaceContent;
