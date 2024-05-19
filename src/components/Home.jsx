import React from 'react';
import '../styles/home.css';
import vg from '../assets/2.webp';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1 data-aos="slide-right">Sadi~Star</h1>
                    <p data-aos="slide-left">Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p data-aos="slide-left">We are your one and only solution to the star problems you face everyday. We are leading start company whose aim is to increase the problem solving ability in children.</p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div data-aos="slide-right">
                    <h1 data-aos="slide-down">Who we are?</h1>
                    <p data-aos="slide-down">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia sapiente temporibus, veritatis inventore nulla quod minima dignissimos. Debitis nesciunt eum laudantium in libero. Necessitatibus, adipisci enim. Itaque, quibusdam sequi minima, pariatur sunt voluptatum nesciunt minus iusto reprehenderit, nostrum illum! Assumenda itaque alias porro repellat, magnam nihil accusamus error quia eaque obcaecati beatae quidem! Hic magni doloribus magnam? Magni, modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam perferendis esse vero ipsa voluptatem. Unde temporibus eos quia beatae dignissimos.</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div data-aos="slide-left">
                    <h1 data-aos="slide-down">Brands</h1>
                    <article data-aos="slide-down">
                        <div 
                        style={{ 
                            animationDelay: "0.3s", 
                            }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ 
                            animationDelay: "0.5s", 
                            }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ 
                            animationDelay: "0.7s", 
                            }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{ 
                            animationDelay: "1s", 
                            }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home;