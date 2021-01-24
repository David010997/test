import { combineReducers } from '@reduxjs/toolkit';
import { reducer as mainReducer } from 'src/slices/main';
import { reducer as calendarReducer } from 'src/slices/calendar';
import { reducer as chatReducer } from 'src/slices/chat';
import { reducer as formReducer } from 'redux-form';
import { reducer as kanbanReducer } from 'src/slices/kanban';
import { reducer as mailReducer } from 'src/slices/mail';
import { reducer as notificationReducer } from 'src/slices/notification';
import { reducer as tabsReducer } from 'src/slices/tabs'; 
import { reducer as tradeReducer } from 'src/slices/trade'; 


const rootReducer = combineReducers({
  calendar: calendarReducer,
  chat: chatReducer,
  form: formReducer,
  kanban: kanbanReducer,
  mail: mailReducer,
  notifications: notificationReducer,
  tabs: tabsReducer,
  main: mainReducer,
  trade:tradeReducer
});

export default rootReducer;
