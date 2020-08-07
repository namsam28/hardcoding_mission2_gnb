import React from "react";
import { NavLink } from "react-router-dom";
import GnbSub from "./GnbSub";

const GnbItem = ({ navInfo }) => {
    const MAIN_TITLE = navInfo.pagename;
    const NAVIGATION_DEPTH1 = navInfo.path;
    const NAVIGATION_DEPTH2 = navInfo.depth2;

    return (
        <li className="depth1">
            <NavLink
                activeClassName="active"
                to={{
                    pathname: NAVIGATION_DEPTH1,
                    mainTitle: MAIN_TITLE,
                }}
                exact
            >
                {MAIN_TITLE}
            </NavLink>
            <GnbSub
                depth1={NAVIGATION_DEPTH1}
                navInfo={NAVIGATION_DEPTH2}
                mainTitle={MAIN_TITLE}
            />
        </li>
    );
};

export default React.memo(GnbItem);
