import React from "react";
import { Route } from "react-router-dom";
import Item from "./Item";

//초기 로드될 때 제공되야되는 location > state 값이 없으므로 뜨지 않는다.
const Intro = ({ match, sitemap }) => {
    const pageInfo = sitemap.find((page) => page.path === match.path);
    const mainTitle = pageInfo.pagename;

    return (
        <div>
            <h1>{mainTitle}</h1>
            <Route
                path="/intro/:pagepath"
                render={({ match }) => (
                    <Item sitemap={pageInfo.depth2} match={match} />
                )}
            />
            인트로 페이지 입니다.
        </div>
    );
};

export default React.memo(Intro);
