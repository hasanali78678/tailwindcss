import React from "react";
const Heading = (props) => {
    return(
        <React.Fragment>
            <h1 className={props.className}>{props.title}</h1>
        </React.Fragment>
    );
}
export default Heading;