import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import knee from '../../images/Narf/knee-pain.jpg'
import hip from '../../images/Narf/hip-pain.jpg'
import neck from '../../images/Narf/neck-pain.jpeg'
import shoulder from '../../images/Narf/shoulder-pain.png'
import back from '../../images/Narf/sciatica-and-back-pain.jpeg'
import buildingImg from '../../images/building.jpg'


import React, {Component} from 'react'
import Slider from 'react-slick'
import './Slider.scss'

const photos = [
    {
        name: `hip`,
        url: buildingImg
    },
    {
        name: `knee`,
        url: knee
    },
    {
        name: `neck`,
        url: neck
    },
    {
        name: `shoulder`,
        url: shoulder
    },
    {
        name: `back`,
        url: back
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
            // autoplay: true,
            autoplaySpeed: 2500

        }
        return (
            <main className="slider-container">
            <section className="slider">
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                            <div className="slide" >
                                <img width="100%" src={photo.url} alt="big car"/>
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
