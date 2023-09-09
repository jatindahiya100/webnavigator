import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ title, description, canonicalUrl }) {
    return (
        <Helmet>

            {/* Dynamic SEO Tags */}
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />

            {/* Dynamic Title Tag */}
            <title>{title}</title>
        </Helmet>
    );
}

export default SEO;
