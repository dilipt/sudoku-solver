import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
});

if (module.hot) {
  module.hot.accept('./root-reducer', () => {
    import('./root-reducer').then((newRootReducer) => store.replaceReducer(newRootReducer));
  });
}

export {
  store,
};
