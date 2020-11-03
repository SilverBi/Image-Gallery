import React, { Component } from 'react'

const viewImage = ({property}) => {
const {picture, index} = property;

    return (
        <div className="viewImage">
            <img src={picture} alt={"image_"+index} />
        </div>
    )
}

export default viewImage