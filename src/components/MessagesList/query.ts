import gql from 'graphql-tag';

export const QUERY_MESSAGES_LIST = gql`
subscription MessagesList($chatId: Int!) {
	messages(where:{chat_id: {_eq: $chatId}}, order_by:[{created_at:asc}]) {
        mid
        user {
          user_id
          name
        }
        content
        created_at
  	}
}  
`;
