import React from 'react'
import "./post.css";
import { MoreVert } from "@material-ui/icons";


export default function Post() {
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className="postprofileImg" src="assets/koreana_files/47666.png" alt="" />
                        <span className='postUsername'>Reone</span>
                        <span className='postDate'>5 mins ago</span>

                    </div>
                    <div className='postTopRight'>
                        <MoreVert />
                    </div>
                </div>
                <div className='postCenter'></div>
                <div className='postBottom'></div>

            </div>
        </div>
    )
}
