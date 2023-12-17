import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = ({ cart, setCart }) => {
    // Hàm định dạng giá thành tiền Việt Nam
    const formatCurrency = (price) => {
        // Sử dụng Intl.NumberFormat để định dạng giá tiền theo định dạng tiền tệ Việt Nam
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    // Mô tả: Đây là một hàm nhận vào một số (price) và trả về chuỗi biểu diễn giá tiền được định dạng theo định dạng tiền tệ Việt Nam.

    // Hàm tăng số lượng sản phẩm trong giỏ hàng
    const incqty = (product) => {
        // Tìm sản phẩm trong giỏ hàng dựa trên id
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        // Sử dụng setCart để cập nhật giỏ hàng, tăng số lượng sản phẩm lên 1
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm
        }))
    };

    // Mô tả: Hàm này tăng số lượng của một sản phẩm trong giỏ hàng lên 1. 
    // Nếu sản phẩm không tồn tại trong giỏ hàng, thì không có gì thay đổi.

    // Hàm giảm số lượng sản phẩm trong giỏ hàng
    const decqty = (product) => {
        // Tìm sản phẩm trong giỏ hàng dựa trên id
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        // Sử dụng setCart để cập nhật giỏ hàng, giảm số lượng sản phẩm đi 1
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm
        }))
    };

    // Mô tả: Hàm này giảm số lượng của một sản phẩm trong giỏ hàng đi 1. Nếu số lượng là 1, thì không có gì thay đổi.

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const removeproduct = (product) => {
        // Tìm sản phẩm trong giỏ hàng dựa trên id
        const exist = cart.find((x) => {
            return x.id === product.id
        })

        // Nếu số lượng của sản phẩm lớn hơn 0, thì xóa sản phẩm khỏi giỏ hàng
        if (exist.qty > 0) {
            setCart(cart.filter((x) => {
                return x.id !== product.id
            }))
        }
    };

    // Mô tả: Hàm này xóa một sản phẩm khỏi giỏ hàng. Nếu số lượng của sản phẩm trong 
    // giỏ hàng lớn hơn 0, thì sản phẩm sẽ được loại bỏ khỏi giỏ hàng.


    // Tính tổng giá tiền của toàn bộ giỏ hàng
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