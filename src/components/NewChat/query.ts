import gql from 'graphql-tag';

export const SUBSCRIPTION_USERS_LIST = gql`
subscription UsersList ($userId: String!){
    users (where:{user_id: {_neq: $userId}}){
      name
      user_id
    }
  }
`;

export const MUTATION_CREATE_CHAT = gql`
mutation CreateChat {
    insert_chats_one(object: {}) {
      chat_id
    }
  }
`

export const ADD_USERS = gql`
mutation AddUsers($chatUsers: [chat_to_user_insert_input!]!) {
    insert_chat_to_user(objects: $chatUsers) {
      affected_rows
    }
  }
`