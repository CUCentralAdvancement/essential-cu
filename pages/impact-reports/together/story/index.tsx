import React from 'react';
import { useMediaQuery } from 'react-responsive';


export default function Story() {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 720px)'
    });

    return (
        <div>
            {
                isMobile ? <h1>Mobile Story</h1>
                    : <h1>Desktop Story</h1>
            }
        </div>
    )
}