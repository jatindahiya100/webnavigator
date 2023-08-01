import React from 'react';
import Lottie from 'lottie-react'; // Make sure to install 'react-lottie' npm package

const MediaComponent = ({ mediaType, imageUrl, lottieOptions }) => {
    const isImage = mediaType === 'image';
    const isLottie = mediaType === 'lottie';

    return (
        <div>
            {isImage && imageUrl && <img style={{ width: "100%", borderRadius: "1em", minHeight: "350px" }} src={imageUrl} alt="" />}
            {isLottie && lottieOptions && <Lottie style={{minHeight: "350px"}} animationData={lottieOptions.animationData} />}
        </div>
    );
};

export default MediaComponent;
