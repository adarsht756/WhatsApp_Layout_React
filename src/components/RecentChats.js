import React, {Component} from "react";
import UserCard from "./UserCard";

class RecentChats extends Component {
    render() {
        return(
            <div className="overflow-y-scroll" style={{ 'height' : '680px' }}>
                {[...Array(10)].map((e, i) => <div key={i++}><UserCard/></div>)}
            </div>
        )
        var count=0;
    }
}

export default RecentChats;