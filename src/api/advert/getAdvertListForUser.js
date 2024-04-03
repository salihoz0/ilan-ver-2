/** @format */

import axios from "axios";
import cookies from "../../utils/cookie";
export const getAdverListForUser = async () => {
    const token = cookies.get("token");

    return await axios.get(
        `${process.env.REACT_APP_API_URL}/advert/my-adverts`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );
};
