import { categories } from "@/utils/globalVariables";
import Link from "next/link";

export default function Categories({curr_product_category}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-[6px] font-semibold font-mono text-sm text-gray-700">
      {
        categories.map(category => <Link href={`/products/${category}`} key={category} className={`py-1 px-4 rounded-xl shadow-[0_0_1px_black] hover:shadow-cyan-800 bg-white ${curr_product_category == category ? "bg-cyan-500/35 ring-1 ring-cyan-700 text-cyan-700" : "hover:bg-cyan-300/30 active:bg-cyan-600/50"}`}> {category} </Link>)
      }
    </div>
  )
}
