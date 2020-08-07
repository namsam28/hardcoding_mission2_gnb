import React from "react";
import { Route } from "react-router-dom";
import Item from "./Item";

const Mypage = ({ location }) => {
    const mainTitle = location.mainTitle;

    return (
        <div>
            <h1>{mainTitle}</h1>
            <Route path="/mypage/:id" component={Item} />
            마이페이지 입니다.
        </div>
    );
};

export default Mypage;
