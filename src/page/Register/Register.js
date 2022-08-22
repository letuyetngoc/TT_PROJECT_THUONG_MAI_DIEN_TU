import React from 'react'
import { history } from '../../App'
//icon
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa'

export default function Register() {
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
                            <div className='register__field-item'>
                                <label>Full name</label>
                                <input placeholder='Please enter your fullname' />
                            </div>
                            <div className='register__field-item'>
                                <label>Phone Number</label>
                                <input placeholder='Please enter your Phone Number ' />
                            </div>
                            <div className='register__field-item'>
                                <label>Password</label>
                                <input placeholder='Minimum 6 characters with a number and a letter' />
                            </div>
                            <div className='register__field-item'>
                                <label>Confirm password</label>
                                <input placeholder='Please confirm your password' />
                            </div>
                            <div className='register__field-item'>
                                <button type='submit'>Sign up</button>
                            </div>
                        </div>
                        <div className='register__btn'>
                            <div className='btn_item'>
                                <div className='btn_email'>Sign up with Email</div>
                            </div>
                            <div className='btn_bottom'>
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
