export enum AppActionTypes {
  OPEN_APP = 'OPEN_APP',
  OPEN_ADD_FORM = 'OPEN_ADD_FORM',
  CLOSE_ADD_FORM = 'CLOSE_ADD_FORM',
}

export interface OPEN_ADD_FORM_ACTION {
  type: AppActionTypes.OPEN_ADD_FORM
}

export interface OPEN_APP_ACTION {
  type: AppActionTypes.OPEN_APP
}

export interface CLOSE_ADD_FORM_ACTION {
  type: AppActionTypes.CLOSE_ADD_FORM
}

export type AppActions = OPEN_ADD_FORM_ACTION | OPEN_APP_ACTION | CLOSE_ADD_FORM_ACTION;