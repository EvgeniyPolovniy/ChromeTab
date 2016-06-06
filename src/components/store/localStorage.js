export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('Tab42State');
    if ( serializedState === null ) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('Tab42State', serializedState);
  } catch (err) {
    // Ignore errors
  }
};
