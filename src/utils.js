export const localStorageFunction = (keyword) => {
  let lastSearches = localStorage.getItem("lastSearches");

  if (lastSearches === null) {
    localStorage.setItem("lastSearches", JSON.stringify([keyword]));
  } else {
    lastSearches = JSON.parse(lastSearches);
    lastSearches = lastSearches.slice(lastSearches.length - 2);
    lastSearches.push(keyword);
    localStorage.setItem("lastSearches", JSON.stringify(lastSearches));
  }
};
