import React, {FC} from 'react';
import {Provider as ReduxProvider} from 'react-redux';

import {store} from './init';
import {Navigation} from './View/navigation';

export const Root: FC = () => {
  return (
    <ReduxProvider store={store}>
      <Navigation />
    </ReduxProvider>
  );
};
