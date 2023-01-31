import { API_URL } from "../Constants";

export const GET_ALL_LAUNCHES = `${API_URL}/launches`;
export const GET_ONE_LAUNCHE = (launchId: number) => `${API_URL}/launches/${launchId}`;