import React from 'react'

export default function Slide(props) {
    const {index, activeIndex, image} = props;
    const claass = `${index===activeIndex ? 'slide active':'slide'}`;

    return (
        <div className={claass}><img src={image} /></div>
    )
}
