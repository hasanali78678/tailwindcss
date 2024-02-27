import React from "react";
const MostPopCards = (props) => {
    return(
        <React.Fragment>
            <div className={props.classNameContent}>
                <div className={props.classNameImg}>
                    <img className={props.classNameImage} src={props.CardImage} alt="MostPopularCard" />
                </div>
                <p className={props.classNameTitle}>{props.GameTitle}</p>
                <p className={props.classNameEdition}>{props.GameEdition}</p>
                <p className={props.classNamePrice}>{props.GamePrice}</p>
            </div>
        </React.Fragment>
    );  
}
export default MostPopCards;