import React from 'react'
//icon
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdArrowForwardIos, MdArrowDropDown } from 'react-icons/md'
import { FiUser } from 'react-icons/fi'
import { history } from '../App'
import { Avatar, Badge, Popover } from 'antd'


export default function Header() {

    const userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))

    const renderAccount = () => {
        const content = (
            <div className='account_hover'>
                <p>Track my order</p>
                <p>My account</p>
                <p onClick={() => {
                    localStorage.removeItem('USER_LOGIN')
                    localStorage.removeItem('ACCESS_TOKEN')
                    history.push('/login')
                }}>Log out</p>
            </div>
        );

        if (userLogin) {
            return <>
                <Popover placement="bottom" content={content} trigger="hover">
                    <div className='account'>
                        <div>Account</div>
                        <div>
                            <span>{userLogin.userName}</span>
                            <MdArrowDropDown className='icon' />
                        </div>
                    </div>
                </Popover>
            </>
        } else {
            return <div className='account' onClick={() => history.push('/login')}>
                <div>Login / Signup</div>
                <div>
                    <span>Account</span>
                    <MdArrowDropDown className='icon' />
                </div>
            </div>
        }
    }

    return (
        <div className='header'>
            <div className='header__container'>
                {/* <div className='header__top'>
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
                </div> */}
                <div className='header__between'>
                    <div className='header__brand'>Brand</div>
                    <div className='header__search'>
                        <input placeholder='Search in website' />
                        <div>
                            <BsSearch className='icon' />
                        </div>
                    </div>
                    <div className='header__account' >
                        <FiUser className='icon' />
                        {renderAccount()}
                    </div>
                    <div className='header__store' onClick={() => history.push('/store')}>
                        <Badge count={5}>
                            <Avatar style={{ backgroundColor: 'transparent' }} icon={<AiOutlineShoppingCart className='icon' />} />
                        </Badge>

                    </div>
                </div>
                <div className='header__bottom'>
                    <div className='header__categories'>
                        <span>Categories</span>
                        <MdArrowForwardIos />
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
