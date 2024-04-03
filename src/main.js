/** @format */

import "./App.css";
import { Grid } from "@mui/material";
import Homepage from "./sayfalar/homepage";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function İlanver() {
    const [useeffectkontor, Setuseeffectkontro] = useState(false);
    const [usernamekontrol, setHesapadıkontrol] = useState("");

    const { state } = useLocation();
    let { username } = state || {};

    useEffect(() => {
        console.log("useeffect");

        girişçikişyap();
    }, [useeffectkontor]);

    let girişçikişyap = () => {
        if (username !== null) {
            if (username === "çık") {
                setHesapadıkontrol("");
            } else {
                console.log(username);

                console.log("ifteyiz");
                setHesapadıkontrol(username);
                console.log(usernamekontrol);

                Setuseeffectkontro(true);
            }
        } else {
            console.log("naberyaaaaa");
        }
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <Homepage username={usernamekontrol} />
            </Grid>
            <Grid item xs={12} style={{}}></Grid>
        </Grid>
    );
}

export default İlanver;
