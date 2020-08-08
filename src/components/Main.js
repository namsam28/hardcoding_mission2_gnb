import React from "react";
import { Route } from "react-router-dom";
import Item from "./Item";

const Main = ({ match, sitemap }) => {
    const pageInfo = sitemap.find(
        (page) => page.path === match.path || "*" === match.path
    );
    const mainTitle = pageInfo.pagename;

    return (
        <div>
            <h1>{mainTitle}</h1>
            <Route
                path="/:pagepath"
                render={({ match }) => (
                    <Item sitemap={pageInfo.depth2} match={match} />
                )}
            />
            메인페이지 입니다.
        </div>
    );
};

export default React.memo(Main);
