import React, { Fragment } from "react";
import Faq from "react-faq-component";
import data from "./data";

import './DataAnalytics.css';

const DataAnalytics = () => {
    return (
        <div className="da-class">
            <Fragment>
                <Faq
                    data={data}
                    styles={{
                        bgColor: "white",
                        titleTextColor: "#48482a",
                        rowTitleColor: "#78789a",
                        rowTitleTextSize: "large",
                        rowContentColor: "#48484a",
                        rowContentTextSize: "16px",
                        rowContentPaddingTop: "10px",
                        rowContentPaddingBottom: "10px",
                        rowContentPaddingLeft: "50px",
                        rowContentPaddingRight: "150px",
                        arrowColor: "black"
                    }}
                    config={{
                        animate: true,
                        tabFocus: true
                    }}
                />
            </Fragment>
        </div>
    )
}

export default DataAnalytics;