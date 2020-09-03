import React,{Component} from "react";

class SenderChatCard extends Component{
    render() {
        return (
            <div className="flex mb-2 justify-end">
                <div className="py-2 pl-3 rounded-tl-lg rounded-bl-lg rounded-br-lg shadow" style={greenBackround}>
                    {/*<span className="text-sm text-blue-400">Adarsh Tiwari</span>*/}
                    <p className="text-sm tracking-normal pr-5 leading-snug">
                        Dear Students, You have your Java Practical
                        Exam tomorrow PCS406 starting <br/> from 9am. I hope all of
                        you are able to see it on your dashboard by now
                    </p>
                </div>
                <div style={traingle}></div>
            </div>
        );
    }
}

const traingle = {
    width: 0,
    height: 0,
    borderRight: '10px solid transparent',
    borderTop: '10px solid #dcf8c6',
}

const greenBackround = {
    background:'#dcf8c6'
}
export default SenderChatCard;