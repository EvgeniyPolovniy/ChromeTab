import { initialTimeState } from './store'

export default function timeReducer(state = initialTimeState, action) {
  switch (action.type) {
    case 'UPDATE_TIME':
      return {
        ...state,
        time: action.time.toLocaleString(state.time24 ? 'ru' : 'en-US', timeOptions),
        date: action.time.toLocaleString(state.localeRu ? 'ru' : 'en-US', dateOptions)
      }
    case 'UPDATE_DATE_LOCAL':
      return {
        ...state,
        localeRu: action.isRu,
      }
    case 'UPDATE_TIME_LOCAL':
      return {
        ...state,
        time24: action.isRu,
      }
    default:
      return state
  }
}

const timeWraper = (item) => {
  let result = (item.toString().length == 1) ? ('0'+ item) : item;
  return result
}
const normalizeTime = (time) => {
  let normalTime = timeWraper(time.getHours()) + ":" + timeWraper(time.getMinutes());
  return normalTime;
}

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const timeOptions = {
  hour: 'numeric',
  minute: 'numeric',
};
