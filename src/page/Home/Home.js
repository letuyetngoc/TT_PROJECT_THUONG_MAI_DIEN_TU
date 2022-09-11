import React, { useEffect } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Slider from "react-slick";
import { Select, Breadcrumb } from 'antd';
import CardItemHome from '../../component/CardItemHome';
const { Option } = Select;


export default function Home() {

    //slick carousel
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='home'>
            <div className='home__container'>
                <div className="home__breadcrumb">
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Smartphone</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Samsung</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className='home__carousel'>
                    <Slider {...settings}>
                        <div className='item'>
                            <img src='' alt='...' />
                        </div>
                        <div className='item'>
                            <img src='' alt='...' />
                        </div>
                        <div className='item'>
                            <img src='' alt='...' />
                        </div>
                    </Slider>
                </div>
                <div className='home__products'>
                    <div className='products_header'>
                        <h2>Điện Thoại Di Động, Smartphone Chính Hãng, Bảo Hành Uy Tín</h2>
                        <div className='header_bottom'>
                            <div className='header_total_item'>
                                <p>8214 items found in Smartphones</p>
                            </div>
                            <div className='header_sort_item'>
                                <span> Sort By:</span>
                                <Select
                                    defaultValue="Select"
                                    style={{
                                        width: 120,
                                    }}
                                // onChange={handleChange}
                                >
                                    <Option value="jack">Samsung</Option>
                                    <Option value="lucy">Iphone</Option>
                                    <Option value="Yiminghe">Oppo</Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className='products_list'>
                        <div className='card_product'>
                            <CardItemHome />
                        </div>
                        <div className='card_product'>
                            <CardItemHome />
                        </div>
                        <div className='card_product'>
                            <CardItemHome />
                        </div>
                        <div className='card_product'>
                            <CardItemHome />
                        </div>
                        <div className='card_product'>
                            <CardItemHome />
                        </div>
                        <div className='card_product'>
                            <CardItemHome />
                        </div>
                        <div className='card_product'>
                            <CardItemHome />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
