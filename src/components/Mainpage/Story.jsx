import React from 'react'
import './style3.css'
import addstory from '../../assets/userstory.png'

function Story() {
    return (
        <>
            <div className="storyAdd">
                <img src={addstory} alt="addstorylogo" className="story-img" />
                <p className="storyTxt">Story</p>
            </div>
        </>
    )
}

export default Story