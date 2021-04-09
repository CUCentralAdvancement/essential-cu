import React from 'react';

interface Props {
    slideIndex: number;
    bgImage: string;
    bgImageLowRes: string;
    bgImageDesc: string;
    bgImageMobile: string;
}

export default function BackgroundImage({slideIndex, bgImage, bgImageLowRes, bgImageDesc, bgImageMobile}: Props) {
    return (
       <>
       <style>
       {`@media screen and (max-width:900px){
           .img-bgfill-container__${slideIndex} {
           background-image: url( ${bgImageMobile} );
           }
       }
       @media screen and (min-width:901px){
           .img-bgfill-container__${slideIndex} {
           background-image: url( ${bgImage} );
           }
       }`}
       </style>
       <div className={`img-bgfill-container img-bgfill-container__${slideIndex} slick-prog-blur`}>
       <img className="visually-hidden" src={bgImageLowRes}  alt={bgImageDesc} />
       </div>
       </>
    )
}