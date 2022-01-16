import React from "react";
import Icon, {
  HomeOutlined,
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";
export default function Sidebar() {
  function SidebarOption({ text, name, tag }) {
    return (
      <div className="sidebar-option">
        <Icon className="sidebar-icon" component={name} size="medium" />
        <h2>{text}</h2>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <SidebarOption text="Home" name={HomeOutlined} />
      <SidebarOption text="Profile" name={UserOutlined} />
      <SidebarOption text="Messages" name={MessageOutlined} />
      <SidebarOption text="Notify" name={NotificationOutlined} />
      
      
    </div>
    
  );
}

