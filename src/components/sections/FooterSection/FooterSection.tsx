import React from 'react';
import styles from './FooterSection.module.scss'
import Youtube from "../../icons/Youtube";
import Instagram from "../../icons/Instagram";
import classNames from "classnames";
import {number} from "../../../graphql/consstants";

const FooterSection = ({FooterCards}:any) => {
    const array1 =FooterCards.filter((elem:any) => elem.column === 1 );
    const array2 =FooterCards.filter((elem:any) => elem.column === 2 );
    const array3 =FooterCards.filter((elem:any) => elem.column === 3 );
    const array4 =FooterCards.filter((elem:any) => elem.column === 4 );
    const array5 =FooterCards.filter((elem:any) => elem.column === 5 );
    console.log(FooterCards)
    const columnData = (id:number) =>{
        switch (id){
            case 1: return array1.map((elem:any) => {
                return(
                    <div>{elem.title}</div>
                )
            })
            case 2: return array2.map((elem:any) => {
                return(
                    <div>{elem.title}</div>
                )
            })
            case 3: return array3.map((elem:any) => {
                return(
                    <div>{elem.title}</div>
                )
            })
            case 4: return array4.map((elem:any) => {
                return(
                    <div>{elem.title}</div>
                )
            })
            case 5: return array5.map((elem:any) => {
                return(
                    <div>{elem.title}</div>
                )
            })
        }
    }
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.content} itemScope itemType="http://schema.org/Organization">
                    <div className={classNames(styles.item_flex, styles.item)}>
                        <div className={styles.privacy2}>
                            Политика конфиденциальности
                        </div>
                        <span itemProp="telephone">{number} </span></div>
                    <div className={styles.item}><p> звонок бесплатный</p></div>
                    <div className={styles.item}>
                        <div className={styles.flex}>
                            <p className={styles.p}>Все права защищены © 2021 «mebel-v-arendu24» </p>
                            <div className={styles.icons}>

                                <Youtube/>
                                <Instagram/>
                            </div>
                            <div className={classNames(styles.yandex_disable, styles.yandex)}>Яндекс Оценка</div>
                        </div>
                    </div>
                    <div className={styles.privacy}>
                        Политика конфиденциальности
                    </div>
                    <div className={styles.item}><p>Все права защищены © 2021 «mebel-v-arendu24» </p></div>
                </div>
            </div>

            <div className={styles.footer2}>
                <div className={styles.content2}>
                    <div className={styles.flex2}>
                        <div className={styles.item2}>
                            {
                                columnData(1)
                            }
                        </div>
                        <div className={styles.item2}>
                            {columnData(2)}
                        </div>
                        <div className={styles.item2}>
                            {columnData(3)}
                        </div>
                        <div className={styles.item3}>
                            {columnData(4)}
                        </div>
                        <div className={styles.item4}>
                            {columnData(5)}
                        </div>
                        <div className={styles.item5}>
                            <div itemProp="telephone" className={styles.number}>{number}</div>
                            <div>звонок бесплатный</div>
                            <div className={styles.icons}>

                                <Youtube/>

                            </div>
                            <div className={styles.mail}>info@vr-v-arendu.ru</div>
                            <div className={classNames( styles.yandex)}>Яндекс Оценка</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterSection;