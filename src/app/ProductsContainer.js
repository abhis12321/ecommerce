import ImageSlider from './_components/ImageSlider';
import ProductCard from './_components/ProductCard';

export default function ProductsContainer({allProducts}) {
    return (
      <div className='relative flex flex-col items-center gap-4'>
        <ImageSlider />
        {
          allProducts ?
            <div className="flex gap-7 flex-wrap items-center justify-around py-8">
              {allProducts.map((product, index) => <ProductCard key={product._id} product={product} />)}
            </div>
            :
            <div className="mx-auto h-40 w-40 rounded-full animate-spin border-t-4 border-slate-900 dark:border-white flex items-center justify-center">
              <div className="h-24 w-24 rounded-full border-r-4 border-slate-700 dark:border-white"></div>
            </div>
        }
      </div>
    )
}
