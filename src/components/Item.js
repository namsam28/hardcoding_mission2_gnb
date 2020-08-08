import React from "react";

const Item = ({ sitemap, match }) => {
    const pageInfo = sitemap.find(
        (page) =>
            page.path === match.params.pagepath ||
            page.path === "/" + match.params.pagepath
    );
    const subTitle = pageInfo.pagename;
    return (
        <div>
            <h2>{subTitle}</h2>
        </div>
    );
};

export default React.memo(Item);
