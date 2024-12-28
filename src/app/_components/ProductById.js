import Loading from './Loading'
import ProductFullInfo from './ProductFullInfo'

export default function ProductById({ product }) {
  return (
      <div className=''>
        {
          product ? <ProductFullInfo product={product} />
            :
            <Loading />
        }
      </div>
  )
}
