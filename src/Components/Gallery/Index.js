import React from 'react'
import styles from "./Gallery.module.scss"

function Gallery({ mainSrc, others }) {
  return (
    <div className={styles.Gallery} >
      <img src={mainSrc} alt="gallery" />
    </div>
  )
}

export default Gallery