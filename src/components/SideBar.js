import React ,{ Component } from "react";
import ProfileAndSearch from "./ProfileAndSearch";
import RecentChats from "./RecentChats";
class SideBar extends Component{
    render() {
        return(
            <div className="flex flex-col">
                <ProfileAndSearch/>
                <RecentChats/>
            </div>
        )
    }
}

export default SideBar;