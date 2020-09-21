export const loadState = () => {
  try {
    const lastSearches = localStorage.getItem("lastSearches");
    if (lastSearches === null) {
      return undefined;
    }
    return { search: { lastSearches: JSON.parse(lastSearches), movies: [] } };
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    console.log(state);
    const serializedState = JSON.stringify(state.search.lastSearches);
    localStorage.setItem("lastSearches", serializedState);
  } catch {
    // ignore write errors
  }
};
