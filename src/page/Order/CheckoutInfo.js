import React from 'react'
import { useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { GroupItem, Input, Label } from '../../component/Input'
import { createOrder } from '../../redux/actions/orderAction'

export default function CheckoutInfo() {
    const dispatch = useDispatch()

    const [values, setValues] = useState({
        total_price: 1029,
        shipping_fee: 2.99,
        payment_status: 'pending',
        fulfillment_status: 'pending',
        shipping_address: {
            first_name: 'Tri',
            last_name: 'Nguyen',
            address_1: 'Nguyen Kim',
            address_2: 'phuong 5, quan 10',
            city: 'Ho Chi Minh',
            country: 'Viet Nam',
            email: 'tridnguyen97@gmail.com',
            phone: '0862727917'
        },
        billing: {
            first_name: 'Tri',
            last_name: 'Nguyen',
            address_1: 'Nguyen Kim',
            address_2: 'phuong 5, quan 10',
            city: 'Ho Chi Minh',
            country: 'Viet Nam'
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        values.billing[name] = value
        values.shipping_address[name] = value
        values.total_price = value
        values.shipping_fee = value
        setValues({ ...values })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('values', values)
        dispatch(createOrder(values))
    }

    return (
        <div className='checkoutInfo'>
            <div className='checkoutInfo__container'>
                <div className='checkoutInfo__delivery'>
                    <h3>Delivery Information</h3>
                    <div className='delivery__content'>
                        <form>
                            <div className='delivery_left'>
                                <GroupItem>
                                    <Label>First name</Label>
                                    <Input placeholder='Enter your first name' name='first_name' onChange={handleChange} />
                                </GroupItem>
                                <GroupItem>
                                    <Label>Last name</Label>
                                    <Input placeholder='Enter your last name' name='last_name' onChange={handleChange} />
                                </GroupItem>
                                <GroupItem>
                                    <Label>Email</Label>
                                    <Input placeholder='Enter your email' name='email' onChange={handleChange} />
                                </GroupItem>
                                <GroupItem>
                                    <Label>Phone</Label>
                                    <Input placeholder='Enter your phone' name='phone' onChange={handleChange} />
                                </GroupItem>
                            </div>
                            <div className='delivery_right'>
                                <GroupItem>
                                    <Label>Address 1</Label>
                                    <Input placeholder='Enter street' name='address_1' onChange={handleChange} />
                                </GroupItem>
                                <GroupItem>
                                    <Label>Address 2</Label>
                                    <Input placeholder='Enter ward, district' name='address_2' onChange={handleChange} />
                                </GroupItem>
                                <GroupItem>
                                    <Label>City</Label>
                                    <Input placeholder='Enter city' name='city' onChange={handleChange} />
                                </GroupItem>
                                <GroupItem>
                                    <Label>Country</Label>
                                    <Input placeholder='Enter country' name='country' onChange={handleChange} />
                                </GroupItem>
                            </div>
                        </form>
                    </div>

                </div>
                <div className='checkoutInfo__payment'>
                    <div className='payment__checkout'>
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
                                        <button type='submit' onClick={handleSubmit}>Confirm card (0)</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
