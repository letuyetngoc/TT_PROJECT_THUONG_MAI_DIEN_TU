import React, { useEffect } from 'react'
import { useState } from 'react'
import { Rate } from 'antd'
import { history } from '../../../src/App'
import { productService } from '../../service/ProductService'

export default function ProductList() {
    const [productList, setProductList] = useState()

    useEffect(async () => {
        try {
            const result = await productService.getProducts()
            const { data } = result.data || []
            setProductList(data)
        } catch (error) {
            console.log('error', error)
        }
    }, [])
    return (
        <div className='productList'>
            <div className='productList__container'>
                <h3>Product list</h3>
                {productList && <div className='productList__list'>
                    {productList.map(product => {
                        return <CardItemHome key={product.id} product={product} />
                    })}
                </div>}
            </div>
        </div>
    )
}

function CardItemHome({ product }) {
    return (
        <div className='cardItemHome' onClick={() => {
            localStorage.setItem('productDetail', JSON.stringify(product))
            history.push('/product-detail')
        }}>
            <div className='cardItemHome__container'>
                <div className='card_img'>
                    <img src='https://picsum.photos/200' alt='...' />
                </div>
                <div className='card_content'>
                    <div className='content_title'>{product.name}</div>
                    <div className='content_price'>
                        <div className='price'>{product.price}</div>
                        <div className='discount'><span>₫5,000,000</span> -45%</div>
                        <div className='rate'>
                            <div>
                                <Rate
                                    disabled
                                    defaultValue={4}
                                    style={{
                                        fontSize: 12,
                                        margin: 0
                                    }}
                                />
                            </div>
                            <div className='address'>Hồ Chí Minh</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
