import * as React from 'react';
import Message from './Message'
import { MessagesListSubscription } from '../../generated/graphql';


interface Props {
    data: MessagesListSubscription;
    userId: string;
}

const className = 'MessagesList';

const MessagesList: React.FC<Props> = ({ data, userId }) => {
    
    return (
        <div className={`${className}`} id="scroll">
            {/* <div>
            {!data.messages && (<div className="message-list">
                <div className="JoinChat">
                    Join a chat below!
            </div>
            </div>)}
            </div> */}
            {!!data.messages && data.messages.length===0 && (
                
                <div className="JoinChat">
                    Start a new chat!
                </div>)
            }
            {!!data.messages &&
                data.messages.map(
                    (message) => {
                        var pos= (message.user.user_id===userId)? 'right': 'left';
                        return !!message && (
                            <Message key={message.mid} sender_name={message.user.name} content={message.content} pos={pos}/>
                        )
                    }
                )}
        </div>
    );
    // }
};

export default MessagesList;
