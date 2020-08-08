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
    //console.log(Sitemap);

    return (
        <div className="App">
            <Header />

            <main id="contents">
                <Switch>
                    <Route
                        path="/"
                        render={({ match }) => (
                            <Main sitemap={Sitemap} match={match} />
                        )}
                        exact
                    />
                    <Route
                        path="/intro"
                        render={({ match }) => (
                            <Intro sitemap={Sitemap} match={match} />
                        )}
                    />
                    <Route
                        path="/mypage"
                        render={({ match }) => (
                            <Mypage sitemap={Sitemap} match={match} />
                        )}
                    />
                    <Route
                        path="/etc"
                        render={({ match }) => (
                            <Etc sitemap={Sitemap} match={match} />
                        )}
                    />
                    <Route
                        path="*"
                        render={({ match }) => (
                            <Main sitemap={Sitemap} match={match} />
                        )}
                    />
                </Switch>
            </main>
        </div>
    );
};

export default App;
