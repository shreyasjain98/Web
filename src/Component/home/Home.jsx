import React from 'react'
import './home.css';
import Slider from "react-slick";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1600,
        pauseOnHover: false
    };
    return (
        <>
            <div className="homecon">
                <Slider {...settings}>
                    <div className="homecontainer">
                        <h1>Geared To Grow</h1>
                        <p>Facilitate informed financial decisions through data-driven <br />
                            insights that illuminate the overarching landscape of <br />
                            your organization.
                        </p>
                        <button>Explore more</button>
                    </div>
                    <div className="homecontainer1">
                        <h1>Geared To Grow</h1>
                        <p>Facilitate informed financial decisions through data-driven <br />
                            insights that illuminate the overarching landscape of <br />
                            your organization.
                        </p>
                        <button>Explore more</button>
                    </div>
                </Slider>

            </div>
            {/* <div className="homecontainer">
               
                <Slider {...settings}>
                <div className="homecon">
                    <h1>Geared To Grow</h1>
                    <p>Facilitate informed financial decisions through data-driven <br />
                        insights that illuminate the overarching landscape of <br />
                        your organization.
                    </p>
                    <button>Explore more</button>
                </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div> */}
        </>
    )
}

export default Home