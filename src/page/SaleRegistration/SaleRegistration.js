import React from 'react'
import { history } from '../../App'
//icon
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa'
import Button from '../../component/Button'
import { GroupItem, Input, InputPassword, Label, TextError } from '../../component/Input'
import { LoadingOutlined } from '@ant-design/icons'

export default function SaleRegistration() {
    return (
        <div className='saleRegistration'>
            <div className='saleRegistration__container'>
                <div className='saleRegistration__title'>
                    <h3>Sale Registration</h3>
                    <p>Already member? <span onClick={() => history.push('/login')}>Login</span> here.</p>
                </div>
                <div className='saleRegistration__form'>
                    <form>
                        <div className='saleRegistration__field'>
                            <GroupItem>
                                <Label>User name:</Label>
                                <Input name='userName' placeholder='Please enter your name' />
                                <TextError></TextError>
                            </GroupItem>
                            <GroupItem>
                                <Label>Email:</Label>
                                <Input name='email' placeholder='Please enter your email' />
                                <TextError></TextError>
                            </GroupItem>
                            <GroupItem>
                                <Label>Password:</Label>
                                <InputPassword name='password' placeholder='Please enter your password' />
                                <TextError></TextError>
                            </GroupItem>
                            <GroupItem>
                                <Label>Confirm password:</Label>
                                <InputPassword name='confirmPassword' placeholder='Please confirm your password' />
                                <TextError></TextError>
                            </GroupItem>
                            <div className='saleRegistration__field-item'>
                                <Button
                                    // disabled={disableBtn}
                                    bgColor='#f57224'
                                    bgColorHover='#ffa354'
                                    children='Sign up'
                                    type='submit'
                                // icon={isLoading && <LoadingOutlined />}
                                // onClick={handleSubmit}
                                />
                            </div>
                        </div>
                        <div className='saleRegistration__btn'>
                            <div className='text'>- Connect with: -</div>
                            <div className='btn_bottom'>
                                <div className='btn_item'>
                                    <Button
                                        className='btn_facebook'
                                        bgColor='#3b5998'
                                        bgColorHover='#3b5998bf'
                                        border='none'
                                        children='Facebook'
                                        icon={<FaFacebookF />}
                                        type='button'
                                    />
                                </div>
                                <div className='btn_item'>
                                    <Button
                                        bgColor='#d34836'
                                        bgColorHover='#d34836cc'
                                        border='none'
                                        children='Google'
                                        icon={<FaGooglePlusG />}
                                        type='button'
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
