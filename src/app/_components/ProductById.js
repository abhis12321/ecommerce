import ErrorPage from './ErrorPage'
import ProductFullInfo from './ProductFullInfo'

export default function ProductById({ product }) {
  return (
      <div className=''>
        {
          product ? <ProductFullInfo product={product} />
            :
            <ErrorPage />
        }
      </div>
  )
}
