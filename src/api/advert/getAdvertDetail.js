/** @format */

import axios from "axios";
export const getAdvertDetail = async (id) => {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}/advert/get-advert-detail?id=${id}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};
