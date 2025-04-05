import { getRequest } from "./http-methods";

export const APIS = {
    getCommonData: (file: string) =>
        getRequest(`/data/${file}.json`)
}