export const getLastSearches = (lastSearches, newKeyword) => {
  lastSearches = lastSearches.slice(lastSearches.length - 2);
  lastSearches.push(newKeyword);
  return lastSearches;
};
