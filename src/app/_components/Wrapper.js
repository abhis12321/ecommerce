"use client"
import NavBar from './Navbar';
import Footer from './Footer';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

export default function Wrapper({ children, user, cartItems }) {
  return (
    <Provider store={store} >
      <body className={`min-h-screen flex flex-col justify-between bg-gray-100 text-gray-950`}>
        <NavBar user={user} cartItems={cartItems}/>
        <div className='h-nav' >
          {children}
        </div>
        <Footer />
      </body>
    </Provider >
  )
}
