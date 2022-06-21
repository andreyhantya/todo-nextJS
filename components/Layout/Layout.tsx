import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './styles.module.scss'
import Head from "next/head";

interface ILayoutProps {
    children: React.ReactNode,
    title: string
}

const Layout = ({ children, title }: ILayoutProps): JSX.Element  => (
        <div className={styles.appWrapper}>
            <Head>
                <title>{title}</title>
            </Head>

            <Header />
               <div className={styles.appContent}>
                   { children }
               </div>
            <Footer />
        </div>
)

export default Layout;