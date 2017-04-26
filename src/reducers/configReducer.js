import { initialState } from '../store/store'

export default function configReducer(state = initialState.configState, action) {
  switch (action.type) {
    case 'UPDATE_CHANNEL':
      return {
        ...state,
        bgChannel: action.id
      };
    default:
      return state
  }
}
