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
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.imageWrapper}>
          <Image src={props.imagePath} alt="Vue du Belvédère" width={300} height={200} style={{ objectFit: 'cover' }} />
        </div>
        <p>{props.description}</p>
        <div className="flex justify-center align-middle items-center gap-1 ">
          <Image src="/assets/icons/pin.svg" alt="pin" width={15} height={15} />
          <p>
            {props.latitude},{props.longitude}
          </p>
        </div>
      </div>
    </Popup>
  )
}

export default PinPopUp
