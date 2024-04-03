/** @format */

import { Button, Divider, Grid, TextField } from "@mui/material";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import logo from "../logo.png";
import Hesapaçalt from "../sayfaaltı/hesapaçalt";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth/login";
import cookie from "../../src/utils/cookie";
import Swal from "sweetalert2";
function Girişyap() {
    const [useeposta, setUseeposta] = useState("");
    const [useepassword, setUseepassword] = useState("");
    const [error, setError] = useState("");
    const [erroreposta, setErrorepost] = useState("");
    const [username, setusername] = useState("zehra");
    const navigate = useNavigate();

    const epostachange = (e) => {
        setUseeposta(e.target.value);
    };

    const passwordchange = (e) => {
        setUseepassword(e.target.value);
    };

    const handleformsubmit = (e) => {
        e.preventDefault(); // Formun sayfayı yeniden yüklemesini önlemek için

        if (useeposta.includes("@")) {
            setErrorepost("");
            console.log(useeposta);
            if (useeposta !== "") {
                console.log("eposta tmm");
                if (useepassword !== "") {
                    login(useeposta, useepassword)
                        .then((res) => {
                            cookie.set("token", res.data.token);
                            cookie.set("username", res.data.username);
                            navigate("/");
                        })
                        .catch((err) => {
                            Swal.fire({
                                title: "Hata",
                                text: err.response.data.message,
                                icon: "error",
                                confirmButtonText: "Tamam",
                            });
                        });
                } else {
                    setError("Şifreniz yanlıştır!!!");
                }
            } else {
                alert("Kullanıcı Bilgileriniz Doğru Değil");
            }
        } else {
            setErrorepost("Eposta adresinizi doğru giriniz!!!");
        }
    };

    // Burada formun diğer verilerini işleyebilirsiniz

    return (
        <Grid
            container
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#F8F8F8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img
                src={logo}
                alt=""
                style={{
                    position: "absolute",
                    width: "300px",
                    height: "100px",
                    marginTop: "-1200px",
                }}
                alt="Logo"
            />
            <Grid
                xs={3.5}
                style={{
                    border: "1px solid #AAAAAA",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    height: "550px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "200px",
                }}
            >
                <label
                    style={{
                        color: "#333333",
                        fontWeight: "700",
                        marginTop: "-10px",
                    }}
                >
                    GİRİŞ YAP
                </label>
                <form
                    onSubmit={handleformsubmit}
                    style={{
                        marginTop: "30px",
                        display: "flex",
                        flexDirection: "column",
                        width: "500px",
                        gap: "20px",
                    }}
                >
                    <TextField
                        onChange={epostachange}
                        margin="normal"
                        value={useeposta}
                        variant="outlined"
                        label="E-posta"
                        placeholder="E-posta adresinizi giriniz"
                    />
                    {erroreposta && (
                        <p style={{ color: "red" }}>{erroreposta}</p>
                    )}
                    <TextField
                        type="password"
                        onChange={passwordchange}
                        margin="normal"
                        value={useepassword}
                        variant="outlined"
                        label="Şifre"
                        placeholder="Şifrenizi giriniz"
                    />
                    <Button variant="contained" type="submit">
                        GİRİŞ
                    </Button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <Divider style={{ width: "100%", height: "10px" }} />
                </form>
                <Button
                    variant="outlined"
                    style={{ marginTop: "20px", gap: "10px", width: "480px" }}
                >
                    {" "}
                    <GoogleIcon /> Google ile Hesap Aç
                </Button>
                <Button
                    variant="outlined"
                    style={{ marginTop: "20px", gap: "10px", width: "480px" }}
                >
                    {" "}
                    <AppleIcon /> Apple ile Hesap Aç{" "}
                </Button>
            </Grid>
            <Hesapaçalt />
        </Grid>
    );
}

export default Girişyap;
