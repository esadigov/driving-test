import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

interface UserState {
    name: string;
}

const initialState: UserState = {
    name: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state: UserState, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
});

export const { setName } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users.name;

export default userSlice.reducer;
