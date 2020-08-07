import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import GnbItem from "./GnbItem";
import Sitemap from "../../api/SitemapInfo";
import "./Gnb.scss";

const Gnb = ({ location, match, history }) => {
    const sitemap = Sitemap;

    /*
    const MouseEnter = (e) => {
        e.target.classList.add("active");
        e.preventDefault();
    };

    const MouseLeave = (e) => {
        e.target.classList.remove("active");
    };
    */

    return (
        <Fragment>
            <div className="gnb">
                <ul className="gnb-depth1">
                    {sitemap.map((navInfo) => {
                        return <GnbItem key={navInfo.path} navInfo={navInfo} />;
                    })}
                </ul>
            </div>
        </Fragment>
    );
};

export default withRouter(Gnb);
