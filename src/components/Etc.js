import React from "react";

const Etc = ({ match, sitemap }) => {
    const pageInfo = sitemap.find(
        (page) => page.path === match.path || "*" === match.path
    );
    const mainTitle = pageInfo.pagename;

    return (
        <div>
            <h1>{mainTitle}</h1>
            Etc 페이지 입니다.
        </div>
    );
};

export default Etc;
