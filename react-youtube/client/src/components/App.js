import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import VideoUploadPage from "./views/VideoUploadPage/VideoUploadPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NavBar />
            <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
                <Switch>
                    <Route exact path="/" component={Auth(LandingPage, null)} />
                    {/* 아무나 접속가능 null */}
                    <Route exact path="/login" component={Auth(LoginPage, false)} />
                    {/* 로그인 한사람은 못들어감  false*/}
                    <Route exact path="/register" component={Auth(RegisterPage, false)} />
                    <Route exact path="/video/upload" component={Auth(VideoUploadPage, true)} />
                    {/* 로그인 한 사람만 안하면 랜딩페이지로 */}
                </Switch>
            </div>
            <Footer />
        </Suspense>
    );
}

export default App;
