import React from 'react'
import Image from 'next/image'
import { useCommonStore } from '@/app/store/commonStore'

type propsType = {
  id: number
  imagePath: string
  title: string
  description: string
  mapURL: string
}

const MapStyleElt = (props: propsType) => {
  const { muteMapStyle, mapStyle } = useCommonStore()
  function handleClick() {
    muteMapStyle({ mapURL: props.mapURL, mapId: props.id })
    console.log(props.mapURL)
  }

  return (
    <button className={`mr-10 flex w-full  shadow-md rounded-2xl p-5  items-center mb-3 ${props.id === mapStyle.mapId ? 'border-2 border-green-500' : null}`} onClick={() => handleClick()}>
      <div className="w-1/2 h-full ">
        <Image alt="terain" src={props.imagePath} width={130} height={150} className="rounded-3xl shadow-md" />
      </div>
      <div className="w-1/2 h-full  flex flex-col ml-5 text-left gap-3">
        <span className="text-black text-lg font-medium">{props.title}</span>
        <span className="text-black text-sm">{props.description}</span>
      </div>
    </button>
  )
}

export default MapStyleElt
