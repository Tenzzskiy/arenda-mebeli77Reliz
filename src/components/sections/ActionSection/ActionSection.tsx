import React from 'react';
import Slider from "../../elements/Slider/Slider";
import styles from './ActionSection.module.scss'
import {Props} from "./ActionSection.props";
import BucketSlider from "../../elements/bucket/bucketSlider/bucketSlider";

const ActionSection = ({catalog=false,catalogType,title,array,count}:Props) => {
    console.log(catalog)
    return (
        <>
            <div className={styles.action}>
            <h2>{title}</h2>

                {catalog ? <BucketSlider array={array} catalogType={catalogType} /> : <Slider count={count} catalog={catalog} catalogType={catalogType} array={array}  />}
            </div>
        </>
    );
};

export default ActionSection;