function sliceContent(content, contentLength) {
  const newContent =
    content.length > contentLength
      ? content.slice(0, contentLength) + "..."
      : content;

  return newContent;
}
export default sliceContent;
