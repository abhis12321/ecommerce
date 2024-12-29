import ProductById from "@/app/_components/ProductById";
import ProductsContainer from "@/app/_components/ProductsContainer";
import { getAllProductsByCategory, getProductById } from "@/utils/getProducts";

export default async function page({ params }) {
  const product = await getProductById(params);
  const allProducts = await getAllProductsByCategory({ product_category: params._id });
  
  <ProductsContainer allProducts={allProducts} />
  return (
    <>
      {
        allProducts?.length > 0 ?
          <ProductsContainer allProducts={allProducts} product_category={params._id}/>
          :
          <ProductById product={product} />
      }
    </>
  )
}
