
import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/Context/StoreContex'



const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)


  return (

      <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
      <div className='multi-fields'>
        <input type='text' placeholder='First name'/>
        <input type='text' placeholder='Last name'/>
        <input type='email' placeholder='Email address'/>
        <input type='text' placeholder='Street'/>
      </div>
      <div className='multi-fields'>
        <input type='text' placeholder='City'/>
        <input type='text' placeholder='State'/>
      </div>
      <div className='multi-fields'>
        <input type='text' placeholder='Zip Code'/>
        <input type='text' placeholder='Country'/>
        <input type='text' placeholder='Phone' />
      </div>
    </div>
    <div className='place-order-right'>
    <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₦{ getTotalCartAmount}</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₦{1000}</p>
              </div>
              <div className="cart-total-details">
                <b>Total</b>
                <b>₦{ getTotalCartAmount}</b>
              </div>
            </div>
            <button onClick={()=>Navigate('/order')}>PROCEED TO PAYMENT</button>
          </div>
    </div>
      </form>
  )
}

export default PlaceOrder
