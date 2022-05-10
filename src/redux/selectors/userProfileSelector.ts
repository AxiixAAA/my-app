import { TGlobalState } from "../redux-store";

export const getUserProfileSelector = (state: TGlobalState) => state.profilePage.profile;
export const getStatus = (state: TGlobalState) => state.profilePage.status;
export const getUserId = (state: TGlobalState)=> state.profilePage.profile?.userId;
