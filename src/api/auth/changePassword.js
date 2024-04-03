/** @format */

import axios from "axios";
import cookies from "../../utils/cookie";

export const changePassword = async (password) => {
    const token = cookies.get("token");
    return await axios.put(
        `${process.env.REACT_APP_API_URL}/auth/change-password`,
        {
            password,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );
};
