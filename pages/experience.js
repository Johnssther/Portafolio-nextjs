import Layout from '../components/Layout'
import Link from 'next/link';
import { moreExperiences } from "../data";

const Experience = () => {
    return (
        <Layout title='Experiencia'>
            <section>
                {/* Experience */}
                <div className="card bg-light animate__animated animate__fadeInRight">
                    <div className="card-body">
                        <h1>Experience</h1>

                        <ul>
                            {/* List Item Experience */}
                            {moreExperiences.map(({ title, from, to }, index) => (
                                <li key={index}>
                                    <h3>{title}</h3>
                                    <h5>
                                        {from} {to ? `- ${to}` : "- current"}
                                    </h5>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Sint excepturi ea explicabo. Illum suscipit illo, porro
                                        quisquam voluptatem officiis fugiat vel animi aliquam
                                        inventore rem. Quo laudantium temporibus cupiditate. Aut?
                                    </p>
                                </li>
                            ))}
                            <Link href="/">
                                <a className="btn btn-light">Regresar al inicio</a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Experience;