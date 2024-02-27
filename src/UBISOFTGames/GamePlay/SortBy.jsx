import React from "react";
import Heading from "../Heading";
import Filter from './fitler'
import SortGames from './SortGames'
const SortBy = () => {
    return(
        <React.Fragment>
            <div className="theme-SortByContent">
                <div className="theme-SortBySelect">
                    <div>
                        <Heading 
                            className='theme-SortByTitle'
                            title={'SORT BY:'}
                        /> 
                    </div>
                    <div>
                        <Filter />
                    </div>
                    <div className="theme-SortByoption">
                        <div CardImage='theme-SortByoptions'>
                            <div>
                                <select>
                                    <option value={'All PlatFroms'}>All PlatFroms</option>
                                    <option value={'PC'}>PC</option>
                                    <option value={'xbox series x|s'}>xbox series x|s</option>
                                    <option value={'PlayStation 5'}>PlayStation 5</option>
                                    <option value={'Xbox One'}>Xbox One</option>
                                    <option value={'PlayStation 4'}>PlayStation 4</option>
                                    <option value={'Xbox 360'}>Xbox 360</option>
                                    <option value={'PlayStation 3'}>PlayStation 3</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <select>
                                    <option value={'New'}>New Games</option>
                                    <option value={'Old Games'}>Old Games</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SortGames />
        </React.Fragment>
    );
}
export default SortBy;