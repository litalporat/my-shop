import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Notification = ({socket}) => {
  const [notifications, setNotifications] = useState([]);
  
  useEffect(() => {
    socket.on("recieve-likes", (data) => {
      console.log("data")
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const displayNotification = ({ senderName }) => {
    return (
      <span className="notification">{`${senderName} Liked a your post.`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
  };

  return (
    <div>
      { (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification;
