'use client'
import React from 'react'
import Image from 'next/image'
import ReactDOMServer from 'react-dom/server' // Pour rendre le HTML en chaîne
import L from 'leaflet'

type PropsType = {
  color: string
  iconName: string
}

const PPIcon = (props: PropsType) => {
  // Rendre le composant en tant que HTML string
  const html = ReactDOMServer.renderToString(
    <div
      className="inline-block rounded-full p-[2px] border-[1px] border-white"
      style={{
        backgroundColor: props.color,
        width: '28px', // Ajuster la taille du conteneur
        height: '28px', // Ajuster la taille du conteneur
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        alt="icon"
        src={`/assets/icons/${props.iconName}.svg`} // Chemin relatif à public
        width={19} // Taille de l'image
        height={19} // Taille de l'image
        style={{
          width: '19px', // Ajuster la taille du conteneur
          height: '19px', // Ajuster la taille du conteneur
        }}
      />
    </div>
  )

  return new L.DivIcon({
    className: 'custom-icon', // Classe CSS personnalisée
    html: html,
  })
}

export default PPIcon
