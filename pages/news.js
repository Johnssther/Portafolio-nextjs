import Link from "next/link";
import Layout from "../components/Layout";

import { posts } from "../data";

const NewsCard = ({ article }) => {
    return (
        <div className="col-md-4 mt-4">
            <div className="card">
                <div className="overflow">
                    {
                        article.urlToImage === null ? 
                        null
                        :
                        <img src={article.urlToImage} alt={article.title} className="card-img-top" />
                    }
                </div>
                <div className="card-body">
                    <h4>{article.title}</h4>
                    <p>{article.description} <a href={article.url}>Ver mas</a></p>
                    <span className="bg-success">{article.author}</span>
                </div>
            </div>
        </div>
    );   
}

const News = ({data}) => {
    return (
        <Layout title="Mi News" footer={true}>
            <div className="row">
                {data.articles.map((article, i) => (
                    <NewsCard article={article} key={i} />
                ))}
            </div>
        </Layout>
    );
};

export async function getServerSideProps() {
    const API_KEY = '557eab41fe1d44ab950e4d182bc487c1';
    const country = 'co';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
    
    const res = await fetch(url);
    const data = await res.json();
    
    return {
        props: {
            data,
        },
    };
}

export default News;