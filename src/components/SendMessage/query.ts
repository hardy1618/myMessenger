import gql from 'graphql-tag';

export const MUTATION_SEND_MESSAGE= gql`
mutation SendMessage($chatId: Int!, $content: String!, $senderId: String!) {
    insert_messages(objects: {chat_id: $chatId, content: $content, sender_id: $senderId}) {
      affected_rows
    }
  }
`;

