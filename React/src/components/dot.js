import React from 'react'

export default function Dot(props) {
    const {index, activeIndex} = props;
    const cls = `${index===activeIndex ? 'dot active':'dot'}`;
    return (
        <div className={cls}></div>
    )
}