import {
  DISABLE_BALANCE_ON_EDIT,
  DISABLE_BALANCE_ON_ADD,
  ALLOW_REGISTRATION
} from './../actions/types';

const initialState = {
  disableBalanceOnAdd: true,
  disableBalanceOnEdit: false,
  allowRegistration: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DISABLE_BALANCE_ON_ADD:
      return {
        ...state,
        disableBalanceOnAdd: !state.disableBalanceOnAdd
      };
    case DISABLE_BALANCE_ON_EDIT:
      return {
        ...state,
        disableBalanceOnEdit: !state.disableBalanceOnEdit
      };
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: !state.allowRegistration
      };
    default:
      return state;
  }
}