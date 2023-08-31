import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lottie from 'lottie-react';

const MediaComponent = ({ mediaType, imageUrl, lottieOptions }) => {
    const isImage = mediaType === 'image';
    const isLottie = mediaType === 'lottie';

    return (
        <div>
            {isImage && imageUrl && (
                <LazyLoadImage
                    src={imageUrl}
                    alt=""
                    style={{ width: "100%", borderRadius: "1em", minHeight: "350px", objectFit: 'cover' }}
                    effect="blur"
                    visibleByDefault={false}
                />
            )}
            {isLottie && lottieOptions && (
                <div style={{ minHeight: "350px" }}>
                    <Lottie animationData={lottieOptions.animationData} />
                </div>
            )}
        </div>
    );
};

export default MediaComponent;
