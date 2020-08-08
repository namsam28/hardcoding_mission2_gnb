import React from "react";
import { Route } from "react-router-dom";
import Item from "./Item";

const Mypage = ({ match, sitemap }) => {
    const pageInfo = sitemap.find((page) => page.path === match.path);
    const mainTitle = pageInfo.pagename;

    return (
        <div>
            <h1>{mainTitle}</h1>
            <Route
                path="/mypage/:pagepath"
                render={({ match }) => (
                    <Item sitemap={pageInfo.depth2} match={match} />
                )}
            />
            마이페이지 입니다.
        </div>
    );
};

export default Mypage;
