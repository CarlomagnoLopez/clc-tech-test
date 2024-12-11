/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useEffect, useState } from 'react';
import '../App.css';

type ChildProps = {
    data: object,
}


const MatchGame: FC<ChildProps> = ({ data }) => {
    const [itemsData, setItemsData] = useState(data)
    const [itemsCountry, setItemsCountry]: any = useState([])
    const [itemsCity, setItemsCity]: any = useState([])

    useEffect(() => {
        createCountryVsCity()
    }, []);

    const getRandomInt = (max: number) => {

        return Math.floor(Math.random() * max);
    }

    const createCountryVsCity = () => {
        if (itemsCountry.length === 0) {

            for (const [key, value] of Object.entries(itemsData)) {
                itemsCountry.push(key)
                itemsCity.push(value)
            }
            // makeRandomOrder(itemsCountry.length)
        }
    }

    // const makeRandomOrder = (length: any) => {


    // }




    // console.log(data)
    return (
        <div className="containerGame">
            {itemsCountry.length > 0 && itemsCountry.map(
                (item: any, index: number) => {
                    return (
                        <span id={itemsCity[index]} className="country initialClass">
                            {item}
                        </span>)
                })}

            {itemsCity.length > 0 && itemsCity.map(
                (item: any, index: number) => {
                    return (
                        <span id={itemsCountry[index]} className="city initialClass">
                            {item}
                        </span>)
                })}

            {/* <span className="country initialClass">
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
            </span> */}
        </div>
    )
};


export default MatchGame;