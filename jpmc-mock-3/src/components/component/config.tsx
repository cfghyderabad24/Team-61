import { Config } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'

const config: Config = {
    botName: "Nextskills360 Bot",
    initialMessages: [
      { id: 1, message: "Hi there! How can I help you today?" },
    ],
    customStyles: {
      botMessageBox: {
        backgroundColor: "#376B7E",
      },
      chatButton: {
        backgroundColor: "#376B7E",
      },
    },
  };
  
  export default config;
config.tsx