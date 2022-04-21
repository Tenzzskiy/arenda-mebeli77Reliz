import React from 'react';
import classNames from "classnames";
import styles from "../../cards/PreferenceCard/PreferenceCard.module.scss";
import ShowRoom from "../../icons/ShowRoom";
import SecondDay from "../../icons/SecondDay";
import SaleForEvents from "../../icons/SaleForEvents";

export interface Flag {
    id:number;
}

const Flag = ({id}:Flag) => {
    return (
        <div className={classNames(id === 2 ? styles.background5 : id === 3 ? styles.background6 : id === 1 ? styles.background4 : null,styles.ribbon1)} >
            { id === 1 ?

                <ShowRoom /> :
                id === 2 ?  <SecondDay /> :
                    id === 3 ?    <SaleForEvents /> : null


            }


        </div>
    );
};

export default Flag;