import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarOption.css";
import db from "../../../firebase"

const SidebarOption = ({ id, Icon, title, addChannelOption }) => {

  const history = useHistory()

  const selectChannel = () => {
    if (id){
      history.push(`/room/${id}`)
    } else {
      history.push(title)
    }
  }

  const addChannel = () => {
    const channelName = prompt("Enter the channel nasme: ")
    if (channelName){
db.collection("rooms").add({
  name: channelName
})
    }
  }
  return (
    <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <span>#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
