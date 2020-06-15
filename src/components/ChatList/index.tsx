import * as React from 'react';
import { useChatListSubscription } from '../../generated/graphql';
import ChatList, {OwnProps} from './ChatList';

interface Props extends OwnProps{
    userId: string;
  }

const ChatListContainer = (props: Props) => {
    // console.log(props);
  const { data, error, loading } = useChatListSubscription({ variables: {userId : props.userId} });
    // console.log("chat_list", data);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <ChatList data={data} {...props} />;
};

export default ChatListContainer;