import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    } 
    if (message.toLowerCase().includes('what is coding without computer')) {
      actions.handlecodingWithoutComp();
    }
    if (message.toLowerCase().includes('what are coding kits')) {
      actions.handlecodingKits();
    }
    if (message.toLowerCase().includes('who benefits from your e-commerce platform')) {
      actions.benefitsEcom();
    }
    if (message.toLowerCase().includes('what concepts will my child learn')) {
      actions.handlechildLearn();
    }
    if (message.toLowerCase().includes('what features make the coding kits accessible for visually impaired users')) {
      actions.handleVisually();
    }

    // else if(message.includes('What features make the coding kits accessible for visually impaired users')){
    //   actions.handlecodingKits();  
    // }  
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;

