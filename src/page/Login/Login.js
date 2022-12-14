import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FacebookLogin from 'react-facebook-login';

//icon
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa'
import { history } from '../../App'
import Button from '../../component/Button'
import { GroupItem, Input, InputPassword, Label } from '../../component/Input'
import { userService } from '../../service/UserService'
import { errorMessage, successMessage } from '../../component/message'
import { LoadingOutlined } from '@ant-design/icons'


export default function Login() {

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    //action
    const login = (data) => {
        return async () => {
            try {
                setIsLoading(true)
                const result = await userService.login(data)
                setIsLoading(false)
                // console.log('result', result)
                successMessage(result.data.message)

                localStorage.setItem('USER_LOGIN', JSON.stringify(result.data.data))
                localStorage.setItem('ACCESS_TOKEN', result.data.data.token)

                history.push('/home')

            } catch (error) {
                console.log('error', error)
                setIsLoading(false)
                errorMessage('Error', error.response.data.message || error.message)
            }
        }
    }

    const responseFacebook = (response) => {
        console.log('responseFacebook', response);
    }

    // const loginFacebook = async () => {
    //     try {
    //         const result = await userService.loginFacebook()
    //         console.log('resultLoginFacebook', result)
    //     } catch (error) {
    //         console.log('error', error)
    //     }
    // }

    const handleChange = (e) => {
        const { name, value } = e.target
        values[name] = value
        setValues({ ...values })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(values))
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <div className='login__title'>
                    <h3>Welcome to my website! Please login.</h3>
                    <p>New member? <span onClick={() => history.push('/register')}>Register</span> here.</p>
                </div>
                <div className='login__form'>
                    <form>
                        <div className='login__field'>
                            <GroupItem>
                                <Label>Email</Label>
                                <Input onChange={handleChange} name='email' placeholder='Please enter your Email' />
                            </GroupItem>
                            <GroupItem>
                                <Label>Password</Label>
                                <InputPassword onChange={handleChange} name='password' placeholder='Please enter your password' />
                            </GroupItem>
                            <div className='login__field-item end'>
                                <label>
                                    <a>Forgot password</a>
                                </label>
                            </div>
                        </div>
                        <div className='login__btn'>
                            <div className='btn_item'>
                                <Button
                                    bgColor='#f57224'
                                    bgColorHover='#ffa354'
                                    border='none'
                                    children='Login'
                                    type='submit'
                                    icon={isLoading && <LoadingOutlined />}
                                    onClick={handleSubmit}
                                />
                            </div>
                            <div className='btn_item'>
                                <p>Or, login with</p>
                            </div>
                            <div className='btn_item'>
                                <FacebookLogin
                                    appId="779851386692586"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    // onClick={componentClicked}
                                    callback={responseFacebook}
                                    cssClass="myFacebookBtn"
                                    icon={<FaFacebookF className='icon' />}
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
                    </form>
                </div>
            </div>
        </div>
    )
}
