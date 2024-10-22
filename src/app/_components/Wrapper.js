"use client"
import { Provider } from 'react-redux'
import NavBar from './Navbar'
import Footer from './Footer'
import { store } from './redux/store'

export default function Wrapper({ children }) {
  return (
    <Provider store={store} >
      <body className={`min-h-screen flex flex-col justify-between bg-gray-100 text-gray-950`}>
        <NavBar />
        <div className='h-nav p-1' >
          {children}
        </div>
        <Footer />
      </body>
    </Provider >
  )
}
