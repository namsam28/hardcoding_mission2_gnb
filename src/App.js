import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Mypage from "./components/Mypage";
import Etc from "./components/Etc";
import Sitemap from "./api/SitemapInfo";
import "./App.scss";

const App = () => {
    console.log(Sitemap);

    return (
        <div className="App">
            <Header />

            <main id="contents">
                <Switch>
                    <Route path="/" component={Main} exact={true} />
                    <Route path="/intro" component={Intro} />
                    <Route path="/mypage" component={Mypage} />
                    <Route path="/etc" component={Etc} />
                    <Route path="*" component={Main} />
                </Switch>
            </main>
        </div>
    );
};

export default App;
