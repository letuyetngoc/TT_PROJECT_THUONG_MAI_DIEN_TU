import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../component/Button'
import { BsCheckCircleFill } from 'react-icons/bs'
import { userService } from '../../service/UserService'
import { errorMessage, successMessage } from '../../component/message'
import { history } from '../../App'

export default function VerifiEmail(props) {
    const dispatch = useDispatch()

    //action
    const verifyEmail = async () => {
        try {
            const result = await userService.verifyEmail()
            console.log('result', result)
            successMessage(result.data.message)
            localStorage.removeItem('ACCESS_TOKEN')
            localStorage.removeItem('email')

            localStorage.setItem('USER_LOGIN', JSON.stringify(result.data.data))
            localStorage.setItem('ACCESS_TOKEN', JSON.stringify(result.data.data.token))
            history.push('/store')

        } catch (error) {
            console.log('error', error)
            errorMessage('Error', error.response.data.message || error.response.data)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('ACCESS_TOKEN', props.match.params.token)
        dispatch(verifyEmail)
    }

    return (
        <div className='verifiEmail'>
            <div className='verifiEmail__container'>
                <form>
                    <BsCheckCircleFill className='icon' />
                    <h3>Verification success</h3>
                    <p>Thank you for your support, we have successfully verified your email. You can now proceed to your homepage.</p>
                    <p>If you have any questions, just reply to this email. We're always happy to help out.</p>
                    <div>
                        <Button
                            bgColor='#f57224'
                            bgColorHover='#d0611e'
                            border='none'
                            children='Continue'
                            type='submit'
                            onClick={handleSubmit}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
