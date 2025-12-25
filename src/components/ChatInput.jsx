import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
        //Lifting the State Up
        const [inputText, setInputText] = useState(""); //State = data that is connected to HTML.

        function saveInputText(event) {
          setInputText(event.target.value); //event.target = give us the element that we're typing
        }

        function sendMessage() {
          //In React, we should not modify the data directly. We should always create a copy then modify it. (This helps React be more efficient)
          const newChatMessages = [
            //Save this chatMessages into a new variable. Because it can't be the same with the chatbot!
            ...chatMessages, //Spread operator = takes the values in an array, and copies them into a new array.
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
            },
          ];

          setChatMessages(newChatMessages); //Set the new declared variable inside of the parenthesis.

          //In React, we should not modify the data directly. Same procedure!!!!
          const reponse = Chatbot.getResponse(inputText); //External source !!Dont get confused!!
          setChatMessages([
            ...newChatMessages, //Now put it here instead of copying "chatMessages" from above. (Click the element to see what happened)
            {
              message: reponse,
              sender: "robot",
              id: crypto.randomUUID(),
            },
          ]);

          setInputText(""); //Controlled input
        }

        return (
          <div className="chat-input-container">
            <input
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText} //onChange = runs a function when we change the text inside an <input>
              value={inputText} //Controlled input
              className="chat-input"
            />
            <button onClick={sendMessage} className="send-button">
              Send
            </button>
          </div>
        );
      }