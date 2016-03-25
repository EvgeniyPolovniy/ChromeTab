export default function date(state = [], action) {
  switch (action.type) {
    case 'DATE_UPDATE':
      return [
        ...state,
        {
          date: action.date
        }
      ]
    default:
      return state
  }
}
