"use client"
import { useSelector } from 'react-redux';
import CartItemCard from '../_components/CartItemCard';
import LoginRegisterContainer from '../_components/LoginRegisterContainer';

export default function Page() {
  const cart = useSelector(state => state.cart.value);
  const user = useSelector(state => state.user.value);
  console.log(cart);
  return (
    <div className='w-full flex flex-col items-center justify-center gap-[10px] p-2'>
      {
        user ?
          (cart && cart.length > 0) ?
            cart.map(product => <CartItemCard product={product} key={product._id} />)
            :
            <div className="font-bold text-2xl text-gray-900">Your cart is Empty!</div>
          :
          <LoginRegisterContainer />
      }
    </div>
  )
}
