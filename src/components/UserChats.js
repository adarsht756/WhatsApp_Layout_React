import React, {Component} from "react";
import UserChatCard from "./User and Sender Chart Card/UserChatCard";
import SenderChatCard from "./User and Sender Chart Card/SenderChatCard";

class UserChats extends Component {
    render() {
        const chatHeight = window.innerHeight - 134;
        return (
            <div className="absolute flex flex-col px-20 py-10 overflow-y-scroll"
                 style={{'bottom': '72px', 'width': '-moz-available', 'height': chatHeight}}>
                <SenderChatCard/>
                <UserChatCard/>
                <SenderChatCard/>
                <SenderChatCard/>
                <UserChatCard/>
                <UserChatCard/>
                <UserChatCard/>
                <SenderChatCard/>
                <UserChatCard/>
                <UserChatCard/>
            </div>
        );
    }
}

export default UserChats;