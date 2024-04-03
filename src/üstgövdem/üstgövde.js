/** @format */

import "../App.css";
import { Divider, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../logo.png";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie";
// import { Hover } from "@testing-library/user-event/dist/hover";

let Üstgövde = ({ oniputchange, user, çikişyap }) => {
    const [textbackcolor, setTextbackcolor] = useState("#2f3546");
    const [underlinee, setUnderline] = useState("none");
    const [underlinee1, setUnderline1] = useState("none");
    const [underlinee2, setUnderline2] = useState("none");
    const [value, setValue] = useState();
    const [detaylıarama, setDetaylıarama] = useState("flex");
    const [x, setX] = useState("none");
    const [xhover, setXhover] = useState(false);
    const [buttonHover, setButtonHover] = useState("#363C51");
    const [buttonHover2, setButtonHover2] = useState("#1E90FF");
    const Navigate = useNavigate();
    const [kullanicigririş, setkullanicigririş] = useState("");
    const [username, setUsername] = useState(cookies.get("username"));

    useEffect(() => {
        hesapp();
        setUsername(cookies.get("username"));
    }, []);

    let hesapp = () => {
        if (username === null) {
            setkullanicigririş("");
        } else {
            setkullanicigririş(username);
        }
    };

    let input = () => {
        console.log(kullanicigririş);
        setTextbackcolor("white");
        setX("flex");
        setDetaylıarama("none");
    };
    let inputleave = () => {
        setTextbackcolor("#2f3546");
        setX("none");
        setDetaylıarama("flex");
    };
    let ilanversayfasi = () => {
        Navigate("/ilanver");
    };
    let ANASAYFA = () => {
        Navigate("/");
    };
    let hesapaç = () => {
        Navigate("/hesapaç");
    };
    let girişyap = () => {
        Navigate("/girişyap");
    };
    let çikişyapmakiçin = () => {
        Navigate("/", { state: { username: "çık" } });
    };

    return (
        <Grid
            container
            xs={12}
            style={{
                backgroundColor: "#3f475f",
                height: "8vh",
                gap: "2vw",
            }}
        >
            <Grid
                container
                xs={4}
                style={{
                    display: "flex",
                    marginTop: "1px",
                    backgroundColor: "#3f475f",
                    marginLeft: "17vw",
                }}
            >
                <Grid
                    item
                    xs={12}
                    style={{
                        height: "10px",
                        display: "flex",
                        gap: "10px",
                        marginTop: "0px",
                    }}
                >
                    <img
                        onClick={ANASAYFA}
                        src={logo}
                        alt=""
                        style={{
                            width: "100px",
                            height: "48px",
                            marginTop: "10px",
                        }}
                    />
                    <TextField
                        label=""
                        value={value}
                        placeholder="Kelime,ilan no veya mağaza adı ile ara"
                        style={{
                            width: "300px",
                            height: "2vh",
                            position: "relative",
                            marginTop: "8px",
                        }}
                        inputProps={{
                            style: {
                                backgroundColor: textbackcolor,
                                height: "30%",
                                color: "black",
                                borderRadius: "5px",
                            },
                        }}
                        onClick={input}
                        onBlur={() => inputleave()}
                        // onChange={(event) => setValue(event.target.value)}
                        onChange={oniputchange}
                    />
                    <button
                        onClick={() => setValue("")} // X butonuna tıklandığında setValue("") işlevi çağrılır
                        onMouseEnter={() => setXhover(true)}
                        onMouseLeave={() => setXhover(false)}
                        style={{
                            color: xhover ? "#ADCCED" : "#4682B4",
                            border: "none",
                            height: "2vh",
                            backgroundColor: "#3f475f",
                            fontWeight: "bold",
                            fontSize: "20px",
                            marginTop: "28px",
                            display: x,
                            position: "relative",
                        }}
                    >
                        X
                    </button>
                    <a href="#">
                        <p
                            style={{
                                marginTop: "28px",
                                fontSize: "13px",
                                display: detaylıarama,
                                color: "white",
                                textDecoration: underlinee,
                            }}
                            onMouseOver={() => setUnderline("underline")}
                            onMouseOut={() => setUnderline("none")}
                        >
                            Detaylı arama
                        </p>
                    </a>
                </Grid>
            </Grid>
            <Grid
                container
                xs={4}
                style={{
                    backgroundColor: "#3f475f",
                    marginLeft: "100px",
                    display: "flex",
                    width: "100%",
                }}
            >
                <Grid
                    item
                    xs={12}
                    style={{ display: "flex", gap: "10px", marginTop: "5px" }}
                >
                    <button
                        onClick={girişyap}
                        style={{
                            border: "none",
                            marginTop: "25px",
                            backgroundColor: "#3f475f",
                            color: "white",
                            textDecoration: underlinee1,
                            display:
                                kullanicigririş === "zehra" ? "none" : "flex",
                        }}
                        onMouseOver={() => setUnderline1("underline")}
                        onMouseOut={() => setUnderline1("none")}
                    >
                        Giriş yap
                    </button>
                    <button
                        style={{
                            border: "none",
                            marginTop: "25px",
                            backgroundColor: "#3f475f",
                            color: "violet",
                            textDecoration: underlinee1,
                            display:
                                kullanicigririş === "zehra" ? "flex" : "none",
                        }}
                        onMouseOver={() => setUnderline1("underline")}
                        onMouseOut={() => setUnderline1("none")}
                    >
                        HOŞGELDİN{" "}
                        {kullanicigririş ? kullanicigririş.toUpperCase() : ""}
                    </button>

                    <Divider
                        style={{
                            marginTop: "10px",
                            borderLeft: "1px solid #60656E",
                            height: "50px",
                        }}
                    />
                    <button
                        onClick={hesapaç}
                        style={{
                            border: "none",
                            backgroundColor: "#3f475f",
                            marginTop: "25px",
                            color: "white",
                            textDecoration: underlinee2,
                            display:
                                kullanicigririş === "zehra" ? "none" : "flex",
                        }}
                        onMouseOver={() => setUnderline2("underline")}
                        onMouseOut={() => setUnderline2("none")}
                    >
                        Hesap aç
                    </button>
                    <button
                        onClick={çikişyapmakiçin}
                        style={{
                            border: "none",
                            backgroundColor: "#3f475f",
                            marginTop: "25px",

                            color: "white",
                            textDecoration: underlinee2,
                            display:
                                kullanicigririş === "zehra" ? "flex" : "none",
                        }}
                        onMouseOver={() => setUnderline2("underline")}
                        onMouseOut={() => setUnderline2("none")}
                    >
                        Çıkış yap
                    </button>
                    <button
                        variant="contained"
                        color="primary"
                        style={{
                            marginTop: "20px",
                            height: "30px",
                            border: "1px solid white",
                            backgroundColor: buttonHover,
                            color: "white",
                        }}
                        onMouseOver={() => setButtonHover("#3f475f")}
                        onMouseOut={() => setButtonHover("#363C51")}
                    >
                        <Typography variant="body1" component="span">
                            oto
                        </Typography>
                        <Typography
                            variant="body1"
                            component="span"
                            color="yellow"
                        >
                            bid
                        </Typography>
                        <Typography variant="body1" component="span">
                            {" "}
                            ile Aracını Sat
                        </Typography>
                    </button>
                    <button
                        onClick={ilanversayfasi}
                        variant="contained"
                        style={{
                            marginTop: "20px",
                            height: "30px",
                            width: "150px",
                            border: "1px solid white",
                            backgroundColor: buttonHover2,
                            color: "white",
                            border: "none",
                        }}
                        onMouseOver={() => setButtonHover2("#3388E3")}
                        onMouseOut={() => setButtonHover2("#1E90FF")}
                    >
                        Ücretsiz İlan Ver
                    </button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Üstgövde;
