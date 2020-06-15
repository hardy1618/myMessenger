import React from 'react'

interface props {
    sender_name: string,
    content: string,
    pos: string,
}

const Message: React.FC<props> = (props) => (
    <div className={"Message" + props.pos}>
        {props.pos === 'left' &&
            (<div className="Message-username">me</div>)}
        {props.pos === 'right' &&
            (<div className="Message-username">{props.sender_name}</div>)}
        {/* <div className="Message-box"> */}
            <div className="Message-text">{props.content}</div>
        {/* </div> */}
    </div>
);

export default Message