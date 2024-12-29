import { categories } from "@/utils/globalVariables";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-[6px] font-semibold font-mono text-sm text-gray-700">
      {
        categories.map(category => <Link href={''} key={category} className="py-1 px-4 rounded-xl shadow-[0_0_1px_black] bg-white hover:bg-cyan-300/30 active:bg-cyan-600/50"> {category} </Link>)
      }
    </div>
  )
}
