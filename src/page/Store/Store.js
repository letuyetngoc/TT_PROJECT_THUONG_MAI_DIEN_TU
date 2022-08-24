import React from 'react'
import { AiOutlineDelete, AiOutlineHeart } from 'react-icons/ai'
import { BsFillCartPlusFill } from 'react-icons/bs'
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
                                <GoLocation className='icon' />
                                <span>	Add Shipping Address</span>
                            </div>
                        </div>
                    </div>
                    <div className='summary_session'>
                        <div className='summary_session_main'>
                            <div className='session__heading'>Order Summary</div>
                            <div className='session__content'>
                                <div className='checkout_summary_rows'>
                                    <div className='checkout_summary_row'>
                                        <div className='checkout_summary_label'>Subtotal (0 items)</div>
                                        <div className='checkout_summary_value'>đ 0</div>
                                    </div>
                                    <div className='checkout_summary_row'>
                                        <div className='checkout_summary_label'>Shipping Fee</div>
                                        <div className='checkout_summary_value'>đ 0</div>
                                    </div>
                                </div>
                                <div className='voucher_input'>
                                    <input placeholder='Enter voucher code' />
                                    <button>Apply</button>
                                </div>
                                <div className='checkout_order_total'>
                                    <div className='checkout_order_total_row'>
                                        <div className='checkout_order_total_title'>Total</div>
                                        <div className='checkout_order_total_fee'>
                                            đ 0
                                            <small>VAT included, where applicable</small>
                                        </div>
                                    </div>
                                </div>
                                <div className='btn_confirm'>
                                    <button>Confirm card (0)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='store__recomment'>
                <div className='recomment_content'>
                    <div className='recomment_title'>Just for you</div>
                    <div className='recomment_products_list'>
                        <div className='recomment_product_item'>
                            <div className='product_img'>
                                <img src='https://picsum.photos/200' alt='...' />
                            </div>
                            <div className='product_info'>
                                <div className='product_title'>Kem Chống Nắng Anessa 60ml Perfect UV skincare nhật bản 50ml</div>
                                <div className='product_price'>₫101,000</div>
                                <div className='product_original_price'>
                                    <span className='original_price'>đ 155,000</span>
                                    <span className='discount'>- 35%</span>
                                </div>
                            </div>
                            <div className='recomment_product_item_add_cart'>
                                <BsFillCartPlusFill className='icon' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
