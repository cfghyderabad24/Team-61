import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = (response) => {
    const botMessage = createChatBotMessage(response);
  
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
   
  }

  const handlecodingWithoutComp = (response) => {
    const botMessage = createChatBotMessage(' Coding without a computer involves learning and practicing coding concepts using hands-on activities and physical tools. These activities help develop problem-solving and computational thinking skills without the need for a computer.');
  
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
   
  }

  const handlecodingKits = (response) => {
    const botMessage = createChatBotMessage(' Coding kits are educational tools that include various components like cards, puzzles, and manipulatives designed to teach coding concepts through interactive, hands-on activities. They make learning to code fun and accessible for all ages.');
  
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
   
  }

  const benefitsEcom = (response) => {
    const botMessage = createChatBotMessage(' Underprivileged children learning coding skills benefit the most.');
  
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  const handlechildLearn=(response)=>{
    const botMessage = createChatBotMessage('Coding fosters problem-solving skills and opens doors to tech careers.our activities are designed to be safe and suitable for children.');
  
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
   
  const handleVisually=(response)=>{
    const botMessage = createChatBotMessage('Coding fosters problem-solving skills and opens doors to tech careers.our activities are designed to be safe and suitable for children.');
  
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello: () => handleHello('Hello. Nice to meet you.'),
            handlecodingWithoutComp: () => handlecodingWithoutComp('Coding without a computer involves learning and practicing coding concepts using hands-on activities and physical tools. These activities help develop problem-solving and computational thinking skills without the need for a computer.'),
            handlecodingKits: () => handlecodingKits("Coding kits are educational tools that include various components like cards, puzzles, and manipulatives designed to teach coding concepts through interactive, hands-on activities. They make learning to code fun and accessible for all ages.") ,
            benefitsEcom: ()=> benefitsEcom("Underprivileged children learning coding skills benefit the most."),
            handlechildLearn: ()=> handlechildLearn("Coding fosters problem-solving skills and opens doors to tech careers.our activities are designed to be safe and suitable for children."),
            handleVisually:()=> handleVisually("Our kits include tactile elements like raised patterns and braille instructions. We also provide audio guides and interactive voice responses to assist visually impaired users in understanding and using the kits.")
          },
        });
      })}
    </div>
  );
}

export default ActionProvider;
