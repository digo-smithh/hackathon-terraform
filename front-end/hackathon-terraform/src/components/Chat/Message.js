import "./Message.css"

function Message({text, side}) {
  return (
    <div className={`message-wrapper ${side === 'bot' ? 'm-left' : 'm-right'}`}>
      <div className="message">
        <svg className="triangle"></svg>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Message;
