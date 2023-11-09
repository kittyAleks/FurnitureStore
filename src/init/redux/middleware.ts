import {Middleware} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const middleware: Middleware[] = [thunkMiddleware];

middleware.push(
  createLogger({
    duration: true,
    collapsed: true,
    colors: {
      title: () => '#139BFE',
      prevState: () => '#1C5FAF',
      action: () => '#149945',
      nextState: () => '#A47104',
      error: () => '#ff0005',
    },
  }),
);

export {middleware};
