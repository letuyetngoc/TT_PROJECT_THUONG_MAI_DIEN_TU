import React from 'react'
//icon
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa'
import { history } from '../../App'

export default function Login() {
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
                            <div className='login__field-item'>
                                <label>Phone number or email</label>
                                <input placeholder='Please enter your Phone Number or Email' />
                            </div>
                            <div className='login__field-item'>
                                <label>Password</label>
                                <input placeholder='Please enter your password' />
                            </div>
                            <div className='login__field-item end'>
                                <label>
                                    <a>Forgot password</a>
                                </label>
                            </div>
                        </div>
                        <div className='login__btn'>
                            <div className='btn_item'>
                                <button type='submit'>
                                    <div className='btn__login'>Login</div>
                                </button>
                            </div>
                            <div className='btn_item'>
                                <p>Or, login with</p>
                            </div>
                            <div className='btn_item'>
                                <div className='btn_facebook'>
                                    <FaFacebookF className='icon' />
                                    <span>Facebook</span>
                                </div>
                            </div>
                            <div className='btn_item'>
                                <div className='btn_google'>
                                    <FaGooglePlusG className='icon' />
                                    <span>Google</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
