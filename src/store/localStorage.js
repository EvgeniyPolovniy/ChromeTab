export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('Tab42State');
    const now = new Date().getTime();
    if ( serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({state, timestamp: new Date().getTime()});
    localStorage.setItem('Tab42State', serializedState);
  } catch (err) {
    // Ignore errors
  }
};
