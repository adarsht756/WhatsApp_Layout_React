import React, {Component} from "react";
import avatar from '../assets/images/avatar.jpg';

class UserCard extends Component {
    render() {
        return (
            <div className="pl-4 pr-6 border-t py-3 flex">
                <div id="avatars">
                    <img className="rounded-full" style={{'width': '1.7cm'}} src={avatar} alt=""/>
                </div>
                <div id="chatInfo" className="ml-5 flex w-full justify-between">
                    <div>
                        <span className="text-lg">Adarsh Tiwari</span>
                        <br/>
                        <p style={{'color': 'rgba(0,0,0,0.6)'}} className="text-sm">Hey bro how u doin ?</p></div>
                    <div>
                        <time style={{'color': 'rgba(0,0,0,0.6)'}} className="text-xs">22:18</time>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard;