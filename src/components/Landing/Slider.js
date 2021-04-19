import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tanner from '../../images/Narf/tanner.jpeg'
import gym from '../../images/Narf/gym.jpeg'
import pool from '../../images/Narf/pool.jpeg'
import buildingImg from '../../images/building.jpg'
import newBuilding from '../../images/BuildingWithSaying.jpg'
import gymPic from '../../images/Narf/gymabove.jpeg'
import React, {Component} from 'react'
import Slider from 'react-slick'
import './Slider.scss'

const photos = [
    {
        name: `front of building`,
        url: newBuilding
    },
    {
        name: `gym picture`,
        url: gymPic
    },
    {
        name: `tanner`,
        url: tanner
    },
    {
        name: `gym`,
        url: gym
    },
    {
        name: `pool`,
        url: pool
    }
]

class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: 'slides',
            autoplay: true,
            autoplaySpeed: 4000,
            adaptiveHeight: true,
            pauseOnHover: true

        }
        return (
            <main className="slider-container">
            <section className="slider">
                <Slider {...settings}>
                    {photos.map((photo, i) => {
                        return (
                            <div key={i} className="slide" >
                                <img width="100%" src={photo.url} alt={photo.name}/>
                            </div>
                        )
                    })}
                </Slider>
            </section>
            </main>
        )
    }
}

export default Carousel
