import React, {Component} from "react";

class UserChatCard extends Component {
    render() {
        return (
            <div className="flex pb-3">
                <div style={traingle}></div>
                <div className="bg-white pt-1 pb-3 pl-3 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow">
                    <span className="text-sm text-blue-400">Mahesh Sir</span>
                    <p className="text-sm tracking-normal pr-5 leading-snug">Dear Students, You have your Java Practical
                        Exam tomorrow PCS406 starting <br/> from 9am. I hope all of
                        you are able to see it on your dashboard by now</p>
                </div>
            </div>
        );
    }
}

const traingle = {
    borderLeft: '10px solid transparent',
    borderTop: '10px solid white',
}

export default UserChatCard;