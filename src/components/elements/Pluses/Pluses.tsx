import React from 'react';
import styles from './Pluses.module.scss'
import Flag from "../Flag/Flag";
import FlagElement from "../FlagElement/FlagElement";
const Pluses = () => {
    return (
        <div className={styles.pluses}>
            <div className={styles.content}>
            <div className={styles. flex}>
            <div className={styles.text}>
            <div>
                Мебель с подсветкой — смотрится очень необычно,
                притягивает к себе внимание гостей и привнесет в общий интерьер вашего мероприятия особый шарм!
            </div>
            <div>
                Светодиодная подсветка не потребляет много энергии,
                она имеет долгий срок службы, и сможет «вытерпеть» различные перепады температуры
            </div>
            </div>
                <div className={styles.icons}>
                    <FlagElement text='Экологичный пластик' />
                    <FlagElement text='16 цветов, 48 оттенков' />
                    <FlagElement text='Несколько режимов переключения' />
                    <FlagElement text='WOW-эффект для всех гостей гарантирован' />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Pluses;