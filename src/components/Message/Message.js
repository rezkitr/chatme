import React from "react";
import ReactEmoji from "react-emoji";

import "./Message.css";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="messageBox backgroundBlue">
        <div className="alignRight">
          <p className="senderName colorWhite">{trimmedName}</p>
          <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="senderName">{user}</p>
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  );
};
export default Message;
