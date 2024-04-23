import axios from "axios";

export interface ILogin {
    email: string
    password: string
}

export const loginUser = async (data: ILogin) => {
    try {
        const response = await axios.post("URL LOGIN", data)
        return response
    } catch (error) {
        return error
    }
};