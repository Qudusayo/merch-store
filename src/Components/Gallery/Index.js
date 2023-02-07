import React from "react";
import styles from "./Gallery.module.scss";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";

function Gallery({ mainSrc, others }) {
  return (
    <div className={styles.Gallery}>
      <InnerImageZoom
        src={mainSrc}
        // zoomSrc="/path/to/zoom-image.jpg"
        zoomType="hover"
        zoomPreload={true}
        hideHint={true}
        className={styles.GalleryPreview}
      />
    </div>
  );
}

export default Gallery;
