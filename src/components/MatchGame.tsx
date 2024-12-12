/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useEffect, useState } from 'react';
import '../App.css';

type ChildProps = {
    data: object,
}


const MatchGame: FC<ChildProps> = ({ data }) => {
    const [itemsData, setItemsData] = useState(data)
    const [targetValue, setTargetValue]: any = useState('')
    const [currentValue, setCurrentValue]: any = useState('')
    const [errors, setErrors]: any = useState(0)
    const [success, setSuccess]: any = useState(0)
    useEffect(() => {
        if (errors !== 0) {
            // console.log("errores")
            console.log(errors)
        }
        if (success !== 0) {
            // console.log("completados")
            console.log(success)
        }
    }, [errors, success])

    useEffect(() => {

        if (targetValue !== '' && targetValue.classList.value.indexOf('active') === -1) {
            console.log('adding style')
            targetValue.classList.add('active');
        }

        if (currentValue !== '' && currentValue.classList.value.indexOf('active') === -1) {
            currentValue.classList.add('active');
            validatePair() ? setSuccess(success + 1) : setErrors(errors + 1);
            setTimeout(() => {
                targetValue.classList.remove('active');
                currentValue.classList.remove('active');
                setTargetValue('')
                setCurrentValue('')
            }, 1000);

        }

    }, [targetValue, currentValue]);

    const validatePair = () => targetValue.id === currentValue.textContent;




    // }


    const getRandomInt = (max: number) => {

        return Math.floor(Math.random() * max);
    }

    return (

        <div className="containerGame">
            <div className="containerRecords">
                <div>
                    Completadas: {success}
                </div>
                <div>
                    Erroneos: {errors}
                </div>
            </div>
            <div className="containerItems">
                {Object.entries(itemsData).map((item: any, index: number) => {
                    return (
                        <span
                            className={`initialClass country ${item[0]}`}
                            onClick={(e) => {
                                if (targetValue === '') {
                                    setTargetValue(e.target)
                                } else {
                                    setCurrentValue(e.target)
                                }
                            }
                            }
                            key={`${item[0]}-${index}`}
                            id={item[1]} >
                            {item[0]}
                        </span>
                    )
                })}
                {Object.entries(itemsData).map((item: any, index: number) => {
                    return (
                        <span
                            className={`initialClass city ${item[1]}`}
                            onClick={(e) => {
                                if (targetValue === '') {
                                    setTargetValue(e.target)
                                } else {
                                    setCurrentValue(e.target)
                                }
                            }
                            }
                            key={`${item[1]}-${index}`}
                            id={item[0]} >
                            {item[1]}
                        </span>
                    )
                })}
            </div>


        </div>
    )
};


export default MatchGame;

