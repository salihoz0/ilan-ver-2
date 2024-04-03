/** @format */

import axios from "axios";
export const advertList = async (filterType, price) => {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}/advert/advert-list`
    );
};
