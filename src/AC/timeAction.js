export const updateTime = () => {
  return {
    type: 'UPDATE_TIME',
    time: new Date()
  }
};

export const updateLocaleSetting = (isRu) => {
  return {
    type: 'UPDATE_DATE_LOCAL',
    isRu: isRu
  }
};

export const updateTimeSetting = (isRu) => {
  return {
    type: 'UPDATE_TIME_LOCAL',
    isRu: isRu
  }
};
