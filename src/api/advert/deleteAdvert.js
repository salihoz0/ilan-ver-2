/** @format */

import axios from "axios";
import cookies from "../../utils/cookie";
export const deleteAdvert = async (id) => {
    const token = cookies.get("token");

    return await axios.delete(
        `${process.env.REACT_APP_API_URL}/advert/delete-advert`,
        {
            id,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }
    );
};
