/** @format */

import axios from "axios";
import cookies from "../../utils/cookie";
export const updateAdvert = async (
    title,
    description,
    price,
    location,
    photos,
    subDetails,
    technicalProperties,
    id
) => {
    const token = cookies.get("token");

    return await axios.put(
        `${process.env.REACT_APP_API_URL}/advert/update-advert`,
        {
            title,
            description,
            price,
            location,
            photos,
            subDetails,
            technicalProperties,
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
