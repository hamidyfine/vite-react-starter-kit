import { configureStore } from '@reduxjs/toolkit';

import errorReducer from './error.store';
import workspaceReducer from './workspace.store';

export const store = configureStore({
    reducer: {
        error: errorReducer,
        workspace: workspaceReducer,
    },
});

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
