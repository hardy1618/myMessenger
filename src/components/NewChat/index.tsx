import * as React from 'react';
import { useUsersListSubscription } from '../../generated/graphql';
import NewChat, {OwnProps} from './NewChat';

interface Props extends OwnProps{
    userId: string;
    
  }

const NewChatContainer = (props: Props) => {
  const { data, error, loading } = useUsersListSubscription({ variables: {userId : props.userId} });
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

//   return <ChatList data={data} />;
  return <NewChat data={data} {...props}/>;
};

export default NewChatContainer;