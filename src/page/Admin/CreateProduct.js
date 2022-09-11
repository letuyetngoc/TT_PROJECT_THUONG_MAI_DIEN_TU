import React, { useState } from 'react'
import Button from '../../component/Button'
import { GroupItem, Input, Label } from '../../component/Input'
import { successMessage } from '../../component/message'
import { productService } from '../../service/ProductService'

export default function CreateProduct() {

    const [values, setValues] = useState({
        name: '',
        price: '',
        photo: ''
    })

    const handleChange = (e) => {
        const { name, value, files } = e.target

        if (name == 'photo') {
            values['photo'] = files[0]
        } else {
            values[name] = value
        }

        setValues({ ...values })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('values', values)
        try {
            const result = await productService.createProduct(values) ?? {}
            console.log('result', result)
            successMessage(result?.data?.message)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div className='createProduct'>
            <div className='createProduct__container'>
                <form>
                    <GroupItem>
                        <Label>Name:</Label>
                        <Input name='name' placeholder='Please enter product name' onChange={handleChange} />
                    </GroupItem>
                    <GroupItem>
                        <Label>Price:</Label>
                        <Input name='price' placeholder='Please enter product price' onChange={handleChange} />
                    </GroupItem>
                    <GroupItem>
                        <Label>Photo:</Label>
                        <br />
                        <input name='photo' type='file' placeholder='Please choose the photo' onChange={handleChange} />
                    </GroupItem>
                    <Button
                        bgColor='#f57224'
                        bgColorHover='#ffa354'
                        border='none'
                        type='submit'
                        onClick={handleSubmit}
                    >Create</Button>
                </form>
            </div>
        </div>
    )
}
