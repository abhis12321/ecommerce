import ProductById from "@/app/_components/ProductById";
import { getProductById } from "@/utils/getProducts";

export default async function page({ params }) {
  const product = await getProductById(params);
  return (
    <ProductById product={product}/>
  )
}
