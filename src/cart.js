import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = ({ cart, setCart }) => {
    const formatCurrency = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };
    //incqty
    const incqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm
        }))
    }

    //decqty
    const decqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm
        }))
    }
    //remove product
    const removeproduct = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })

        if (exist.qty > 0) {
            setCart(cart.filter((x) => {
                return x.id !== product.id
            }))
        }
    }
    //Total price
    // const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0);


    return (
        <>
            <div className='cartcontainer'>

                {cart.length === 0 &&

                    <div className='emptycart'>
                        <h2 className='empty'>Giỏ hàng rỗng</h2>
                        <Link to='/product' className='emptycartbtn'>Mua ngay</Link>
                    </div>

                }

                <div className='contant'>
                    {

                        cart.map((curElm) => {
                            return (

                                <div className='cart_item' key={curElm.id}>

                                    <div className='img-box'>
                                        <img src={curElm.Img} alt={curElm.Title}></img>
                                    </div>

                                    <div className='detail'>

                                        <div className='info'>
                                            <h4>{curElm.Cat}</h4>
                                            <h3>{curElm.Title}</h3>
                                          
                                            <p>Giá: {formatCurrency(curElm.Price)}</p>

                                            <div className='qty'>
                                                <button className='incqty' onClick={() => incqty(curElm)}>+</button>
                                                <input type='text' value={curElm.qty}></input>
                                                <button className='decqty' onClick={() => decqty(curElm)}>-</button>
                                            </div>
                                            {/* <h4 className='subtotal'>Tổng: {curElm.Price * curElm.qty}</h4> */}
                                            <h4 className='subtotal'>Tổng: {formatCurrency(curElm.Price * curElm.qty)}</h4>

                                        </div>


                                        <div className='close'>
                                            <button onClick={() => removeproduct(curElm)}><AiOutlineClose /></button>
                                        </div>

                                    </div>

                                </div>
                            )
                        })

                    }


                </div>
                {
                    cart.length > 0 &&
                    <>
                        {/* <h2 className='totalprice'>{Totalprice}</h2> */}
                        <h2 className='totalprice'>{formatCurrency(Totalprice)}</h2>

                        <button className='checkout'>Thanh toán</button>
                    </>
                }
            </div>

        </>
    )
}

export default Cart