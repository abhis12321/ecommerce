"use client"

export default function ProductForm() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted!")
    }

    return (
        <div className="h-nav flex items-center justify-center">
            <form className="w-[98%] max-w-[500px] p-4 rounded-md shadow-[0_0_2px_gray] flex flex-col items-center gap-4 bg-white dark:bg-gray-800 ring-1 ring-gray-500" onSubmit={handleFormSubmit}>
                <div className="w-fit py-1 font-bold text-3xl text-gray-600 dark:text-gray-400">Add New Product</div>
                <div className="relative w-full group flex items-center justify-center">
                    <label htmlFor="product_title" className="absolute z-30 top-[-8px] left-[15px] text-xs font-bold text-gray-600 ring-gray-500 ring-1 rounded-lg bg-gray-300 group-focus-within:bg-gray-800 group-focus-within:text-white px-[22px] leading-[15px] cursor-grab group-focus-within:cursor-grabbing">Product title</label>
                    <input type="text" name="product_title" id="product_title" placeholder="Enter product title" className="w-full appearance-none resize-none outline-none bg-white/5 text-sm shadow-[0_0_1px_gray] focus:shadow-[0_0_10px_black_inset] rounded-md py-[6px] px-4 ring-1 ring-gray-500" required />
                </div>
                <div className="relative w-full group flex items-center justify-center">
                    <label htmlFor="product_category" className="absolute z-30 top-[-8px] left-[15px] text-xs font-bold text-gray-600 ring-gray-500 ring-1 rounded-lg bg-gray-300 group-focus-within:bg-gray-800 group-focus-within:text-white px-[22px] leading-[15px] cursor-grab group-focus-within:cursor-grabbing">Product category</label>
                    <input type="text" name="product_category" id="product_category" placeholder="Enter product category" className="w-full appearance-none resize-none outline-none bg-white/5 text-sm shadow-[0_0_1px_gray] focus:shadow-[0_0_10px_black_inset] rounded-md py-[6px] px-4 ring-1 ring-gray-500" required />
                </div>
                <div className="relative w-full group flex items-center justify-center">
                    <label htmlFor="product_description" className="absolute z-30 top-[-8px] left-[15px] text-xs font-bold text-gray-600 ring-gray-500 ring-1 rounded-lg bg-gray-300 group-focus-within:bg-gray-800 group-focus-within:text-white px-[22px] leading-[15px] cursor-grab group-focus-within:cursor-grabbing">Product description</label>
                    <input type="text" name="product_description" id="product_description" placeholder="Enter product description" className="w-full appearance-none resize-none outline-none bg-white/5 text-sm shadow-[0_0_1px_gray] focus:shadow-[0_0_10px_black_inset] rounded-md py-[6px] px-4 ring-1 ring-gray-500" required />
                </div>
                <div className="relative w-full group flex items-center justify-center">
                    <label htmlFor="price" className="absolute z-30 top-[-8px] left-[15px] text-xs font-bold text-gray-600 ring-gray-500 ring-1 rounded-lg bg-gray-300 group-focus-within:bg-gray-800 group-focus-within:text-white px-[22px] leading-[15px] cursor-grab group-focus-within:cursor-grabbing">Price</label>
                    <input type="number" name="price" id="price" placeholder="Enter price per unit" className="w-full appearance-none resize-none outline-none bg-white/5 text-sm shadow-[0_0_1px_gray] focus:shadow-[0_0_10px_black_inset] rounded-md py-[6px] px-4 ring-1 ring-gray-500" required />
                </div>
                <div className="relative w-full group flex items-center justify-center">
                    <label htmlFor="discountPercentage" className="absolute z-30 top-[-8px] left-[15px] text-xs font-bold text-gray-600 ring-gray-500 ring-1 rounded-lg bg-gray-300 group-focus-within:bg-gray-800 group-focus-within:text-white px-[22px] leading-[15px] cursor-grab group-focus-within:cursor-grabbing">Discount percentage</label>
                    <input type="number" name="discountPercentage" id="discountPercentage" placeholder="Enter discount percentage" className="w-full appearance-none resize-none outline-none bg-white/5 text-sm shadow-[0_0_1px_gray] focus:shadow-[0_0_10px_black_inset] rounded-md py-[6px] px-4 ring-1 ring-gray-500" required />
                </div>
                <div className="relative w-full group flex items-center justify-center">
                    <label htmlFor="available_stock" className="absolute z-30 top-[-8px] left-[15px] text-xs font-bold text-gray-600 ring-gray-500 ring-1 rounded-lg bg-gray-300 group-focus-within:bg-gray-800 group-focus-within:text-white px-[22px] leading-[15px] cursor-grab group-focus-within:cursor-grabbing">Available stock</label>
                    <input type="number" name="available_stock" id="available_stock" placeholder="Enter available stock" className="w-full appearance-none resize-none outline-none bg-white/5 text-sm shadow-[0_0_1px_gray] focus:shadow-[0_0_10px_black_inset] rounded-md py-[6px] px-4 ring-1 ring-gray-500" required />
                </div>
                <div className="relative w-full group flex items-center justify-center">
                    <label htmlFor="product_brand" className="absolute z-30 top-[-8px] left-[15px] text-xs font-bold text-gray-600 ring-gray-500 ring-1 rounded-lg bg-gray-300 group-focus-within:bg-gray-800 group-focus-within:text-white px-[22px] leading-[15px] cursor-grab group-focus-within:cursor-grabbing">Product brand</label>
                    <input type="text" name="product_brand" id="product_brand" placeholder="Enter product brand" className="w-full appearance-none resize-none outline-none bg-white/5 text-sm shadow-[0_0_1px_gray] focus:shadow-[0_0_10px_black_inset] rounded-md py-[6px] px-4 ring-1 ring-gray-500" required />
                </div>
                <div className="relative w-full group flex items-center justify-center">
                    <label htmlFor="product_warrantyInformation" className="absolute z-30 top-[-8px] left-[15px] text-xs font-bold text-gray-600 ring-gray-500 ring-1 rounded-lg bg-gray-300 group-focus-within:bg-gray-800 group-focus-within:text-white px-[22px] leading-[15px] cursor-grab group-focus-within:cursor-grabbing">Product warrantyInformation</label>
                    <input type="text" name="product_warrantyInformation" id="product_warrantyInformation" placeholder="Enter product warrantyInformation" className="w-full appearance-none resize-none outline-none bg-white/5 text-sm shadow-[0_0_1px_gray] focus:shadow-[0_0_10px_black_inset] rounded-md py-[6px] px-4 ring-1 ring-gray-500" required />
                </div>
                <div className="relative w-full group flex items-center justify-center">
                    <label htmlFor="product_shippingInformation" className="absolute z-30 top-[-8px] left-[15px] text-xs font-bold text-gray-600 ring-gray-500 ring-1 rounded-lg bg-gray-300 group-focus-within:bg-gray-800 group-focus-within:text-white px-[22px] leading-[15px] cursor-grab group-focus-within:cursor-grabbing">Product shippingInformation</label>
                    <input type="text" name="product_shippingInformation" id="product_shippingInformation" placeholder="Enter product shippingInformation" className="w-full appearance-none resize-none outline-none bg-white/5 text-sm shadow-[0_0_1px_gray] focus:shadow-[0_0_10px_black_inset] rounded-md py-[6px] px-4 ring-1 ring-gray-500" required />
                </div>
                <div className="relative w-full group flex items-center justify-center">
                    <label htmlFor="product_returnPolicy" className="absolute z-30 top-[-8px] left-[15px] text-xs font-bold text-gray-600 ring-gray-500 ring-1 rounded-lg bg-gray-300 group-focus-within:bg-gray-800 group-focus-within:text-white px-[22px] leading-[15px] cursor-grab group-focus-within:cursor-grabbing">Product returnPolicy</label>
                    <input type="text" name="product_returnPolicy" id="product_returnPolicy" placeholder="Enter product returnPolicy" className="w-full appearance-none resize-none outline-none bg-white/5 text-sm shadow-[0_0_1px_gray] focus:shadow-[0_0_10px_black_inset] rounded-md py-[6px] px-4 ring-1 ring-gray-500" required />
                </div>
                <input type="submit" value="add this product" className="w-full py-[6.5px] rounded-md text-sm font-semibold cursor-pointer ring-1 ring-red-800 bg-red-700 hover:bg-red-600 active:bg-violet-700 text-white" />
            </form>
        </div>
    )
}
