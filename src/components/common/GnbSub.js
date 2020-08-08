import React from "react";
import { NavLink } from "react-router-dom";
import "./GnbSub.scss";

const GnbSub = ({ depth1, navInfo }) => {
    const naviDepth1 = depth1;
    const naviDepth2 = navInfo;

    return (
        <div className="gnb-depth2">
            <ul>
                {naviDepth2.length > 0 &&
                    naviDepth2.map((depth2) => {
                        return (
                            <li key={depth2.path}>
                                <NavLink
                                    activeClassName="active"
                                    to={naviDepth1 + depth2.path} //depth1의 url과 depth2 url을 조합
                                    exact
                                >
                                    {depth2.pagename}
                                </NavLink>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default React.memo(GnbSub);
