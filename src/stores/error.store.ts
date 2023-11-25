import { createSlice } from '@reduxjs/toolkit';

interface IStates {
    has_error: boolean;
    error: unknown;
}

const initial_state: IStates = {
    has_error: false,
    error: null,
};

const errorStore = createSlice({
    name: 'error',

    initialState: initial_state,

    reducers: {
        setError: (state, action) => {
            if (action.payload) {
                state.has_error = true;
                state.error = action.payload;
            }
        },
    },
});

export {
    errorStore,
};

export default errorStore.reducer;
