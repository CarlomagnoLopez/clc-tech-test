import React, { FC, ReactElement, useEffect } from 'react';
import '../App.css';

type ChildProps = {
    data: object,
}


const MatchGame: FC<ChildProps> = ({ data }): ReactElement => {

    // useEffect(() => {

    // }, []);
    // console.log(data)
    return (
        <div className="containerGame">
            <span className="country initialClass"> 
                Country
            </span>
            <span className="capital initialClass"> 
                Down Town
            </span>
            <span className="country initialClass"> 
                Country
            </span>
            <span className="capital initialClass"> 
                Down Town
            </span>
            <span className="country initialClass"> 
                Country
            </span>
            <span className="capital initialClass"> 
                Down Town
            </span>
        </div>
    )
};


export default MatchGame;