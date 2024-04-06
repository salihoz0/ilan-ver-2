/** @format */

import { Divider, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Üstgövde from "../üstgövdem/üstgövde";
import Advertpageüstü from "./advetpageüstü";
import Advertpagetitle from "./advertpagetitle";
import { useEffect, useState } from "react";
import Advertpagedetails from "./advertpagedetail";
import Enalt from "../sayfaaltı/enalt";
import { getAdvertDetail } from "../api/advert/getAdvertDetail";
import Swal from "sweetalert2";

const Advertpage = () => {
    const { state } = useLocation();
    const { id } = state;

    useEffect(() => {
        await axios.get(
            `${process.env.REACT_APP_API_URL}/advert/get-advert-detail?id=${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => {
                setDetails(res.data[0]);
            })
            .catch((err) => {
                Swal.fire({
                    title: "Hata",
                    text: err.response.data.message,
                    icon: "error",
                });
            });
    }, []);

    const [detail, setDetails] = useState({
        title: "",
        description: "",
        subDetails: [
            { title: "İlan No", value: "" },
            { title: "İlan Tarihi", value: "" },
            { title: "Araç tipi", value: "" },
            { title: "Kimden", value: "" },
        ],
        technicalProperties: [
            { title: "Araç Tipi", value: "" },
            { title: "Kasa Tipi / Kapı Sayısı", value: "" },
            { title: "Motor Tipi", value: "" },
            { title: "Üretim Yılı (İlk / Son)", value: "" },
        ],
        photos: [],
    });

    const [button1Clicked, setButton1Clicked] = useState(false);
    const [button2Clicked, setButton2Clicked] = useState(false);
    const [button1Hovered, setButton1Hovered] = useState(false);
    const [button2Hovered, setButton2Hovered] = useState(false);
    const [ilandetayi, setİlandetayi] = useState(true);
    const [Konumu, setKonumu] = useState(false);

    const handleButton1Click = () => {
        if (button2Clicked) {
            setButton2Clicked(!button2Clicked);
            setButton1Clicked(true); // Diğer butonun tıklanmış durumunu sıfırla
            setİlandetayi(true);
            setKonumu(false);
            console.log("naber1");
        } else {
            console.log("nabernot1");
            setButton1Clicked(!button1Clicked);
        }
    };

    const handleButton2Click = () => {
        if (button1Clicked) {
            setButton1Clicked(!button1Clicked);
            setButton2Clicked(true); // Diğer butonun tıklanmış durumunu sıfırla
            setİlandetayi(false);
            console.log("naber2");
            setKonumu(true);
        } else {
            setButton2Clicked(!button2Clicked);
            setİlandetayi(false);
            setKonumu(true);
            console.log("nabernot2");
        }
    };
    const handleButton1HoverEnter = () => {
        setDetails(detail);
        setButton1Hovered(true);
    };

    const handleButton1HoverLeave = () => {
        setButton1Hovered(false);
    };

    const handleButton2HoverEnter = () => {
        setButton2Hovered(true);
    };

    const handleButton2HoverLeave = () => {
        setButton2Hovered(false);
    };

    return (
        <Grid container style={{ width: "100%" }}>
            <Grid item xs={12} style={{}}>
                <Üstgövde username={"username"} />
                <Advertpageüstü title={detail.title} />
                <Advertpagetitle title={detail.title} />
            </Grid>
            <Grid container sx={{ marginTop: "10px", height: "430px" }}>
                <Grid item xs={2.1}></Grid>
                <Grid item xs={8.3} sx={{ display: "flex" }}>
                    {detail.photos.map((url, index) => (
                        <Grid key={index} container xs={4}>
                            <img
                                src={url}
                                alt={detail.title}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </Grid>
                    ))}
                    <Grid container item xs={3} sx={{ marginLeft: "30px" }}>
                        <Advertpagedetails
                            detail={detail.subDetails}
                            price={detail.price}
                        />
                    </Grid>
                    <Grid container item xs={3} sx={{}}>
                        {/* <Advertpagedetails detail={detail.subDetails} /> */}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{ width: "100%", height: "30px" }}></Grid>
            <Grid
                container
                sx={{
                    marginTop: "80px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Grid
                    item
                    xs={9}
                    sx={{ display: "flex", marginLeft: "360px", gap: "20px" }}
                >
                    <button
                        onClick={handleButton1Click}
                        onMouseEnter={handleButton1HoverEnter}
                        onMouseLeave={handleButton1HoverLeave}
                        style={{
                            backgroundColor: button1Clicked
                                ? "#FFD900"
                                : button1Hovered
                                ? "white"
                                : "#F8F8F8",
                            pointerEvents: button1Clicked ? "none" : "auto",
                            fontSize: "18px",
                            width: "130px",
                            height: "50px",
                            color: "#1064BC",
                            border: "1px solid",
                            cursor: "pointer",
                        }}
                    >
                        İlan Detayları
                    </button>
                    <button
                        onClick={handleButton2Click}
                        onMouseEnter={handleButton2HoverEnter}
                        onMouseLeave={handleButton2HoverLeave}
                        style={{
                            backgroundColor: button2Clicked
                                ? "#FFD900"
                                : button2Hovered
                                ? "white"
                                : "#F8F8F8",
                            pointerEvents: button2Clicked ? "none" : "auto",
                            fontSize: "18px",
                            width: "130px",
                            height: "50px",
                            color: "#1064BC",
                            border: "1px solid",
                            cursor: "pointer",
                        }}
                    >
                        Teknik Özellikler
                    </button>
                </Grid>
                <Divider
                    xs={4}
                    style={{
                        width: "69%",
                        marginLeft: "340px",
                        border: "1px solid #FFC000",
                    }}
                />
            </Grid>
            {ilandetayi && (
                <Grid container sx={{ display: "flex", marginTop: "5px" }}>
                    <Grid item xs={2.2} style={{}}></Grid>
                    <Grid
                        xs={8.2}
                        style={{
                            backgroundColor: "white",
                            border: "1px solid #ccc",
                        }}
                    >
                        <Grid
                            item
                            style={{
                                border: "1px solid #ccc",
                                backgroundColor: "#F5F5F5",
                            }}
                        >
                            <Typography style={{ paddingLeft: "10px" }}>
                                Açıklama
                            </Typography>
                        </Grid>
                        <Grid
                            style={{
                                height: "500px",
                                margin: "30px 0px 0px 30px",
                            }}
                        >
                            {detail.description}
                        </Grid>
                    </Grid>
                </Grid>
            )}
            {Konumu && (
                <Grid container sx={{ display: "flex", marginTop: "5px" }}>
                    <Grid
                        xs={12}
                        sx={{
                            padding: "5%",
                            paddingTop: "2%",
                            display: "block",
                        }}
                    >
                        <Typography
                            style={{
                                textTransform: "uppercase",
                                fontWeight: "bolder",
                            }}
                        >
                            {detail.title}{" "}
                        </Typography>
                        <Typography
                            variant="h5"
                            style={{
                                color: "blue",
                            }}
                        >
                            Genel Bakış
                        </Typography>

                        {detail.technicalProperties.map((det, index) => (
                            <Grid
                                container
                                style={{
                                    marginTop: "2%",
                                    padding: "5px",
                                    backgroundColor:
                                        index % 2 === 0
                                            ? "whitesmoke"
                                            : "white",
                                    height: "50px",
                                    alignItems: "center",
                                }}
                            >
                                <Grid xs={6}>
                                    <Typography
                                        sx={{
                                            fontWeight: "600",
                                        }}
                                    >
                                        {det.title}{" "}
                                    </Typography>
                                </Grid>
                                <Grid xs={6}>
                                    <Typography
                                        sx={{
                                            color: det.title.includes("İlan No")
                                                ? "red"
                                                : "black",
                                        }}
                                    >
                                        {det.value}{" "}
                                    </Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            )}
            <Enalt></Enalt>
        </Grid>
    );
};

export default Advertpage;
