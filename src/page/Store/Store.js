import React from 'react'
import { AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

export default function Store() {
    return (
        <div className='store'>
            <div className='store__container'>
                <div className='store__list'>
                    <div className='list_header_main'>
                        <div className='list_header_checkbox'>
                            <input type='checkbox' />
                            <label>Select all (6 Item(s))</label>
                        </div>
                        <div className='list_header_delete'>
                            <AiOutlineDelete className='icon' />
                            <span>Delete</span>
                        </div>
                    </div>
                    <div className='list_item'>
                        <div className='checkout_shop'>
                            <div className='checkbox'>
                                <input type='checkbox' />
                                <label>Hoàng Nhân Computer</label>
                            </div>
                            <div className='action'>
                                <div>Get Voucher</div>
                            </div>
                        </div>
                        <div className='checkout_shop_progress'>
                            <div className='checkout_shop_progress_value'></div>
                        </div>
                        <div className='checkout_shop_delivery'>
                            <div>Spend ₫ 299,000 enjoy shipping fee ₫ 5,000 off for Standard delivery option</div>
                        </div>
                        <div className='checkout_shop_children'>
                            <div className='cart_item'>
                                <div className='cart_item_left'>
                                    <div className='checkbox'>
                                        <input type='checkbox' />
                                    </div>
                                    <div className='img'>
                                        <img src='https://picsum.photos/200' />
                                    </div>
                                    <div className='content'>
                                        <a className='content1'>[HCM]Micro có dây jack 6.5 ly dành cho loa bluetooth có kèm chức năng hát karaoke P88P89</a>
                                        <br />
                                        <a className='content2'>No Brand, Color Family: Black</a>
                                        <br />
                                        <div className='good_desc'>Over ₫ 59,000 to get free gift</div>
                                    </div>
                                </div>
                                <div className='cart_item_middle'>
                                    <div className='current_price'>₫ 31,360</div>
                                    <div className='action'>
                                        <AiOutlineDelete className='icon_delete' />
                                        <AiOutlineHeart className='icon_heart' />
                                    </div>
                                </div>
                                <div className='cart_item_right'>
                                    <button className='btn_sub'>-</button>
                                    <span>1</span>
                                    <button className='btn_add'>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='store__checkout'>
                    <div className='summary_session'>
                        <div className='summary_session_content'>
                            <div className='location__label'>Location</div>
                            <div className='location__body'>
                                <GoLocation />
                                <span>	Add Shipping Address</span>
                            </div>
                        </div>
                    </div>
                    <div className='summary_session'></div>
                </div>
            </div>
        </div>
    )
}
