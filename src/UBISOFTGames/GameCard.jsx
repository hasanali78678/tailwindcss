import React from "react";
const GameCards = (props) => {
    return(
        <React.Fragment>
            <div className={props.classNameContent}>
                <img className={props.classNameImage} src={props.CardImage} alt="GamesCard" />
                <p className={props.classNameTitle}>{props.GameTitle}</p>
                <p className={props.classNameEdition}>{props.GameEdition}</p>
                <div className={props.classPriceContent}>
                    <p className={props.classNamePrice}>{props.GamePrice}</p>
                    <p className={props.classNameOLDPrice}>{props.GameOLDPrice}</p>
                </div>
            </div>
        </React.Fragment>
    );  
}
export default GameCards;