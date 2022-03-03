import React from 'react'
import "./rightbar.css";

export default function Rightbar() {
    return (
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <div className='birthdayContainer'>
                    <img className='birthdayImg' src='assets/gift.png' alt='' />
                    <span className="birthdayText">
                        <b>Ashu Richu</b> and <b>3 other friends</b> have a birhday today.
                    </span>
                </div>
            </div>
        </div>
    )
}
