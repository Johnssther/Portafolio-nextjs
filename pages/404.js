import Layout from '../components/Layout'
import Link from 'next/link';

const Custom404 = () => {
    return(
        <Layout>
            <h1>Error 404</h1>
            <Link href="/">
                <a> Volver al home</a>
            </Link>
        </Layout>
    );
}

export default Custom404;