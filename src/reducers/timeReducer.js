import { initialState } from '../store/store'

export default function timeReducer(state = initialState.timeState, action) {
  switch (action.type) {
    case 'UPDATE_TIME':
      return {
        ...state,
        time: action.time.toLocaleString(state.time24 ? 'ru' : 'en-US', timeOptions),
        date: action.time.toLocaleString(state.localeRu ? 'ru' : 'en-US', dateOptions)
      };
    case 'UPDATE_DATE_LOCAL':
      return {
        ...state,
        localeRu: action.isRu
      };
    case 'UPDATE_TIME_LOCAL':
      return {
        ...state,
        time24: action.isRu
      };
    default:
      return state
  }
}

const timeWrapper = (item) => {
  return item.toString().length == 1 ? '0'+ item : item;
};

const normalizeTime = (time) => {
  return timeWrapper(time.getHours()) + ":" + timeWrapper(time.getMinutes());
};

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
const timeOptions = {
  hour: 'numeric',
  minute: 'numeric'
};
