import React from 'react';

import { BsApple, BsHouseDoor } from 'react-icons/bs'
import { AiOutlineSearch, AiOutlineMessage, AiOutlineSetting, AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineHelpOutline } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
import { useState } from 'react';

const MyComponent = () => {

    const [activeToggleBtn, setActiveToggleBtn] = useState(false)
    const classActive = activeToggleBtn ? 'active' : ''

    return (
        <div className='myComponent'>
            <div className='myComponent__container'>
                <div className={`myComponent__navigation ${classActive}`}>
                    <ul>
                        <li>
                            <a>
                                <span className='icon'>
                                    <BsApple />
                                </span>
                                <span className='title'>Brand name</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className='icon'>
                                    <BsHouseDoor />
                                </span>
                                <span className='title'>DashBoard</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className='icon'>
                                    <FiUsers />
                                </span>
                                <span className='title'>Customer</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className='icon'>
                                    <AiOutlineMessage />
                                </span>
                                <span className='title'>Message</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className='icon'>
                                    <MdOutlineHelpOutline />
                                </span>
                                <span className='title'>Help</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className='icon'>
                                    <AiOutlineSetting />
                                </span>
                                <span className='title'>Setting</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={`myComponent__header ${classActive}`}>
                    <div className='toggle_btn' onClick={() => setActiveToggleBtn(activeToggleBtn ? false : true)}>
                        <AiOutlineMenu />
                    </div>
                    <div className='search'>
                        <AiOutlineSearch className='icon_search' />
                        <input placeholder='Search here' />
                    </div>
                    <div className='avatar'>
                        <FaUserCircle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
