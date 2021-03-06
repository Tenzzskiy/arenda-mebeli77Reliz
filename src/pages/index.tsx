import type { NextPage } from 'next'
import MainPage from "../components/pages/mainPage";

import {
    parseAdditionsProps,
    parseCatalogProps, parseFooter, parseMainPageData, parseMenuCards, parseNews,
    parsePodborkaProps
} from './../hooks/parsers/parser'
import {AppWrapper} from "../utilites/helpers/helpers";

import {
    getAdditionsPages,
    getAdditionsProps,
    getCatalogCards, getFooterCards, getMainPageData,
    getMenuCards,
    getNews,
    getPodborkaCards
} from "../utilites/api/api";
import Head from 'next/head';
import { useState} from "react";
import HeaderSection from "../components/sections/headerSection";
import { env } from 'process';
import {DOMAIN, GRAPHQL_ENDPOINT} from "../graphql/consstants";
import FooterSection from "../components/sections/FooterSection/FooterSection";




export async function getStaticProps(context:any) {
  // @ts-ignore
  const Titles = await getCatalogCards();
  const PodborkaCards = await getPodborkaCards();
  const AdditionalCards = await getAdditionsProps();
  const News = await getNews() ;
  const MenuCards = await getMenuCards() ;
  const FooterCards = await getFooterCards();
  const SEO = await getMainPageData();
  return {
    props: {
        SEO: parseMainPageData(SEO),
        FooterCards:parseFooter(FooterCards.futers.data),
      News:parseNews(News.novostis.data),
      MenuCards:parseMenuCards(MenuCards.kartochkaMenyus.data),
      CategoryCards:parseCatalogProps(Titles),
      PodborkaCards:parsePodborkaProps(PodborkaCards),
      AdditionalCards:parseAdditionsProps(AdditionalCards.straniczaDopolnitelnojMebelis.data),
    },
  }
}

const Home: NextPage = ({SEO,FooterCards,MenuCards,CategoryCards,PodborkaCards,AdditionalCards,News}:any) => {
    const [menu,setMenu] = useState(false);

  return (
    <>
        <Head>
            <title itemProp='headline'>Аренда мебели</title>
            <meta
                itemProp='description'
                name='description'
                content={SEO.description}
            />
            <meta property='og:title' content={SEO.metaHead} />
            <meta
                property='og:description'
                content=''
            />
            <meta property='og:url' content={DOMAIN} />
            <link rel='canonical' href={DOMAIN} />
        </Head>
        <AppWrapper SEO={SEO} CategoryCards={CategoryCards} PodborkaCards={PodborkaCards} News={News} AdditionalCards={AdditionalCards} >
          <HeaderSection menu={menu} setMenu={setMenu} />
        <MainPage menu={menu} setMenu={setMenu} MenuCards={MenuCards} />
            <FooterSection FooterCards={FooterCards} />
      </AppWrapper>
    </>
  )
}

export default Home
