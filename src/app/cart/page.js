"use client"
import { useSelector } from 'react-redux';
import CartItemCard from '../_components/CartItemCard';
import LoginRegisterContainer from '../_components/LoginRegisterContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  const cart = useSelector(state => state.cart.value);
  const user = useSelector(state => state.user.value);
  
  return (
    <div className='w-full h-nav flex flex-col items-center justify-center gap-[10px] p-2 relative'>
      <div className="w-full h-nav absolute top-0 left-0 flex items-center justify-center z-[-1]">
        <FontAwesomeIcon size='sm' icon={faCartPlus} className='h-[min(60vh,60vw)] text-gray-300/70'/>
        </div>
      {
        user ?
          (cart && cart.length > 0) ?
            cart.map(product => <CartItemCard product={product} key={product._id} />)
            :
            <div className="text-center font-bold text-[2.5rem] font-serif text-gray-700">Your cart is Empty!</div>
          :
          <LoginRegisterContainer />
      }
    </div>
  )
}
