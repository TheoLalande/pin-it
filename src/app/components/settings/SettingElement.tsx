'use client'
import { useRouter } from 'next/navigation'

type propsType = {
  icon: JSX.Element
  title: string
  description: string
  path: string
}

const SettingElement = (props: propsType) => {
  const router = useRouter()
  return (
    <button className="mt-2 w-full flex justify-center items-center " onClick={() => router.push(props.path)}>
      <div className="w-3/4 h-20  rounded-xl shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.05),0px_1px_0px_0px_rgba(25,28,33,0.01),0px_2px_3px_1px_rgba(25,28,33,0.12)] flex items-center flex-row ">
        <div className="bg-white p-2 rounded-xl  mx-5 shadow-lg">{props.icon}</div>
        <div className="flex flex-col text-left">
          <span className="font-semibold">{props.title}</span>
          <span className="ml-0 font-base text-sm">{props.description}</span>
        </div>
      </div>
    </button>
  )
}

export default SettingElement

{
  /* <Link href="/search" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
<FaPlus size={18} onClick={() => muteIsMenuShown(true)} />
</Link> */
}
