import React from "react";
import NavBar from '../NavBar'
import Footer from '../Footer'
import MoreGame from './MoreGame'
import Favgames from "./FavGames";
import UbiSoftCon from '../UbisoftCon'
import VisitChannels from '../VisitChannels'
import SortBy from './SortBy'
const Play = () => {
    return(
        <React.Fragment>
            <NavBar />
            <MoreGame />
            <SortBy />
            <Favgames />
            <UbiSoftCon />
            <VisitChannels />
            <Footer />
        </React.Fragment>
    );
}
export default Play;