/** @format */

import axios from "axios";
import cookies from "../../utils/cookie";
export const addAdvert = async (
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
    return await axios.post(
        `${process.env.REACT_APP_API_URL}/advert/add-advert`,
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
