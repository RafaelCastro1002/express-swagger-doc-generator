export const getTagFromPathRouter = (path: string) => {
  const tagName = path.split("/")[1];

  const firstLetterUpperCase = tagName[0].toUpperCase();

  return `${firstLetterUpperCase}${tagName.slice(1, tagName.length)}`;
};
