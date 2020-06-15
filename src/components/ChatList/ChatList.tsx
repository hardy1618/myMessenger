import * as React from 'react';
import { ChatListSubscription } from '../../generated/graphql';

export interface OwnProps {
    passChatId : (chat_id: number) => void;
    id: number;
}

interface Props extends OwnProps{
  data: ChatListSubscription;
}

const className = 'ChatList';

const ChatList: React.FC<Props> = ({ data, id, passChatId}) => (
  <div className={className}>
      {/* {console.log(data)} */}
    <ul >
        <h3>Your chats:</h3>
      {!!data.chats &&
        data.chats.map(
          (chat) => {
            const active = chat.chat_id=== id? 'active':''
            // const active= 'active';
            var chat_name: string = "";
            var i: number;
            for(i=0; i<(chat.users.length-1); i++) {
                chat_name+= chat.users[i].user.name+ ", ";
            }
            chat_name+= chat.users[i].user.name
            return !!chat && (
                <li key={chat.chat_id} className={"Chat" + active}
                onClick={()=> passChatId(chat.chat_id!)}>
                    <a href="#"
                    rel="no-refresh"
                    >
                    # {chat_name}
                    </a>
            </li>
            )
          }
        )}
    </ul>
  </div>
);

export default ChatList;
