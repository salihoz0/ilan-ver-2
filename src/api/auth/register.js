/** @format */

import axios from "axios";
export const register = async (email, password, username, adress, phone) => {
    return await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        {
            email,
            password,
            username,
            adress,
            phone,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};
