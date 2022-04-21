import React, {useContext} from 'react';
import Header from "../../elements/header/header";
import PreferenceSection from "../../sections/PreferenceSection";
import Catalog from "../../elements/Catalog";
import ActionSection from "../../sections/ActionSection/ActionSection";
import cards from "../../../data/categories.json";
import PreferenceArenda from "../../elements/Preference/PreferenceArenda";
import styles from './CategoryPage.module.scss'
import date from "../../../data/offer.json";
import Releases from "../../sections/RelisesSection/Releases";
import Asks from "../../elements/Asks/Asks";
import Seo from "../../sections/SEOSection/SEO";
import Feedback from "../../sections/FeedbackSection/Feedback";
import {AdditionalContext, PodborkiContext} from "../../../context/context";
import {AnimatePresence} from "framer-motion";
import Portal from "../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../elements/Menu";
const CategoryPage = ({MenuCards,menu, setMenu,mainImg,CatalogCategoryCards}:any) => {
    const Podborki = useContext(PodborkiContext)
    const Additional = useContext(AdditionalContext);
    return (
        <>
            <Header mainImg={mainImg} />
            <AnimatePresence>
                {menu && <Portal>
                    <OverlayingPopup isOpened={menu} onClose={() => {
                        // @ts-ignore
                        setMenu(prev => !prev);
                    }
                    }>
                        <Menu MenuCards={MenuCards} setMenu={setMenu}  />
                    </OverlayingPopup>
                </Portal>}
            </AnimatePresence>
            <PreferenceSection themes={true} />
            <Catalog CatalogCategoryCards={CatalogCategoryCards} category={false} type={false} />
            <div className={styles.preference_arenda}>
                <PreferenceArenda />
            </div>
            <ActionSection count={2} title='Возможно вы ищите' name='Для выставки' description='Информационные экраны,
специальная мебель и другое' />
            <Releases title='Проведенные мерпориятия' />
            <ActionSection array={Podborki} count={1} title='Подборки с мебелью'  />
            <Asks />
            <Seo />
            <Feedback />
        </>
    );
};

export default CategoryPage;