export const arraySearch = (array, keyword) => {
  const searchTerm = keyword.toLowerCase();
  return array.filter((value) => {
    return value.col1.toLowerCase().match(new RegExp(searchTerm, "g"));
  });
};
