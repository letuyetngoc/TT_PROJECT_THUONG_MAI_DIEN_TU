import React from 'react'
//icon
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdArrowForwardIos, MdArrowDropDown } from 'react-icons/md'
import { FiUser } from 'react-icons/fi'
import { DownOutlined } from '@ant-design/icons';
import { history } from '../App'
import { Avatar, Badge, Popover, Dropdown, Menu, Space } from 'antd'
import { NavLink } from 'react-router-dom'


export default function Header() {

    const userLogin = JSON.parse(localStorage.getItem('USER_LOGIN'))

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: 'Smart phone',
                    children: [
                        {
                            key: '1-1',
                            label: 'Samsung',
                        },
                        {
                            key: '1-2',
                            label: 'Iphone',
                        },
                    ],
                },
                {
                    key: '2',
                    label: 'Laptop',
                    children: [
                        {
                            key: '2-1',
                            label: 'Laptop 1',
                        },
                        {
                            key: '2-2',
                            label: 'Laptop 2',
                        },
                    ],
                },
                {
                    key: '3',
                    label: 'screen',
                    children: [
                        {
                            key: '2-1',
                            label: 'screen 1',
                            children: [
                                {
                                    key: '2-1',
                                    label: 'screen 1-1',
                                },
                                {
                                    key: '2-2',
                                    label: 'screen 1-2',
                                },
                            ],
                        },
                        {
                            key: '2-2',
                            label: 'sreen 2',
                        },
                    ],
                },
            ]}
        />
    );

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
                    <div className='header__brand' onClick={() => history.push('/home')}>Brand</div>
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
                        <Dropdown overlay={menu}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <span>Categories</span>
                                    <MdArrowForwardIos className='icon' />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    <ul>
                        <li>
                            <NavLink to='/all-products' className='nav_item' activeClassName='nav_item_active'>All products</NavLink>
                        </li>
                        <li>
                            <NavLink to='/saleRegistration' className='nav_item' activeClassName='nav_item_active'>Register seller</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
