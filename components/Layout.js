import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import Navbar from './Navbar'
import NProgress from "nprogress";
import classNames from "classnames";

const Layout = ({ children, title, footer = true, dark = false }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            console.log(url);
            NProgress.start();
        };

        router.events.on("routeChangeStart", handleRouteChange);

        router.events.on("routeChangeComplete", () => NProgress.done());

        router.events.on("routeChangeError", () => nProgress.done());

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Sitio web de John Alejandro portafolio" />
            </Head>
            <Navbar />
            <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
                <main className='container py-4'>
                    {children}
                </main>
                {footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h1>&copy; John A. Hernandez</h1>
                            <p>2000 - {new Date().getFullYear()}</p>
                            <p>Todos los derechos reservados.</p>
                        </div>
                    </footer>
                )}
            </div>

        </>
    );
}

export default Layout;
