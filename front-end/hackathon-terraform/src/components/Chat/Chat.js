import "./Chat.css";
import { useState } from 'react';
import Message from "./Message";

function Chat() {
  const frases = [
    "Quero criar uma VM para um projeto escolar...",
    "Quero aprender a me amar mais!",
    "Quero criar um banco de dados para minha loja de roupas",
  ];

  const random = () => {
    return frases[0];
  };

  const sendMesage = () => {
    setMessages([...messages, {text: text, side: 'client'}])
    setText("")
  }

  const listMessages = () => {
    return messages.map((el) => <Message text={el.text} side={el.side}></Message>)
  }

  const handleKeyPress = (event) => {
    console.log("aa")
    if(event.keyCode === 13){
        sendMesage()
    }
  }

  const [messages, setMessages] = useState([])
  const [text, setText] = useState("")

  return (
    <div className="chat">
      <div className="magalu">
        <img src="https://tmjuntos.com.br/wp-content/uploads/2019/09/53665566_2554766447889869_3961496586210508800_n.png"></img>
        <p className="nome">Lu do Magalu</p>
        <p>•</p>
        <p className="status">Online</p>
      </div>
      <div className="conversation">
        <Message text="Olá, o que iremos criar hoje?" side="bot"></Message>
        {listMessages()}
      </div>
      <div className="chat-prompt">
        <div className="chat-input">
          <input placeholder={random()} value={text} onChange={(e) => {setText(e.target.value)}}></input>
          <ion-icon onKeyPress={handleKeyPress} onClick={sendMesage} name="caret-up-circle-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Chat;
