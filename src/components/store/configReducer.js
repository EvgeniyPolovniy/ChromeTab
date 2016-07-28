import { initialConfigState } from './store'

export default function configReducer(state = initialConfigState, action) {
  switch (action.type) {
    case 'UPDATE_CHANNEL':
      return {
        ...state,
        bgChannel: action.id,
      }
    default:
      return state
  }
}
