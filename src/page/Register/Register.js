import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { history } from '../../App'
//icon
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa'
import Button from '../../component/Button'
import { GroupItem, Input, InputPassword, Label, TextError } from '../../component/Input'
import { userService } from '../../service/UserService'
import { errorMessage, successBigMessage } from '../../component/message'
import { LoadingOutlined } from '@ant-design/icons'

export default function Register() {

    const dispatch = useDispatch()

    const [values, setValues] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)


    //action

    const signup = (data) => {
        return async () => {
            try {
                setIsLoading(true)
                setDisableBtn(true)
                const result = await userService.signup(data)
                // console.log('result', result)
                setIsLoading(false)
                setDisableBtn(false)
                successBigMessage('Success', result.data.message)
                history.push('/verify-account')

            } catch (error) {
                console.log('error', error)
                setIsLoading(false)
                setDisableBtn(false)
                errorMessage('Error', error.response.data.message)
            }
        }
    }

    const handleChange = (e) => {

        const { name, value } = e.target
        values[name] = value
        setValues({ ...values })

        let errorMessage = ''
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (value === '') {
            errorMessage = "You can't leave this empty!"
        }
        if (name === 'email') {
            if (!emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email!'
            }
        }
        if (name === 'confirmPassword') {
            if (value !== values.password) {
                errorMessage = 'Password does not match!'
            }
        }
        errors[name] = errorMessage
        setErrors({ ...errors })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('value', values)
        if (errors.confirmPassword !== errors.password) {
            errorMessage('Error', 'Please check the password!')
        } else {
            dispatch(signup(values))
            localStorage.setItem('email', values.email)
        }
    }

    return (
        <div className='register'>
            <div className='register__container'>
                <div className='register__title'>
                    <h3>Create your Account</h3>
                    <p>Already member? <span onClick={() => history.push('/login')}>Login</span> here.</p>
                </div>
                <div className='register__form'>
                    <form>
                        <div className='register__field'>
                            <GroupItem>
                                <Label>User name:</Label>
                                <Input onChange={handleChange} name='userName' placeholder='Please enter your name' />
                                <TextError>{errors.userName}</TextError>
                            </GroupItem>
                            <GroupItem>
                                <Label>Email:</Label>
                                <Input onChange={handleChange} name='email' placeholder='Please enter your email' />
                                <TextError>{errors.email}</TextError>
                            </GroupItem>
                            <GroupItem>
                                <Label>Password:</Label>
                                <InputPassword onChange={handleChange} name='password' placeholder='Please enter your password' />
                                <TextError>{errors.password}</TextError>
                            </GroupItem>
                            <GroupItem>
                                <Label>Confirm password:</Label>
                                <InputPassword onChange={handleChange} name='confirmPassword' placeholder='Please confirm your password' />
                                <TextError>{errors.confirmPassword}</TextError>
                            </GroupItem>
                            <div className='register__field-item'>
                                <Button
                                    disabled={disableBtn}
                                    bgColor='#f57224'
                                    bgColorHover='#ffa354'
                                    children='Sign up'
                                    type='submit'
                                    icon={isLoading && <LoadingOutlined />}
                                    onClick={handleSubmit}
                                />
                            </div>
                        </div>
                        <div className='register__btn'>
                            <div className='btn_item'>
                                <Button
                                    bgColor='transparent'
                                    bgColorHover='#feeade'
                                    color='#f57224'
                                    border='1px solid #f57224'
                                    children='Sign up with Email'
                                    type='button'
                                />
                            </div>
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
