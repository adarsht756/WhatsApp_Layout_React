import React, {Component} from "react";
import CurrentUser from "./CurrentUser";
import UserChats from "./UserChats";
import TypeMessage from "./TypeMessage";

class Chats extends Component {
    render() {
        return (
            <div>
                <CurrentUser/>
                <UserChats/>
                <TypeMessage/>
            </div>
        )
    }
}

export default Chats;