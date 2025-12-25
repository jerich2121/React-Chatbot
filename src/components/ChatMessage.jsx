import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';

export function ChatMessage({ message, sender }) {
        {
          /*props(Properties) = to reuse a chat message component*/
        }
        //const message = props.message;
        //const sender = props.sender;

        //const { message, sender } = props;

        /*
        if (sender === "robot") {
          return (
            <div>
              <img src="robot.png" className="chat-message-profile" />
              {message}
            </div>
          );
        }
        */

        return (
          <div
            className={
              sender === "user" ? "chat-message-user" : "chat-message-robot"
            }
          >
            {/*block element = take up an entire line by itself*/}
            {sender === "robot" && (
              <img src={RobotProfileImage} className="chat-message-profile" />
            )}
            <div className="chat-message-text">{message}</div>
            {sender === "user" && (
              <img src={UserProfileImage} className="chat-message-profile" />
            )}
            {/*Guard Operator*/}
          </div>
        );
      }