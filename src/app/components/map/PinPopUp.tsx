import React from 'react'
import { Popup } from 'react-leaflet'
import Image from 'next/image'
import styles from './Map.module.css'

type popUpProps = {
  title: string
  description: string
  imagePath: string
  latitude: number
  longitude: number
}

const PinPopUp = (props: popUpProps) => {
  return (
    <Popup
      className={styles.customPopup} // Classe personnalisée pour styliser la popup
    >
      <div className={styles.popupContent}>
        <h1>{props.title}</h1>
        <div className={styles.imageWrapper}>
          <Image src={props.imagePath} alt="Vue du Belvédère" width={300} height={200} style={{ objectFit: 'cover' }} />
        </div>
        <p>{props.description}</p>
        <div className="flex align-middle items-center gap-2 ">
          <Image src="/assets/icons/pin.svg" alt="pin" width={15} height={15} />
          {props.latitude},{props.longitude}
        </div>
      </div>
    </Popup>
  )
}

export default PinPopUp
