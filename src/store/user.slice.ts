import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum Profession {
    teacher = "Teacher",
    supervisor = "Supervisor",
    student = "Student"
}

export interface UserState {
    name: string,
    age: number,
    username: string,
    position: Profession
}

const user: UserState = {
    name: 'Raouf',
    age: 24,
    username: 'raouf',
    position: Profession.student
}

const userSlice = createSlice({
    name: 'user',
    initialState: user,
    reducers: {
        addUser: (state, action: PayloadAction<UserState>) => {
            console.log(action.payload)
            return action.payload;
        }
    }
})

export const { addUser } = userSlice.actions;
export const getUser = (state: RootState) => state.user;

export default userSlice.reducer;