import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'

      function App() {
        //Array Destructing & Lifting the State Up = share state between components
        const [
          chatMessages /*Current Data*/,
          setChatMessages /*Updater function*/,
        ] = useState([
          //State = data that is connected to the HTML
          {
            //When we update this data it will update the HTML
            message: "hello chatbot",
            sender: "user",
            id: "id1",
          },
          {
            message: "hello how can i help you?",
            sender: "robot",
            id: "id2",
          },
          {
            message: "can you get me todays date?",
            sender: "user",
            id: "id3",
          },
          {
            message: "Today is December 23",
            sender: "robot",
            id: "id4",
          },
        ]);
        //const [chatMessages, setChatMessages] = array; //Array Destructuring
        //const chatMessages = array[0];
        //const setChatMessages = array[1];

        return (
          <div className="app-container">
            {/*Fragment*/}

            {/*Component Syntax*/}
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
