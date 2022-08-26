import { Rate } from 'antd'
import React from 'react'

export default function CardItemHome() {
    return (
        <div className='cardItemHome'>
            <div className='cardItemHome__container'>
                <div className='card_img'>
                    <img src='https://picsum.photos/200' alt='...' />
                </div>
                <div className='card_content'>
                    <div className='content_title'>[ miễn phí ship] Máy tính bảng lpad 4 wifi 4G sài sim 64GB BH 12 tháng</div>
                    <div className='content_price'>
                        <div className='price'>₫2,734,000</div>
                        <div className='discount'><span>₫5,000,000</span> -45%</div>
                        <div className='rate'>
                            <div>
                                <Rate
                                    disabled
                                    defaultValue={4}
                                    style={{
                                        fontSize: 12,
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div className='address'>Hồ Chí Minh</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
