/** @format */

import "../App.css";
import { Grid } from "@mui/material";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Üstgövde from "../üstgövdem/üstgövde";
import Smallpictur from "../smallpicture/smallpicture";
import Resimüstü from "../resimüstü/resimüstü";
import Solyazilar from "../solyazilar/solyazilar";
import Textvideo from "../Textvideo/textvideo";
import Enalt from "../sayfaaltı/enalt";
import Girişyap from "./girişyap";
import cookies from "../utils/cookie";
import { advertList } from "../api/advert/advertList";
import Swal from "sweetalert2";

function Homepage() {
    const [username, setusername] = useState(cookies.get("username"));
    const [list, setList] = useState([]);
    const [filterList, setFilterList] = useState([]);
    const [çikişyamak, setÇikişyapmak] = useState(username);

    useEffect(() => {
        advertList()
            .then((res) => {
                setList(res.data);
                setFilterList(res.data);
            })
            .catch((err) => {
                Swal.fire({
                    title: "Hata",
                    text: err.response.data.message,
                    icon: "error",
                    confirmButtonText: "Tamam",
                });
            });
        setusername();
    }, []);

    let oninputchance = (e) => {
        setFilterList(
            list.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };

    let çikişyap = () => {};

    return (
        <Grid container xs={12}>
            <Grid item xs={12} style={{ height: "8vh" }}>
                <Üstgövde
                    oniputchange={oninputchance}
                    username={username}
                    çikişyap={çikişyap}
                />
            </Grid>
            <Grid xs={2}></Grid>
            <Grid container xs={2}>
                <Solyazilar />
            </Grid>

            <Grid container xs={6} spacing={1} style={{ display: "flex" }}>
                <Grid xs={12}>
                    <Resimüstü />
                </Grid>

                {filterList.map((advert) => (
                    <Grid
                        item
                        xs={2}
                        style={{
                            width: "100px",
                            height: "130px",
                            margin: "0px",
                        }}
                    >
                        <Smallpictur
                            url={advert.photos[0]}
                            title={advert.title}
                            username={username}
                            id={advert.id}
                        />
                    </Grid>
                ))}

                <Grid
                    xs={12}
                    style={{ with: "100%", height: "200px", marginTop: "40px" }}
                >
                    <Textvideo />
                </Grid>
            </Grid>
            <Grid xs={2}></Grid>
            <Grid style={{ display: "flex", marginBottom: "0px" }}>
                <Enalt></Enalt>
            </Grid>
        </Grid>
    );
}

export default Homepage;
