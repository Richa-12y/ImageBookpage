import React from 'react'
import "./sidebar.css";
import {
    RssFeed, Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>

                    <li className='sidebarListItem'>
                        <RssFeed className='sidebarIcon' />
                        <span className='sidebarListItemText'>Feed</span>
                    </li>

                    <li className='sidebarListItem'>
                        <Chat className='sidebarIcon' />
                        <span className='sidebarListItemText'>Chat</span>
                    </li>

                    <li className='sidebarListItem'>
                        <PlayCircleFilledOutlined className='sidebarIcon' />
                        <span className='sidebarListItemText'>PlayCircleFilledOutlined</span>
                    </li>

                    <li className='sidebarListItem'>
                        <Group className='sidebarIcon' />
                        <span className='sidebarListItemText'>Group</span>
                    </li>

                    <li className='sidebarListItem'>
                        <Bookmark className='sidebarIcon' />
                        <span className='sidebarListItemText'>Bookmark</span>
                    </li>

                    <li className='sidebarListItem'>
                        <HelpOutline className='sidebarIcon' />
                        <span className='sidebarListItemText'>HelpOutline</span>
                    </li>

                    <li className='sidebarListItem'>
                        <WorkOutline className='sidebarIcon' />
                        <span className='sidebarListItemText'>WorkOutline</span>
                    </li>

                    <li className='sidebarListItem'>
                        <Event className='sidebarIcon' />
                        <span className='sidebarListItemText'>Event</span>
                    </li>

                    <li className='sidebarListItem'>
                        <School className='sidebarIcon' />
                        <span className='sidebarListItemText'>School</span>
                    </li>

                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr' />
                <ul className='sidebarFriendList'>
                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src="assets/koreana_files/3.jpeg" alt='' />
                        <span className='sidebarFriendName'>Ajo</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src="assets/koreana_files/3.jpeg" alt='' />
                        <span className='sidebarFriendName'>Ajo</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src="assets/koreana_files/3.jpeg" alt='' />
                        <span className='sidebarFriendName'>Ajo</span>
                    </li>

                    <li className='sidebarFriend'>
                        <img className='sidebarFriendImage' src="assets/koreana_files/3.jpeg" alt='' />
                        <span className='sidebarFriendName'>Ajo</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
