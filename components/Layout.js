import Navbar from './Navbar'
import Head from 'next/head';

const Layout = ({children, title}) => {
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Sitio web de John Alejandro portafolio" />
            </Head>
            <Navbar />
            <main className='container py-4'>
                {children}
            </main>
        </>
    );
}

export default Layout;
