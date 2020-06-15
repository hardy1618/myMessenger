import gql from 'graphql-tag';

export const SUBSCRIPTION_CHAT_LIST = gql`
subscription ChatList($userId: String!) {
    chats(where:{users:{user_id:{_eq:$userId}}}, order_by: [{messages_aggregate: {max: {created_at: asc}}}]) {
      chat_id
      users(where: {user_id: {_neq: $userId}}) {
        user {
          name
          user_id
        }
      }
    }
  }
`;