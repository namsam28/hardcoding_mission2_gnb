import React from "react";

const Item = ({ location }) => {
    const subTitle = location.subTitle;

    return (
        <div>
            <h2>{subTitle}</h2>
        </div>
    );
};

export default React.memo(Item);
