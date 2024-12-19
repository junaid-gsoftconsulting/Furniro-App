import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../store/slice/CounterSlice';
import themeReducer from '../store/slice/ThemeSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

// import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import counterReducer from '../store/slice/CounterSlice';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const rootReducer = combineReducers({counterReducer})
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = configureStore({
//   reducer: persistedReducer
// });
// export const persistor= persistStore(store);
