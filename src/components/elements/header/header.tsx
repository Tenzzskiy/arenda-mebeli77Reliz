import React, {useContext} from 'react';
import { LOCALHOST } from '../../../graphql/consstants';
import styles from "../../pages/mainPage/mainPage.module.scss";
import {SEOContext} from "../../../context/context";

const Header = ({mainImg}:any) => {
    const data:any = useContext(SEOContext);
    console.log(data)
    return (
        <>
            <div className={styles.content}>
                <img className={styles.img} src={mainImg ? LOCALHOST + mainImg : "/images/mainPage/1.jpg"} alt=""/>
                <div className={styles.description}>
                    <h1>{data.title}</h1>
                    <div className={styles.text}>{data.description}</div>
                </div>
            </div>
        </>
    );
};

export default Header;