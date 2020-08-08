import React from "react";
import { NavLink } from "react-router-dom";
import GnbSub from "./GnbSub";

const GnbItem = ({ navInfo }) => {
    const mainTitle = navInfo.pagename;
    const naviDepth1 = navInfo.path;
    const naviDepth2 = navInfo.depth2;

    return (
        <li className="depth1">
            <NavLink activeClassName="active" to={naviDepth1} exact>
                {mainTitle}
            </NavLink>
            <GnbSub depth1={naviDepth1} navInfo={naviDepth2} />
        </li>
    );
};

export default React.memo(GnbItem);
