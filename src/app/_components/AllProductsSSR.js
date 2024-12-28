import { getAllProducts } from "@/utils/getProducts";
import ProductsContainer from "../ProductsContainer";

export default async function AllProductsSSR() {
  const allProducts = await getAllProducts();
  return (
    <ProductsContainer allProducts={allProducts} />
  )
}
