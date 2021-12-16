import Layout from '../components/Layout'
import Link from 'next/link';
import Error from "./_error";

const Github = ({ user, statusCode }) => {
    if (statusCode) {
        return <Error statusCode={statusCode} />;
    }
    return (
        <Layout title="Github John Alejandro" footer={false} dark>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt="" style={{ width: "100%" }} />
                        <p>{user.bio}</p>
                        {/* <Link href={user.blog}>
                            <a target="_blank" className="btn btn-outline-secondary my-2">Ir a mi blog</a>
                        </Link> */}
                        <Link href={user.html_url}>
                            <a target="_blank" className="btn btn-outline-secondary"> Ir a mi github </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps() {
    const res = await fetch(
        "https://api.github.com/users/Johnssther"
    );
    const data = await res.json();
    console.log(data);

    const statusCode = res.status > 200 ? res.status : false;

    return {
        props: {
            user: data,
            statusCode,
        },
    };
}

export default Github;