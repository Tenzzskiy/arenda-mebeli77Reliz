import React, {useContext} from 'react';
import styles from "../mainPage/mainPage.module.scss";
import Header from "../../elements/header/header";
import Catalog from "../../elements/Catalog";
import ActionSection from "../../sections/ActionSection/ActionSection";
import Releases from "../../sections/RelisesSection/Releases";
import Asks from "../../elements/Asks/Asks";
import Seo from "../../sections/SEOSection/SEO";
import Pluses from "../../elements/Pluses";
import {CatalogCardsContext, SliderCardsContext} from "../../../context/context";
import {parseSliderCardsData} from "../../../hooks/parsers/parser";
import Portal from "../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../elements/Menu";
import {AnimatePresence} from "framer-motion";


const PodborkaPage = ({MenuCards,menu, setMenu,CatalogAdditionalCards}:any) => {
    const catalog = useContext(SliderCardsContext)
    console.log(catalog)
    return (
        <>
            <div className={styles.mainpage}>
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
                <Header />
                <Pluses/>
                <Catalog CatalogAdditionalCards={CatalogAdditionalCards} type={false} imgArrayCount={false} addition={true} category={false}/>
                <Releases title='Проведенные мерпориятия' />
                <ActionSection catalog={true} array={parseSliderCardsData(catalog)} catalogType={false} count={1} title='Подборки с мебелью' name='Для выставки' description='Информационные экраны,
специальная мебель и другое' />
                <Asks />
                <Seo />
            </div>
        </>
    );
};

export default PodborkaPage;