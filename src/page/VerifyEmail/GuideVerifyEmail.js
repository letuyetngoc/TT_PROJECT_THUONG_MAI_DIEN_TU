import React from 'react'
import Button from '../../component/Button'
import { BsCheckCircleFill } from 'react-icons/bs'

import { history } from '../../App'


export default function GuideVerifyEmail() {
    return (
        <div className='guideVerifyEmail'>
            <div className='guideVerifyEmail__container'>
                <form>
                    <BsCheckCircleFill className='icon' />
                    <h3>Verify your email</h3>
                    <p>You're almost there! We sent an email to <span>{localStorage.getItem('email')}</span>.</p>
                    <p>Just click on the link in that email to complete your signup. If you don't see it, you may need to <span>check your spam folder</span>.</p>
                    <div>
                        <Button
                            bgColor='#f57224'
                            bgColorHover='#d0611e'
                            border='none'
                            children={<a href='https://mail.google.com/' target="_blank" >Go to your inbox</a >}
                            type='submit'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
