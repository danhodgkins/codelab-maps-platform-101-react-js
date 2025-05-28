import { AdvancedMarker } from '@vis.gl/react-google-maps'
import React, { useState } from 'react'

const CustomMarker = () => {

    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);
    const position = {
        lat: -33.864167,
        lng: 151.216387
    };

    // { lat: -33.864167, lng: 151.216387 }

    const renderCustomPin = () => {
        return (
        <>
            <div className="custom-pin">
            <button className="close-button">
                <span className="material-symbols-outlined"> close </span>
            </button>

            <div className="image-container">
                IMAGES HERE
            </div>

            <p>some para text</p>
            {/* <RealEstateListingDetails details={realEstateListing.details} /> */}
            </div>

            <div className="tip" />
        </>
        );
  };

  return (
     <AdvancedMarker
        position={position}
        title={'AdvancedMarker with custom html content.'}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        // className={classNames('real-estate-marker', {clicked, hovered})}
        onClick={() => setClicked(!clicked)}>
        {renderCustomPin()}
      </AdvancedMarker>
  )
}

export default CustomMarker