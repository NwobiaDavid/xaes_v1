/* eslint-disable react/prop-types */


export default function CategoriesCart({header, description}) {
  return (
    <div className="border-4 duration-200 hover:scale-110 hover:border-0 hover:bg-yellow-400 border-dashed rounded-xl h-[10rem] text-center bg-white border-yellow-300 w-[20rem] p-3">
      <h2 className="font-semibold py-[0.1rem] text-xl ">{header}</h2>
      <p className="opacity-80">{description}</p>
    </div>
  )
}
