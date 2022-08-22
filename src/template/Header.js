import React from 'react'
//icon
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdArrowForwardIos } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { history } from '../App'


export default function Header() {

    return (
        <div className='header'>
            <div className='header__container'>
                <div className='header__top'>
                    <ul>
                        <li>
                            <a>Save more on app</a>
                        </li>
                        <li>
                            <a>Save on Lazada</a>
                        </li>
                        <li>
                            <a>Customer care</a>
                        </li>
                        <li>
                            <a>Track my order</a>
                        </li>
                        <li>
                            <NavLink className='link' to='/login'>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register'>Sign up</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='header__between'>
                    <div className='header__brand'>Brand</div>
                    <div className='header__search'>
                        <input placeholder='Search in website' />
                        <div>
                            <BsSearch className='icon' />
                        </div>
                    </div>
                    <div className='header__store' onClick={() => history.push('/store')}>
                        <AiOutlineShoppingCart className='icon' />
                    </div>
                </div>
                <div className='header__bottom'>
                    <div className='header__categories'>
                        <span>Categories</span>
                        <MdArrowForwardIos className='icon' />
                    </div>
                    <ul>
                        <li>
                            <a>LazMall</a>
                        </li>
                        <li>
                            <a>Vouchers</a>
                        </li>
                        <li>
                            <a>Top up & ecoupon</a>
                        </li>
                        <li>
                            <a>Lazgobal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
