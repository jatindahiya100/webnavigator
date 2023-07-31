import React from 'react';
import Lottie from 'lottie-react'; // Make sure to install 'react-lottie' npm package

const MediaComponent = ({ mediaType, imageUrl, lottieOptions }) => {
    const isImage = mediaType === 'image';
    const isLottie = mediaType === 'lottie';

    return (
        <div>
            {isImage && imageUrl && <img src={imageUrl} alt="" />}
            {isLottie && lottieOptions && <Lottie animationData={lottieOptions.animationData} />}
        </div>
    );
};

export default MediaComponent;
