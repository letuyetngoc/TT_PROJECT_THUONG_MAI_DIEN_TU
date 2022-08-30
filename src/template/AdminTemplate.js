import React from 'react'
import { MdProductionQuantityLimits } from 'react-icons/md';
import { RiBillFill } from 'react-icons/ri'
import { AiFillDatabase } from 'react-icons/ai'
import { AiFillApple, AiOutlineSearch } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { MenuFoldOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import { NavLink, Route } from 'react-router-dom';
import { history } from '../App';

export default function AdminTemmplate(props) {
    const { Component, ...restProps } = props

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            Infomation
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            Settings
                        </a>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            Log out
                        </a>
                    ),
                },
            ]}
        />
    )

    return (
        <Route {...restProps} render={(propsRout) => {
            return <div className='adminTemplate'>
                <div className='adminTemplate__container'>
                    <div className='adminTemplate__header'>
                        <MenuFoldOutlined className='toggle_btn' onClick={() => {
                            document.querySelector('.adminTemplate__nav_left').classList.toggle('active')
                            document.querySelector('.adminTemplate__header').classList.toggle('active')
                            document.querySelector('.adminTemplate__main_content').classList.toggle('active')
                        }} />
                        <div className='search'>
                            <AiOutlineSearch className='icon' />
                            <input placeholder='Search here' />
                        </div>
                        <div className='avatar'>
                            <Dropdown overlay={menu} placement="bottomRight">
                                <FaUserCircle className='icon' />
                            </Dropdown>
                        </div>
                    </div>
                    <div className='adminTemplate__nav_left'>
                        <ul className='nav_left'>
                            <li className='nav_left_item logo'>
                                <div className='mainIcon'>
                                    <AiFillApple className='icon' />
                                </div>
                                <div className='title'>
                                    <span>Brand</span>
                                </div>
                            </li>
                            <NavLink className='nav_left_item' activeClassName='nav_left_item_active' to='/admin/create-product'>
                                <div className='mainIcon'>
                                    <MdProductionQuantityLimits className='icon' />
                                </div>
                                <div className='title'>
                                    <span>Create product</span>
                                </div>
                            </NavLink>
                            <li className='nav_left_item'>
                                <div className='mainIcon'>
                                    <RiBillFill className='icon' />
                                </div>
                                <div className='title'>
                                    <span>Đơn hàng</span>
                                </div>
                            </li>
                            <li className='nav_left_item'>
                                <div className='mainIcon'>
                                    <AiFillDatabase className='icon' />
                                </div>
                                <div className='title'>
                                    <span>Phân tích dữ liệu</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* <div className='adminTemplate__nav_right'>
                        <ul className='nav_right'>
                            <li className='nav_right_item'>
                                <div className='mainIcon'>
                                    <AiFillMessage />
                                </div>
                            </li>
                            <li className='nav_right_item'>
                                <div className='mainIcon'>
                                    <AiFillMessage />
                                </div>
                            </li>
                            <li className='nav_right_item'>
                                <div className='mainIcon'>
                                    <IoNotifications />
                                </div>
                            </li>
                        </ul>
                    </div> */}
                    <div className='adminTemplate__main'>
                        <div className='adminTemplate__main_content'>
                            {Component && <Component {...propsRout} />}
                        </div>
                    </div>
                </div>
            </div >
        }} />
    )
}