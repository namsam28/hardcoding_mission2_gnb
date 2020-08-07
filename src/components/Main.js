import React from "react";
import { Route } from "react-router-dom";
import Item from "./Item";

const Main = ({ location }) => {
    const mainTitle = location.mainTitle;
    console.log(location);
    return (
        <div>
            <h1>{mainTitle}</h1>
            <Route path="/:id" component={Item} />
            메인페이지 입니다.
        </div>
    );
};

export default React.memo(Main);
