import React from 'react'
import { Popup } from 'react-leaflet'
import Image from 'next/image'
import styles from './Map.module.css'

const PinPopUp = () => {
  return (
    <Popup
      className={styles.customPopup} // Classe personnalisée pour styliser la popup
    >
      <div className={styles.popupContent}>
        <h1 className={styles.title}>Belvédère de la dent d&apos;aire</h1>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/popUpPic.jpg"
            alt="Vue du Belvédère"
            width={300}
            height={200}
            style={{ objectFit: 'cover' }} // Assure que l'image est bien redimensionnée
          />
        </div>
        <p>Superbe point de vu, le plus haut des gorges du Verdon. Suivre la route des crêtes pour y arriver.</p>
      </div>
    </Popup>
  )
}

export default PinPopUp
