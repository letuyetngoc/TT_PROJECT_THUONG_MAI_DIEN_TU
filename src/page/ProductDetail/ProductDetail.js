import React from 'react'
import { Rate } from 'antd'
import { BsShare, BsHeart } from 'react-icons/bs'
import { AiOutlineInfoCircle, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import Button from '../../component/Button'
import { history } from '../../App'
import { productService } from '../../service/ProductService'
import { errorMessage, successMessage } from '../../component/message'
import { useDispatch } from 'react-redux'
import { cartService } from '../../service/CartService'
import { getCartAction } from '../../redux/actions/cartAction'

export default function ProductDetail() {
    const { sessionId } = JSON.parse(localStorage.getItem('USER_LOGIN'))

    const dispatch = useDispatch()

    const [valueAddToCard, setValuesAddToCard] = useState({
        sku: "",
        quantity: 1,
        sessionId: sessionId
    })

    const [valueNumber, setValueNumber] = useState(1)
    const disableMinusBtn = valueNumber == 1 ? 'disabled' : ''

    const addtocartAction = (data) => {
        return async () => {
            try {
                const result = await cartService.addtocart(data)
                const { message } = result.data || ''
                successMessage(message)

            } catch (errors) {
                console.log('error', errors)
                errorMessage('Error', errors.response?.data?.errors)
            }
        }

    }

    const handleAddToCard = async () => {
        const productDetail = JSON.parse(localStorage.getItem('productDetail'))

        valueAddToCard.sku = productDetail.sku
        valueAddToCard.quantity = valueNumber
        setValuesAddToCard({ ...valueAddToCard })

        dispatch(addtocartAction(valueAddToCard))
        dispatch(getCartAction(sessionId))

        // history.push('/store')
    }

    return (
        <div className='productDetail'>
            <div className='productDetail__container'>
                <div className='product_img'>
                    <img src='https://picsum.photos/200' alt='...' />
                </div>
                <div className='product_info'>
                    <h3>[E-Voucher] S??? h???u lPhone13 ProMax 512gb | Qu?? t???ng tri ??n kh??ch h??ng | ??i???n tho???i full box b???o h??nh fpt</h3>
                    <div className='product_rating'>
                        <div className='rating'>
                            <Rate
                                disabled
                                defaultValue={4}
                                style={{
                                    fontSize: 14,
                                    margin: 0
                                }}
                            />
                            <span className='total_rating'>298 ratings</span>
                        </div>
                        <div className='share'>
                            <BsShare className='icon_share' />
                            <BsHeart className='icon_heart' />
                        </div>
                    </div>
                    <div className='product_brand'>
                        Brand: <span>No Brand</span> | <span>More Women Jewellery from No Brand</span>
                    </div>
                    <div className='product_price'>
                        <span className='price'>???36,153</span>
                        <div className='origin-block'>
                            <span className='original_price'>???75,000</span>
                            <span className='discount'>-52%</span>
                        </div>
                    </div>
                    <div className='product_quantity'>
                        <span className='title'>Quantity:</span>
                        <div className='content'>
                            <button onClick={() => setValueNumber(() => {
                                if (valueNumber > 1) {
                                    setValueNumber(valueNumber - 1)
                                } else {
                                    setValueNumber(1)
                                }

                            })} disabled={disableMinusBtn}><AiOutlineMinus /></button>

                            <span className='value_number'>{valueNumber}</span>

                            <button onClick={() => setValueNumber(valueNumber + 1)}><AiOutlinePlus /></button>
                        </div>
                    </div>
                    <div className='product_btn'>
                        <Button
                            bgColor='#ffb916'
                            bgColorHover='#e59b11'
                            border='none'
                            children='Login'
                            type='submit'
                        >Buy now</Button>
                        <Button
                            bgColor='#f57224'
                            bgColorHover='#d0611e'
                            border='none'
                            children='Login'
                            type='submit'
                            onClick={handleAddToCard}
                        >Add to cart</Button>
                    </div>
                </div>
                <div className='product_delivery'>
                    <div className='delivery_item'>
                        <div className='title'>
                            <p>Delivery option</p>
                            <AiOutlineInfoCircle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
