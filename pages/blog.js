import Link from "next/link";
import Layout from "../components/Layout";

import { posts } from "../data";

const PostCard = ({ post }) => (
    <div className="col-md-4 mt-4">
        <div className="card">
            <div className="overflow">
                <img src={post.imageURL} alt="" className="card-img-top" />
            </div>
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        </div>
    </div>
);

const Blog = () => {
    return (
        <Layout title="Mi Blog" footer={true}>
            <div className="row">
                {posts.map((post, i) => (
                    <PostCard post={post} key={i} />
                ))}
            </div>
        </Layout>
    );
};

export default Blog;