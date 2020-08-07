import React from "react";
import { Route } from "react-router-dom";
import Item from "./Item";

//초기 로드될 때 제공되야되는 location > state 값이 없으므로 뜨지 않는다.
const Intro = ({ location }) => {
    const mainTitle = location.mainTitle;

    return (
        <div>
            <h1>{mainTitle}</h1>
            <Route path="/intro/:id" component={Item} />
            인트로 페이지 입니다.
        </div>
    );
};

export default React.memo(Intro);
