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

  const sendMessage = async () => {
    // Adiciona a mensagem do cliente na lista de mensagens
    setMessages([...messages, { text: text, side: 'client' }]);
    setText(""); // Limpa o campo de texto
  
    // Faz a requisição com stream
    const response = await fetch("http://localhost:3001/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: text
      })
    });
  
    // Lê o stream da resposta
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
  
    let responseText = ""; // Para acumular o texto da resposta
    let done = false;
  
    while (!done) {
      // Lê cada chunk do stream
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
  
      // Decodifica o chunk e adiciona ao texto acumulado
      const chunk = decoder.decode(value, { stream: true });
      responseText += chunk;
  
      // Atualiza as mensagens enquanto o conteúdo está sendo recebido
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: chunk, side: 'bot' }
      ]);
    }
  
    // Quando a leitura terminar, garante que todo o conteúdo final seja atualizado
    if (responseText) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: responseText.msg, side: 'bot' }
      ]);
    }
  };
  

  const listMessages = () => {
    return messages.map((el) => <Message text={el.text} side={el.side}></Message>)
  }

  const handleKeyPress = (event) => {
    console.log("aa")
    if(event.keyCode === 13){
        sendMessage()
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
          <ion-icon onKeyPress={handleKeyPress} onClick={sendMessage} name="caret-up-circle-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Chat;
