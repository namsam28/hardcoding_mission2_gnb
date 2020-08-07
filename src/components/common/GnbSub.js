import React from "react";
import { NavLink } from "react-router-dom";
import "./GnbSub.scss";

const GnbSub = ({ depth1, navInfo, mainTitle }) => {
    const MAIN_TITLE = mainTitle;
    const NAVIGATION_DEPTH1 = depth1;
    const NAVIGATION_DEPTH2 = navInfo;

    return (
        <div className="gnb-depth2">
            <ul>
                {NAVIGATION_DEPTH2.length > 0 &&
                    NAVIGATION_DEPTH2.map((nav) => {
                        return (
                            <li key={nav.path}>
                                <NavLink
                                    activeClassName="active"
                                    to={{
                                        pathname: NAVIGATION_DEPTH1 + nav.path,
                                        mainTitle: MAIN_TITLE,
                                        subTitle: nav.pagename,
                                    }}
                                    exact
                                >
                                    {nav.pagename}
                                </NavLink>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default React.memo(GnbSub);
