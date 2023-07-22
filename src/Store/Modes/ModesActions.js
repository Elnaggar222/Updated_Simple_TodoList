import { modesTypes } from "../Types"

export const changeMode = (DesiredMode) => {
    return {
        type:modesTypes.CHANGE_MODE,
        payload:DesiredMode
    }
}