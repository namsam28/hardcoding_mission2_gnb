import React from "react";

const Etc = ({ location }) => {
    const mainTitle = location.mainTitle;

    return (
        <div>
            <h1>{mainTitle}</h1>
            Etc 페이지 입니다.
        </div>
    );
};

export default Etc;
