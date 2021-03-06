import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import styles from "../elements/Menu/Menu.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {deleteFavourite, setFavourite} from "../../redux/cart/reducer";
import {useRouter} from "next/router";

const CatalogFavouriteIcon = ({setFavouriteModal,activeFavourite,setActiveFavourite,card,handleChangeCard,element,index}:any) => {
    const [color,setColor] = useState("#B7B4AE");
    // @ts-ignore
    const items = useSelector(state => state.cart.favourites);
    // const check = items.find((elem:any) => elem.article === element.article)
    const [prevent,setPrevent] = useState(false)
    const dispatch = useDispatch();
    useEffect(() =>{
        setActiveFavourite(index+1)
    },[card])
    const check = items.find((elem:any) => elem.article === card.article)

    const handleAddToFavourites = () =>{
        setPrevent(prevState => !prevState)
        if (typeof check !== 'undefined'){
            handleChangeCard();
            dispatch(deleteFavourite(card))
            // setPrevent(false)
            // setColor("#ce2afd")

        } else if (typeof check === 'undefined'){
            handleChangeCard();
            dispatch(setFavourite(card));
            setFavouriteModal(true);
            const timedId = setTimeout(() =>{
                setFavouriteModal(false);
                clearTimeout(timedId)
            },1500)
            // setPrevent(true)
            // setColor("#B7B4AE")


        }

    }

    return (
        <svg
            onClick={handleAddToFavourites}
            className={classNames(   activeFavourite === index+1 ? styles.activeFavourite : null,styles.favourite2, typeof check !== 'undefined' ? styles.pinkFavourite : null, styles.icon)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1488_9699)">
                <path d="M17.5 1.9165C16.3739 1.93402 15.2724 2.24836 14.3068 2.82778C13.3411 3.40719 12.5453 4.23117 12 5.2165C11.4546 4.23117 10.6589 3.40719 9.69323 2.82778C8.72753 2.24836 7.62604 1.93402 6.49999 1.9165C4.70493 1.99449 3.01369 2.77976 1.79577 4.10074C0.577848 5.42171 -0.0677617 7.17103 -1.11917e-05 8.9665C-1.11917e-05 13.5135 4.78599 18.4795 8.79999 21.8465C9.69621 22.5996 10.8293 23.0125 12 23.0125C13.1706 23.0125 14.3038 22.5996 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.9665C24.0677 7.17103 23.4221 5.42171 22.2042 4.10074C20.9863 2.77976 19.295 1.99449 17.5 1.9165ZM13.915 20.3165C13.379 20.7679 12.7007 21.0154 12 21.0154C11.2992 21.0154 10.621 20.7679 10.085 20.3165C4.94699 16.0055 1.99999 11.8695 1.99999 8.9665C1.93163 7.70122 2.36635 6.46023 3.20935 5.5142C4.05235 4.56817 5.23522 3.99385 6.49999 3.9165C7.76476 3.99385 8.94763 4.56817 9.79063 5.5142C10.6336 6.46023 11.0683 7.70122 11 8.9665C11 9.23172 11.1053 9.48607 11.2929 9.67361C11.4804 9.86115 11.7348 9.9665 12 9.9665C12.2652 9.9665 12.5196 9.86115 12.7071 9.67361C12.8946 9.48607 13 9.23172 13 8.9665C12.9316 7.70122 13.3664 6.46023 14.2094 5.5142C15.0523 4.56817 16.2352 3.99385 17.5 3.9165C18.7648 3.99385 19.9476 4.56817 20.7906 5.5142C21.6336 6.46023 22.0683 7.70122 22 8.9665C22 11.8695 19.053 16.0055 13.915 20.3125V20.3165Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_1488_9699">
                    <rect fillOpacity="1" strokeOpacity="1" stroke='blue' width="24" height="24" fill="#123456"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default CatalogFavouriteIcon;