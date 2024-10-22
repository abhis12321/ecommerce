import Image from 'next/image'

export default function ProductImage({ img_url, setImgUrl }) {
    const selectImage = (e) => {
        if (e.target.files.length > 0 && e.target.files[0].size <= 1025 * 1025) {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);

            reader.onload = () => {
                setImgUrl(reader.result)
            }
        }
    }
    return (
        <div className='flex flex-col gap-1 items-center justify-center rounded-md'>
            <Image src={img_url ? img_url : "/img/profileImg.jpg"} alt='image' width={150} height={150} className='h-28 w-28 ring-1 ring-white rounded-full bg-white' />
            <input type="file" accept="image/*" className="w-fit max-w-[4.8rem] h-fit rounded-md text-red-950 text-center text-xs font-bold outline-none ring-1 focus:ring-2 ring-blue-500" placeholder="" onChange={ selectImage }  />
        </div>
    )
}
