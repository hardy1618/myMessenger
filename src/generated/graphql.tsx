import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "chat_to_user" */
export type Chat_To_User = {
  __typename?: 'chat_to_user';
  /** An object relationship */
  chat: Chats;
  chat_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** input type for inserting array relation for remote table "chat_to_user" */
export type Chat_To_User_Arr_Rel_Insert_Input = {
  data: Array<Chat_To_User_Insert_Input>;
  on_conflict?: Maybe<Chat_To_User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat_to_user". All fields are combined with a logical 'AND'. */
export type Chat_To_User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chat_To_User_Bool_Exp>>>;
  _not?: Maybe<Chat_To_User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Chat_To_User_Bool_Exp>>>;
  chat?: Maybe<Chats_Bool_Exp>;
  chat_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_to_user" */
export enum Chat_To_User_Constraint {
  /** unique or primary key constraint */
  ChatToUserPkey = 'chat_to_user_pkey'
}

/** input type for incrementing integer column in table "chat_to_user" */
export type Chat_To_User_Inc_Input = {
  chat_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "chat_to_user" */
export type Chat_To_User_Insert_Input = {
  chat?: Maybe<Chats_Obj_Rel_Insert_Input>;
  chat_id?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "chat_to_user" */
export type Chat_To_User_Mutation_Response = {
  __typename?: 'chat_to_user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Chat_To_User>;
};

/** input type for inserting object relation for remote table "chat_to_user" */
export type Chat_To_User_Obj_Rel_Insert_Input = {
  data: Chat_To_User_Insert_Input;
  on_conflict?: Maybe<Chat_To_User_On_Conflict>;
};

/** on conflict condition type for table "chat_to_user" */
export type Chat_To_User_On_Conflict = {
  constraint: Chat_To_User_Constraint;
  update_columns: Array<Chat_To_User_Update_Column>;
  where?: Maybe<Chat_To_User_Bool_Exp>;
};

/** ordering options when selecting data from "chat_to_user" */
export type Chat_To_User_Order_By = {
  chat?: Maybe<Chats_Order_By>;
  chat_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "chat_to_user" */
export type Chat_To_User_Pk_Columns_Input = {
  chat_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** select columns of table "chat_to_user" */
export enum Chat_To_User_Select_Column {
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "chat_to_user" */
export type Chat_To_User_Set_Input = {
  chat_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "chat_to_user" */
export enum Chat_To_User_Update_Column {
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "chats" */
export type Chats = {
  __typename?: 'chats';
  chat_id: Scalars['Int'];
  chat_name?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  is_group?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregated array relationship */
  messages_aggregate: Messages_Aggregate;
  /** An array relationship */
  users: Array<Chat_To_User>;
};


/** columns and relationships of "chats" */
export type ChatsMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** columns and relationships of "chats" */
export type ChatsMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** columns and relationships of "chats" */
export type ChatsUsersArgs = {
  distinct_on?: Maybe<Array<Chat_To_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_To_User_Order_By>>;
  where?: Maybe<Chat_To_User_Bool_Exp>;
};

/** aggregated selection of "chats" */
export type Chats_Aggregate = {
  __typename?: 'chats_aggregate';
  aggregate?: Maybe<Chats_Aggregate_Fields>;
  nodes: Array<Chats>;
};

/** aggregate fields of "chats" */
export type Chats_Aggregate_Fields = {
  __typename?: 'chats_aggregate_fields';
  avg?: Maybe<Chats_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Chats_Max_Fields>;
  min?: Maybe<Chats_Min_Fields>;
  stddev?: Maybe<Chats_Stddev_Fields>;
  stddev_pop?: Maybe<Chats_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chats_Stddev_Samp_Fields>;
  sum?: Maybe<Chats_Sum_Fields>;
  var_pop?: Maybe<Chats_Var_Pop_Fields>;
  var_samp?: Maybe<Chats_Var_Samp_Fields>;
  variance?: Maybe<Chats_Variance_Fields>;
};


/** aggregate fields of "chats" */
export type Chats_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chats_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chats" */
export type Chats_Aggregate_Order_By = {
  avg?: Maybe<Chats_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Chats_Max_Order_By>;
  min?: Maybe<Chats_Min_Order_By>;
  stddev?: Maybe<Chats_Stddev_Order_By>;
  stddev_pop?: Maybe<Chats_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Chats_Stddev_Samp_Order_By>;
  sum?: Maybe<Chats_Sum_Order_By>;
  var_pop?: Maybe<Chats_Var_Pop_Order_By>;
  var_samp?: Maybe<Chats_Var_Samp_Order_By>;
  variance?: Maybe<Chats_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chats" */
export type Chats_Arr_Rel_Insert_Input = {
  data: Array<Chats_Insert_Input>;
  on_conflict?: Maybe<Chats_On_Conflict>;
};

/** aggregate avg on columns */
export type Chats_Avg_Fields = {
  __typename?: 'chats_avg_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chats" */
export type Chats_Avg_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chats". All fields are combined with a logical 'AND'. */
export type Chats_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chats_Bool_Exp>>>;
  _not?: Maybe<Chats_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Chats_Bool_Exp>>>;
  chat_id?: Maybe<Int_Comparison_Exp>;
  chat_name?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  is_group?: Maybe<Boolean_Comparison_Exp>;
  messages?: Maybe<Messages_Bool_Exp>;
  users?: Maybe<Chat_To_User_Bool_Exp>;
};

/** unique or primary key constraints on table "chats" */
export enum Chats_Constraint {
  /** unique or primary key constraint */
  ChatsPkey = 'chats_pkey'
}

/** input type for incrementing integer column in table "chats" */
export type Chats_Inc_Input = {
  chat_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "chats" */
export type Chats_Insert_Input = {
  chat_id?: Maybe<Scalars['Int']>;
  chat_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  is_group?: Maybe<Scalars['Boolean']>;
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>;
  users?: Maybe<Chat_To_User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Chats_Max_Fields = {
  __typename?: 'chats_max_fields';
  chat_id?: Maybe<Scalars['Int']>;
  chat_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "chats" */
export type Chats_Max_Order_By = {
  chat_id?: Maybe<Order_By>;
  chat_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chats_Min_Fields = {
  __typename?: 'chats_min_fields';
  chat_id?: Maybe<Scalars['Int']>;
  chat_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "chats" */
export type Chats_Min_Order_By = {
  chat_id?: Maybe<Order_By>;
  chat_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "chats" */
export type Chats_Mutation_Response = {
  __typename?: 'chats_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Chats>;
};

/** input type for inserting object relation for remote table "chats" */
export type Chats_Obj_Rel_Insert_Input = {
  data: Chats_Insert_Input;
  on_conflict?: Maybe<Chats_On_Conflict>;
};

/** on conflict condition type for table "chats" */
export type Chats_On_Conflict = {
  constraint: Chats_Constraint;
  update_columns: Array<Chats_Update_Column>;
  where?: Maybe<Chats_Bool_Exp>;
};

/** ordering options when selecting data from "chats" */
export type Chats_Order_By = {
  chat_id?: Maybe<Order_By>;
  chat_name?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  is_group?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>;
};

/** primary key columns input for table: "chats" */
export type Chats_Pk_Columns_Input = {
  chat_id: Scalars['Int'];
};

/** select columns of table "chats" */
export enum Chats_Select_Column {
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  ChatName = 'chat_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  IsGroup = 'is_group'
}

/** input type for updating data in table "chats" */
export type Chats_Set_Input = {
  chat_id?: Maybe<Scalars['Int']>;
  chat_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  is_group?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Chats_Stddev_Fields = {
  __typename?: 'chats_stddev_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chats" */
export type Chats_Stddev_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chats_Stddev_Pop_Fields = {
  __typename?: 'chats_stddev_pop_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chats" */
export type Chats_Stddev_Pop_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chats_Stddev_Samp_Fields = {
  __typename?: 'chats_stddev_samp_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chats" */
export type Chats_Stddev_Samp_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Chats_Sum_Fields = {
  __typename?: 'chats_sum_fields';
  chat_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chats" */
export type Chats_Sum_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** update columns of table "chats" */
export enum Chats_Update_Column {
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  ChatName = 'chat_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  IsGroup = 'is_group'
}

/** aggregate var_pop on columns */
export type Chats_Var_Pop_Fields = {
  __typename?: 'chats_var_pop_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chats" */
export type Chats_Var_Pop_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chats_Var_Samp_Fields = {
  __typename?: 'chats_var_samp_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chats" */
export type Chats_Var_Samp_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Chats_Variance_Fields = {
  __typename?: 'chats_variance_fields';
  chat_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chats" */
export type Chats_Variance_Order_By = {
  chat_id?: Maybe<Order_By>;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  /** An object relationship */
  chat: Chats;
  chat_id: Scalars['Int'];
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  mid: Scalars['Int'];
  sender_id: Scalars['String'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  avg?: Maybe<Messages_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
  stddev?: Maybe<Messages_Stddev_Fields>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Fields>;
  sum?: Maybe<Messages_Sum_Fields>;
  var_pop?: Maybe<Messages_Var_Pop_Fields>;
  var_samp?: Maybe<Messages_Var_Samp_Fields>;
  variance?: Maybe<Messages_Variance_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Messages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  avg?: Maybe<Messages_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Messages_Max_Order_By>;
  min?: Maybe<Messages_Min_Order_By>;
  stddev?: Maybe<Messages_Stddev_Order_By>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Order_By>;
  sum?: Maybe<Messages_Sum_Order_By>;
  var_pop?: Maybe<Messages_Var_Pop_Order_By>;
  var_samp?: Maybe<Messages_Var_Samp_Order_By>;
  variance?: Maybe<Messages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** aggregate avg on columns */
export type Messages_Avg_Fields = {
  __typename?: 'messages_avg_fields';
  chat_id?: Maybe<Scalars['Float']>;
  mid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "messages" */
export type Messages_Avg_Order_By = {
  chat_id?: Maybe<Order_By>;
  mid?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  _not?: Maybe<Messages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  chat?: Maybe<Chats_Bool_Exp>;
  chat_id?: Maybe<Int_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  mid?: Maybe<Int_Comparison_Exp>;
  sender_id?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** input type for incrementing integer column in table "messages" */
export type Messages_Inc_Input = {
  chat_id?: Maybe<Scalars['Int']>;
  mid?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  chat?: Maybe<Chats_Obj_Rel_Insert_Input>;
  chat_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  mid?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  chat_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  mid?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  chat_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  mid?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  chat_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  mid?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  chat_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  mid?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Messages>;
};

/** input type for inserting object relation for remote table "messages" */
export type Messages_Obj_Rel_Insert_Input = {
  data: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

/** on conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns: Array<Messages_Update_Column>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** ordering options when selecting data from "messages" */
export type Messages_Order_By = {
  chat?: Maybe<Chats_Order_By>;
  chat_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  mid?: Maybe<Order_By>;
  sender_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "messages" */
export type Messages_Pk_Columns_Input = {
  mid: Scalars['Int'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Mid = 'mid',
  /** column name */
  SenderId = 'sender_id'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  chat_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  mid?: Maybe<Scalars['Int']>;
  sender_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Messages_Stddev_Fields = {
  __typename?: 'messages_stddev_fields';
  chat_id?: Maybe<Scalars['Float']>;
  mid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "messages" */
export type Messages_Stddev_Order_By = {
  chat_id?: Maybe<Order_By>;
  mid?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Messages_Stddev_Pop_Fields = {
  __typename?: 'messages_stddev_pop_fields';
  chat_id?: Maybe<Scalars['Float']>;
  mid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "messages" */
export type Messages_Stddev_Pop_Order_By = {
  chat_id?: Maybe<Order_By>;
  mid?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Messages_Stddev_Samp_Fields = {
  __typename?: 'messages_stddev_samp_fields';
  chat_id?: Maybe<Scalars['Float']>;
  mid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "messages" */
export type Messages_Stddev_Samp_Order_By = {
  chat_id?: Maybe<Order_By>;
  mid?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Messages_Sum_Fields = {
  __typename?: 'messages_sum_fields';
  chat_id?: Maybe<Scalars['Int']>;
  mid?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "messages" */
export type Messages_Sum_Order_By = {
  chat_id?: Maybe<Order_By>;
  mid?: Maybe<Order_By>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  ChatId = 'chat_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Mid = 'mid',
  /** column name */
  SenderId = 'sender_id'
}

/** aggregate var_pop on columns */
export type Messages_Var_Pop_Fields = {
  __typename?: 'messages_var_pop_fields';
  chat_id?: Maybe<Scalars['Float']>;
  mid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "messages" */
export type Messages_Var_Pop_Order_By = {
  chat_id?: Maybe<Order_By>;
  mid?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Messages_Var_Samp_Fields = {
  __typename?: 'messages_var_samp_fields';
  chat_id?: Maybe<Scalars['Float']>;
  mid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "messages" */
export type Messages_Var_Samp_Order_By = {
  chat_id?: Maybe<Order_By>;
  mid?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Messages_Variance_Fields = {
  __typename?: 'messages_variance_fields';
  chat_id?: Maybe<Scalars['Float']>;
  mid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "messages" */
export type Messages_Variance_Order_By = {
  chat_id?: Maybe<Order_By>;
  mid?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "chat_to_user" */
  delete_chat_to_user?: Maybe<Chat_To_User_Mutation_Response>;
  /** delete single row from the table: "chat_to_user" */
  delete_chat_to_user_by_pk?: Maybe<Chat_To_User>;
  /** delete data from the table: "chats" */
  delete_chats?: Maybe<Chats_Mutation_Response>;
  /** delete single row from the table: "chats" */
  delete_chats_by_pk?: Maybe<Chats>;
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "chat_to_user" */
  insert_chat_to_user?: Maybe<Chat_To_User_Mutation_Response>;
  /** insert a single row into the table: "chat_to_user" */
  insert_chat_to_user_one?: Maybe<Chat_To_User>;
  /** insert data into the table: "chats" */
  insert_chats?: Maybe<Chats_Mutation_Response>;
  /** insert a single row into the table: "chats" */
  insert_chats_one?: Maybe<Chats>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "chat_to_user" */
  update_chat_to_user?: Maybe<Chat_To_User_Mutation_Response>;
  /** update single row of the table: "chat_to_user" */
  update_chat_to_user_by_pk?: Maybe<Chat_To_User>;
  /** update data of the table: "chats" */
  update_chats?: Maybe<Chats_Mutation_Response>;
  /** update single row of the table: "chats" */
  update_chats_by_pk?: Maybe<Chats>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Chat_To_UserArgs = {
  where: Chat_To_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_To_User_By_PkArgs = {
  chat_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ChatsArgs = {
  where: Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chats_By_PkArgs = {
  chat_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  mid: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Chat_To_UserArgs = {
  objects: Array<Chat_To_User_Insert_Input>;
  on_conflict?: Maybe<Chat_To_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_To_User_OneArgs = {
  object: Chat_To_User_Insert_Input;
  on_conflict?: Maybe<Chat_To_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChatsArgs = {
  objects: Array<Chats_Insert_Input>;
  on_conflict?: Maybe<Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chats_OneArgs = {
  object: Chats_Insert_Input;
  on_conflict?: Maybe<Chats_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_To_UserArgs = {
  _inc?: Maybe<Chat_To_User_Inc_Input>;
  _set?: Maybe<Chat_To_User_Set_Input>;
  where: Chat_To_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_To_User_By_PkArgs = {
  _inc?: Maybe<Chat_To_User_Inc_Input>;
  _set?: Maybe<Chat_To_User_Set_Input>;
  pk_columns: Chat_To_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChatsArgs = {
  _inc?: Maybe<Chats_Inc_Input>;
  _set?: Maybe<Chats_Set_Input>;
  where: Chats_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chats_By_PkArgs = {
  _inc?: Maybe<Chats_Inc_Input>;
  _set?: Maybe<Chats_Set_Input>;
  pk_columns: Chats_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _inc?: Maybe<Messages_Inc_Input>;
  _set?: Maybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _inc?: Maybe<Messages_Inc_Input>;
  _set?: Maybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "chat_to_user" */
  chat_to_user: Array<Chat_To_User>;
  /** fetch data from the table: "chat_to_user" using primary key columns */
  chat_to_user_by_pk?: Maybe<Chat_To_User>;
  /** fetch data from the table: "chats" */
  chats: Array<Chats>;
  /** fetch aggregated fields from the table: "chats" */
  chats_aggregate: Chats_Aggregate;
  /** fetch data from the table: "chats" using primary key columns */
  chats_by_pk?: Maybe<Chats>;
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootChat_To_UserArgs = {
  distinct_on?: Maybe<Array<Chat_To_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_To_User_Order_By>>;
  where?: Maybe<Chat_To_User_Bool_Exp>;
};


/** query root */
export type Query_RootChat_To_User_By_PkArgs = {
  chat_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootChatsArgs = {
  distinct_on?: Maybe<Array<Chats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chats_Order_By>>;
  where?: Maybe<Chats_Bool_Exp>;
};


/** query root */
export type Query_RootChats_AggregateArgs = {
  distinct_on?: Maybe<Array<Chats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chats_Order_By>>;
  where?: Maybe<Chats_Bool_Exp>;
};


/** query root */
export type Query_RootChats_By_PkArgs = {
  chat_id: Scalars['Int'];
};


/** query root */
export type Query_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** query root */
export type Query_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** query root */
export type Query_RootMessages_By_PkArgs = {
  mid: Scalars['Int'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  user_id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "chat_to_user" */
  chat_to_user: Array<Chat_To_User>;
  /** fetch data from the table: "chat_to_user" using primary key columns */
  chat_to_user_by_pk?: Maybe<Chat_To_User>;
  /** fetch data from the table: "chats" */
  chats: Array<Chats>;
  /** fetch aggregated fields from the table: "chats" */
  chats_aggregate: Chats_Aggregate;
  /** fetch data from the table: "chats" using primary key columns */
  chats_by_pk?: Maybe<Chats>;
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootChat_To_UserArgs = {
  distinct_on?: Maybe<Array<Chat_To_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_To_User_Order_By>>;
  where?: Maybe<Chat_To_User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChat_To_User_By_PkArgs = {
  chat_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootChatsArgs = {
  distinct_on?: Maybe<Array<Chats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chats_Order_By>>;
  where?: Maybe<Chats_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChats_AggregateArgs = {
  distinct_on?: Maybe<Array<Chats_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chats_Order_By>>;
  where?: Maybe<Chats_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChats_By_PkArgs = {
  chat_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMessages_By_PkArgs = {
  mid: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  user_id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  chats: Array<Chat_To_User>;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  last_seen: Scalars['timestamptz'];
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregated array relationship */
  messages_aggregate: Messages_Aggregate;
  name: Scalars['String'];
  user_id: Scalars['String'];
};


/** columns and relationships of "users" */
export type UsersChatsArgs = {
  distinct_on?: Maybe<Array<Chat_To_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_To_User_Order_By>>;
  where?: Maybe<Chat_To_User_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  chats?: Maybe<Chat_To_User_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  messages?: Maybe<Messages_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  chats?: Maybe<Chat_To_User_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  user_id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Image = 'image',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Image = 'image',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id'
}

export type ChatListSubscriptionVariables = {
  userId: Scalars['String'];
};


export type ChatListSubscription = (
  { __typename?: 'subscription_root' }
  & { chats: Array<(
    { __typename?: 'chats' }
    & Pick<Chats, 'chat_id'>
    & { users: Array<(
      { __typename?: 'chat_to_user' }
      & { user: (
        { __typename?: 'users' }
        & Pick<Users, 'name' | 'user_id'>
      ) }
    )> }
  )> }
);

export type MessagesListSubscriptionVariables = {
  chatId: Scalars['Int'];
};


export type MessagesListSubscription = (
  { __typename?: 'subscription_root' }
  & { messages: Array<(
    { __typename?: 'messages' }
    & Pick<Messages, 'mid' | 'content' | 'created_at'>
    & { user: (
      { __typename?: 'users' }
      & Pick<Users, 'user_id' | 'name'>
    ) }
  )> }
);

export type UsersListSubscriptionVariables = {
  userId: Scalars['String'];
};


export type UsersListSubscription = (
  { __typename?: 'subscription_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'name' | 'user_id'>
  )> }
);

export type CreateChatMutationVariables = {};


export type CreateChatMutation = (
  { __typename?: 'mutation_root' }
  & { insert_chats_one?: Maybe<(
    { __typename?: 'chats' }
    & Pick<Chats, 'chat_id'>
  )> }
);

export type AddUsersMutationVariables = {
  chatUsers: Array<Chat_To_User_Insert_Input>;
};


export type AddUsersMutation = (
  { __typename?: 'mutation_root' }
  & { insert_chat_to_user?: Maybe<(
    { __typename?: 'chat_to_user_mutation_response' }
    & Pick<Chat_To_User_Mutation_Response, 'affected_rows'>
  )> }
);

export type SendMessageMutationVariables = {
  chatId: Scalars['Int'];
  content: Scalars['String'];
  senderId: Scalars['String'];
};


export type SendMessageMutation = (
  { __typename?: 'mutation_root' }
  & { insert_messages?: Maybe<(
    { __typename?: 'messages_mutation_response' }
    & Pick<Messages_Mutation_Response, 'affected_rows'>
  )> }
);


export const ChatListDocument = gql`
    subscription ChatList($userId: String!) {
  chats(where: {users: {user_id: {_eq: $userId}}}, order_by: [{messages_aggregate: {max: {created_at: asc}}}]) {
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

/**
 * __useChatListSubscription__
 *
 * To run a query within a React component, call `useChatListSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatListSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatListSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useChatListSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ChatListSubscription, ChatListSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ChatListSubscription, ChatListSubscriptionVariables>(ChatListDocument, baseOptions);
      }
export type ChatListSubscriptionHookResult = ReturnType<typeof useChatListSubscription>;
export type ChatListSubscriptionResult = ApolloReactCommon.SubscriptionResult<ChatListSubscription>;
export const MessagesListDocument = gql`
    subscription MessagesList($chatId: Int!) {
  messages(where: {chat_id: {_eq: $chatId}}, order_by: [{created_at: asc}]) {
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

/**
 * __useMessagesListSubscription__
 *
 * To run a query within a React component, call `useMessagesListSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessagesListSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesListSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useMessagesListSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<MessagesListSubscription, MessagesListSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<MessagesListSubscription, MessagesListSubscriptionVariables>(MessagesListDocument, baseOptions);
      }
export type MessagesListSubscriptionHookResult = ReturnType<typeof useMessagesListSubscription>;
export type MessagesListSubscriptionResult = ApolloReactCommon.SubscriptionResult<MessagesListSubscription>;
export const UsersListDocument = gql`
    subscription UsersList($userId: String!) {
  users(where: {user_id: {_neq: $userId}}) {
    name
    user_id
  }
}
    `;

/**
 * __useUsersListSubscription__
 *
 * To run a query within a React component, call `useUsersListSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUsersListSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersListSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUsersListSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UsersListSubscription, UsersListSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UsersListSubscription, UsersListSubscriptionVariables>(UsersListDocument, baseOptions);
      }
export type UsersListSubscriptionHookResult = ReturnType<typeof useUsersListSubscription>;
export type UsersListSubscriptionResult = ApolloReactCommon.SubscriptionResult<UsersListSubscription>;
export const CreateChatDocument = gql`
    mutation CreateChat {
  insert_chats_one(object: {}) {
    chat_id
  }
}
    `;
export type CreateChatMutationFn = ApolloReactCommon.MutationFunction<CreateChatMutation, CreateChatMutationVariables>;

/**
 * __useCreateChatMutation__
 *
 * To run a mutation, you first call `useCreateChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMutation, { data, loading, error }] = useCreateChatMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateChatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateChatMutation, CreateChatMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateChatMutation, CreateChatMutationVariables>(CreateChatDocument, baseOptions);
      }
export type CreateChatMutationHookResult = ReturnType<typeof useCreateChatMutation>;
export type CreateChatMutationResult = ApolloReactCommon.MutationResult<CreateChatMutation>;
export type CreateChatMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateChatMutation, CreateChatMutationVariables>;
export const AddUsersDocument = gql`
    mutation AddUsers($chatUsers: [chat_to_user_insert_input!]!) {
  insert_chat_to_user(objects: $chatUsers) {
    affected_rows
  }
}
    `;
export type AddUsersMutationFn = ApolloReactCommon.MutationFunction<AddUsersMutation, AddUsersMutationVariables>;

/**
 * __useAddUsersMutation__
 *
 * To run a mutation, you first call `useAddUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUsersMutation, { data, loading, error }] = useAddUsersMutation({
 *   variables: {
 *      chatUsers: // value for 'chatUsers'
 *   },
 * });
 */
export function useAddUsersMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddUsersMutation, AddUsersMutationVariables>) {
        return ApolloReactHooks.useMutation<AddUsersMutation, AddUsersMutationVariables>(AddUsersDocument, baseOptions);
      }
export type AddUsersMutationHookResult = ReturnType<typeof useAddUsersMutation>;
export type AddUsersMutationResult = ApolloReactCommon.MutationResult<AddUsersMutation>;
export type AddUsersMutationOptions = ApolloReactCommon.BaseMutationOptions<AddUsersMutation, AddUsersMutationVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($chatId: Int!, $content: String!, $senderId: String!) {
  insert_messages(objects: {chat_id: $chatId, content: $content, sender_id: $senderId}) {
    affected_rows
  }
}
    `;
export type SendMessageMutationFn = ApolloReactCommon.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      content: // value for 'content'
 *      senderId: // value for 'senderId'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        return ApolloReactHooks.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, baseOptions);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = ApolloReactCommon.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Int_comparison_exp: Int_Comparison_Exp;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String_comparison_exp: String_Comparison_Exp;
  chat_to_user: ResolverTypeWrapper<Chat_To_User>;
  chat_to_user_arr_rel_insert_input: Chat_To_User_Arr_Rel_Insert_Input;
  chat_to_user_bool_exp: Chat_To_User_Bool_Exp;
  chat_to_user_constraint: Chat_To_User_Constraint;
  chat_to_user_inc_input: Chat_To_User_Inc_Input;
  chat_to_user_insert_input: Chat_To_User_Insert_Input;
  chat_to_user_mutation_response: ResolverTypeWrapper<Chat_To_User_Mutation_Response>;
  chat_to_user_obj_rel_insert_input: Chat_To_User_Obj_Rel_Insert_Input;
  chat_to_user_on_conflict: Chat_To_User_On_Conflict;
  chat_to_user_order_by: Chat_To_User_Order_By;
  chat_to_user_pk_columns_input: Chat_To_User_Pk_Columns_Input;
  chat_to_user_select_column: Chat_To_User_Select_Column;
  chat_to_user_set_input: Chat_To_User_Set_Input;
  chat_to_user_update_column: Chat_To_User_Update_Column;
  chats: ResolverTypeWrapper<Chats>;
  chats_aggregate: ResolverTypeWrapper<Chats_Aggregate>;
  chats_aggregate_fields: ResolverTypeWrapper<Chats_Aggregate_Fields>;
  chats_aggregate_order_by: Chats_Aggregate_Order_By;
  chats_arr_rel_insert_input: Chats_Arr_Rel_Insert_Input;
  chats_avg_fields: ResolverTypeWrapper<Chats_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  chats_avg_order_by: Chats_Avg_Order_By;
  chats_bool_exp: Chats_Bool_Exp;
  chats_constraint: Chats_Constraint;
  chats_inc_input: Chats_Inc_Input;
  chats_insert_input: Chats_Insert_Input;
  chats_max_fields: ResolverTypeWrapper<Chats_Max_Fields>;
  chats_max_order_by: Chats_Max_Order_By;
  chats_min_fields: ResolverTypeWrapper<Chats_Min_Fields>;
  chats_min_order_by: Chats_Min_Order_By;
  chats_mutation_response: ResolverTypeWrapper<Chats_Mutation_Response>;
  chats_obj_rel_insert_input: Chats_Obj_Rel_Insert_Input;
  chats_on_conflict: Chats_On_Conflict;
  chats_order_by: Chats_Order_By;
  chats_pk_columns_input: Chats_Pk_Columns_Input;
  chats_select_column: Chats_Select_Column;
  chats_set_input: Chats_Set_Input;
  chats_stddev_fields: ResolverTypeWrapper<Chats_Stddev_Fields>;
  chats_stddev_order_by: Chats_Stddev_Order_By;
  chats_stddev_pop_fields: ResolverTypeWrapper<Chats_Stddev_Pop_Fields>;
  chats_stddev_pop_order_by: Chats_Stddev_Pop_Order_By;
  chats_stddev_samp_fields: ResolverTypeWrapper<Chats_Stddev_Samp_Fields>;
  chats_stddev_samp_order_by: Chats_Stddev_Samp_Order_By;
  chats_sum_fields: ResolverTypeWrapper<Chats_Sum_Fields>;
  chats_sum_order_by: Chats_Sum_Order_By;
  chats_update_column: Chats_Update_Column;
  chats_var_pop_fields: ResolverTypeWrapper<Chats_Var_Pop_Fields>;
  chats_var_pop_order_by: Chats_Var_Pop_Order_By;
  chats_var_samp_fields: ResolverTypeWrapper<Chats_Var_Samp_Fields>;
  chats_var_samp_order_by: Chats_Var_Samp_Order_By;
  chats_variance_fields: ResolverTypeWrapper<Chats_Variance_Fields>;
  chats_variance_order_by: Chats_Variance_Order_By;
  messages: ResolverTypeWrapper<Messages>;
  messages_aggregate: ResolverTypeWrapper<Messages_Aggregate>;
  messages_aggregate_fields: ResolverTypeWrapper<Messages_Aggregate_Fields>;
  messages_aggregate_order_by: Messages_Aggregate_Order_By;
  messages_arr_rel_insert_input: Messages_Arr_Rel_Insert_Input;
  messages_avg_fields: ResolverTypeWrapper<Messages_Avg_Fields>;
  messages_avg_order_by: Messages_Avg_Order_By;
  messages_bool_exp: Messages_Bool_Exp;
  messages_constraint: Messages_Constraint;
  messages_inc_input: Messages_Inc_Input;
  messages_insert_input: Messages_Insert_Input;
  messages_max_fields: ResolverTypeWrapper<Messages_Max_Fields>;
  messages_max_order_by: Messages_Max_Order_By;
  messages_min_fields: ResolverTypeWrapper<Messages_Min_Fields>;
  messages_min_order_by: Messages_Min_Order_By;
  messages_mutation_response: ResolverTypeWrapper<Messages_Mutation_Response>;
  messages_obj_rel_insert_input: Messages_Obj_Rel_Insert_Input;
  messages_on_conflict: Messages_On_Conflict;
  messages_order_by: Messages_Order_By;
  messages_pk_columns_input: Messages_Pk_Columns_Input;
  messages_select_column: Messages_Select_Column;
  messages_set_input: Messages_Set_Input;
  messages_stddev_fields: ResolverTypeWrapper<Messages_Stddev_Fields>;
  messages_stddev_order_by: Messages_Stddev_Order_By;
  messages_stddev_pop_fields: ResolverTypeWrapper<Messages_Stddev_Pop_Fields>;
  messages_stddev_pop_order_by: Messages_Stddev_Pop_Order_By;
  messages_stddev_samp_fields: ResolverTypeWrapper<Messages_Stddev_Samp_Fields>;
  messages_stddev_samp_order_by: Messages_Stddev_Samp_Order_By;
  messages_sum_fields: ResolverTypeWrapper<Messages_Sum_Fields>;
  messages_sum_order_by: Messages_Sum_Order_By;
  messages_update_column: Messages_Update_Column;
  messages_var_pop_fields: ResolverTypeWrapper<Messages_Var_Pop_Fields>;
  messages_var_pop_order_by: Messages_Var_Pop_Order_By;
  messages_var_samp_fields: ResolverTypeWrapper<Messages_Var_Samp_Fields>;
  messages_var_samp_order_by: Messages_Var_Samp_Order_By;
  messages_variance_fields: ResolverTypeWrapper<Messages_Variance_Fields>;
  messages_variance_order_by: Messages_Variance_Order_By;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Int_comparison_exp: Int_Comparison_Exp;
  Int: Scalars['Int'];
  String_comparison_exp: String_Comparison_Exp;
  chat_to_user: Chat_To_User;
  chat_to_user_arr_rel_insert_input: Chat_To_User_Arr_Rel_Insert_Input;
  chat_to_user_bool_exp: Chat_To_User_Bool_Exp;
  chat_to_user_constraint: Chat_To_User_Constraint;
  chat_to_user_inc_input: Chat_To_User_Inc_Input;
  chat_to_user_insert_input: Chat_To_User_Insert_Input;
  chat_to_user_mutation_response: Chat_To_User_Mutation_Response;
  chat_to_user_obj_rel_insert_input: Chat_To_User_Obj_Rel_Insert_Input;
  chat_to_user_on_conflict: Chat_To_User_On_Conflict;
  chat_to_user_order_by: Chat_To_User_Order_By;
  chat_to_user_pk_columns_input: Chat_To_User_Pk_Columns_Input;
  chat_to_user_select_column: Chat_To_User_Select_Column;
  chat_to_user_set_input: Chat_To_User_Set_Input;
  chat_to_user_update_column: Chat_To_User_Update_Column;
  chats: Chats;
  chats_aggregate: Chats_Aggregate;
  chats_aggregate_fields: Chats_Aggregate_Fields;
  chats_aggregate_order_by: Chats_Aggregate_Order_By;
  chats_arr_rel_insert_input: Chats_Arr_Rel_Insert_Input;
  chats_avg_fields: Chats_Avg_Fields;
  Float: Scalars['Float'];
  chats_avg_order_by: Chats_Avg_Order_By;
  chats_bool_exp: Chats_Bool_Exp;
  chats_constraint: Chats_Constraint;
  chats_inc_input: Chats_Inc_Input;
  chats_insert_input: Chats_Insert_Input;
  chats_max_fields: Chats_Max_Fields;
  chats_max_order_by: Chats_Max_Order_By;
  chats_min_fields: Chats_Min_Fields;
  chats_min_order_by: Chats_Min_Order_By;
  chats_mutation_response: Chats_Mutation_Response;
  chats_obj_rel_insert_input: Chats_Obj_Rel_Insert_Input;
  chats_on_conflict: Chats_On_Conflict;
  chats_order_by: Chats_Order_By;
  chats_pk_columns_input: Chats_Pk_Columns_Input;
  chats_select_column: Chats_Select_Column;
  chats_set_input: Chats_Set_Input;
  chats_stddev_fields: Chats_Stddev_Fields;
  chats_stddev_order_by: Chats_Stddev_Order_By;
  chats_stddev_pop_fields: Chats_Stddev_Pop_Fields;
  chats_stddev_pop_order_by: Chats_Stddev_Pop_Order_By;
  chats_stddev_samp_fields: Chats_Stddev_Samp_Fields;
  chats_stddev_samp_order_by: Chats_Stddev_Samp_Order_By;
  chats_sum_fields: Chats_Sum_Fields;
  chats_sum_order_by: Chats_Sum_Order_By;
  chats_update_column: Chats_Update_Column;
  chats_var_pop_fields: Chats_Var_Pop_Fields;
  chats_var_pop_order_by: Chats_Var_Pop_Order_By;
  chats_var_samp_fields: Chats_Var_Samp_Fields;
  chats_var_samp_order_by: Chats_Var_Samp_Order_By;
  chats_variance_fields: Chats_Variance_Fields;
  chats_variance_order_by: Chats_Variance_Order_By;
  messages: Messages;
  messages_aggregate: Messages_Aggregate;
  messages_aggregate_fields: Messages_Aggregate_Fields;
  messages_aggregate_order_by: Messages_Aggregate_Order_By;
  messages_arr_rel_insert_input: Messages_Arr_Rel_Insert_Input;
  messages_avg_fields: Messages_Avg_Fields;
  messages_avg_order_by: Messages_Avg_Order_By;
  messages_bool_exp: Messages_Bool_Exp;
  messages_constraint: Messages_Constraint;
  messages_inc_input: Messages_Inc_Input;
  messages_insert_input: Messages_Insert_Input;
  messages_max_fields: Messages_Max_Fields;
  messages_max_order_by: Messages_Max_Order_By;
  messages_min_fields: Messages_Min_Fields;
  messages_min_order_by: Messages_Min_Order_By;
  messages_mutation_response: Messages_Mutation_Response;
  messages_obj_rel_insert_input: Messages_Obj_Rel_Insert_Input;
  messages_on_conflict: Messages_On_Conflict;
  messages_order_by: Messages_Order_By;
  messages_pk_columns_input: Messages_Pk_Columns_Input;
  messages_select_column: Messages_Select_Column;
  messages_set_input: Messages_Set_Input;
  messages_stddev_fields: Messages_Stddev_Fields;
  messages_stddev_order_by: Messages_Stddev_Order_By;
  messages_stddev_pop_fields: Messages_Stddev_Pop_Fields;
  messages_stddev_pop_order_by: Messages_Stddev_Pop_Order_By;
  messages_stddev_samp_fields: Messages_Stddev_Samp_Fields;
  messages_stddev_samp_order_by: Messages_Stddev_Samp_Order_By;
  messages_sum_fields: Messages_Sum_Fields;
  messages_sum_order_by: Messages_Sum_Order_By;
  messages_update_column: Messages_Update_Column;
  messages_var_pop_fields: Messages_Var_Pop_Fields;
  messages_var_pop_order_by: Messages_Var_Pop_Order_By;
  messages_var_samp_fields: Messages_Var_Samp_Fields;
  messages_var_samp_order_by: Messages_Var_Samp_Order_By;
  messages_variance_fields: Messages_Variance_Fields;
  messages_variance_order_by: Messages_Variance_Order_By;
  mutation_root: {};
  order_by: Order_By;
  query_root: {};
  subscription_root: {};
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: Users_Min_Fields;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
};

export type Chat_To_UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_to_user'] = ResolversParentTypes['chat_to_user']> = {
  chat?: Resolver<ResolversTypes['chats'], ParentType, ContextType>;
  chat_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chat_To_User_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['chat_to_user_mutation_response'] = ResolversParentTypes['chat_to_user_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['chat_to_user']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ChatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats'] = ResolversParentTypes['chats']> = {
  chat_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chat_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  is_group?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<ChatsMessagesArgs, never>>;
  messages_aggregate?: Resolver<ResolversTypes['messages_aggregate'], ParentType, ContextType, RequireFields<ChatsMessages_AggregateArgs, never>>;
  users?: Resolver<Array<ResolversTypes['chat_to_user']>, ParentType, ContextType, RequireFields<ChatsUsersArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_aggregate'] = ResolversParentTypes['chats_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['chats_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['chats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_aggregate_fields'] = ResolversParentTypes['chats_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['chats_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Chats_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['chats_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['chats_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['chats_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['chats_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['chats_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['chats_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['chats_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['chats_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['chats_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_avg_fields'] = ResolversParentTypes['chats_avg_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_max_fields'] = ResolversParentTypes['chats_max_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chat_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_min_fields'] = ResolversParentTypes['chats_min_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  chat_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_mutation_response'] = ResolversParentTypes['chats_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['chats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_stddev_fields'] = ResolversParentTypes['chats_stddev_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_stddev_pop_fields'] = ResolversParentTypes['chats_stddev_pop_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_stddev_samp_fields'] = ResolversParentTypes['chats_stddev_samp_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_sum_fields'] = ResolversParentTypes['chats_sum_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_var_pop_fields'] = ResolversParentTypes['chats_var_pop_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_var_samp_fields'] = ResolversParentTypes['chats_var_samp_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Chats_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['chats_variance_fields'] = ResolversParentTypes['chats_variance_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages'] = ResolversParentTypes['messages']> = {
  chat?: Resolver<ResolversTypes['chats'], ParentType, ContextType>;
  chat_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  mid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sender_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_aggregate'] = ResolversParentTypes['messages_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['messages_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_aggregate_fields'] = ResolversParentTypes['messages_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['messages_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Messages_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['messages_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['messages_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['messages_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['messages_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['messages_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['messages_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['messages_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['messages_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['messages_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_avg_fields'] = ResolversParentTypes['messages_avg_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_max_fields'] = ResolversParentTypes['messages_max_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  mid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sender_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_min_fields'] = ResolversParentTypes['messages_min_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  mid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sender_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_mutation_response'] = ResolversParentTypes['messages_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_stddev_fields'] = ResolversParentTypes['messages_stddev_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_stddev_pop_fields'] = ResolversParentTypes['messages_stddev_pop_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_stddev_samp_fields'] = ResolversParentTypes['messages_stddev_samp_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_sum_fields'] = ResolversParentTypes['messages_sum_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_var_pop_fields'] = ResolversParentTypes['messages_var_pop_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_var_samp_fields'] = ResolversParentTypes['messages_var_samp_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Messages_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['messages_variance_fields'] = ResolversParentTypes['messages_variance_fields']> = {
  chat_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mid?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_chat_to_user?: Resolver<Maybe<ResolversTypes['chat_to_user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Chat_To_UserArgs, 'where'>>;
  delete_chat_to_user_by_pk?: Resolver<Maybe<ResolversTypes['chat_to_user']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Chat_To_User_By_PkArgs, 'chat_id' | 'user_id'>>;
  delete_chats?: Resolver<Maybe<ResolversTypes['chats_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_ChatsArgs, 'where'>>;
  delete_chats_by_pk?: Resolver<Maybe<ResolversTypes['chats']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Chats_By_PkArgs, 'chat_id'>>;
  delete_messages?: Resolver<Maybe<ResolversTypes['messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_MessagesArgs, 'where'>>;
  delete_messages_by_pk?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Messages_By_PkArgs, 'mid'>>;
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UsersArgs, 'where'>>;
  delete_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Users_By_PkArgs, 'user_id'>>;
  insert_chat_to_user?: Resolver<Maybe<ResolversTypes['chat_to_user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Chat_To_UserArgs, 'objects'>>;
  insert_chat_to_user_one?: Resolver<Maybe<ResolversTypes['chat_to_user']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Chat_To_User_OneArgs, 'object'>>;
  insert_chats?: Resolver<Maybe<ResolversTypes['chats_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_ChatsArgs, 'objects'>>;
  insert_chats_one?: Resolver<Maybe<ResolversTypes['chats']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Chats_OneArgs, 'object'>>;
  insert_messages?: Resolver<Maybe<ResolversTypes['messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_MessagesArgs, 'objects'>>;
  insert_messages_one?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Messages_OneArgs, 'object'>>;
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UsersArgs, 'objects'>>;
  insert_users_one?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Users_OneArgs, 'object'>>;
  update_chat_to_user?: Resolver<Maybe<ResolversTypes['chat_to_user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Chat_To_UserArgs, 'where'>>;
  update_chat_to_user_by_pk?: Resolver<Maybe<ResolversTypes['chat_to_user']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Chat_To_User_By_PkArgs, 'pk_columns'>>;
  update_chats?: Resolver<Maybe<ResolversTypes['chats_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_ChatsArgs, 'where'>>;
  update_chats_by_pk?: Resolver<Maybe<ResolversTypes['chats']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Chats_By_PkArgs, 'pk_columns'>>;
  update_messages?: Resolver<Maybe<ResolversTypes['messages_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_MessagesArgs, 'where'>>;
  update_messages_by_pk?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Messages_By_PkArgs, 'pk_columns'>>;
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UsersArgs, 'where'>>;
  update_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Users_By_PkArgs, 'pk_columns'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  chat_to_user?: Resolver<Array<ResolversTypes['chat_to_user']>, ParentType, ContextType, RequireFields<Query_RootChat_To_UserArgs, never>>;
  chat_to_user_by_pk?: Resolver<Maybe<ResolversTypes['chat_to_user']>, ParentType, ContextType, RequireFields<Query_RootChat_To_User_By_PkArgs, 'chat_id' | 'user_id'>>;
  chats?: Resolver<Array<ResolversTypes['chats']>, ParentType, ContextType, RequireFields<Query_RootChatsArgs, never>>;
  chats_aggregate?: Resolver<ResolversTypes['chats_aggregate'], ParentType, ContextType, RequireFields<Query_RootChats_AggregateArgs, never>>;
  chats_by_pk?: Resolver<Maybe<ResolversTypes['chats']>, ParentType, ContextType, RequireFields<Query_RootChats_By_PkArgs, 'chat_id'>>;
  messages?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Query_RootMessagesArgs, never>>;
  messages_aggregate?: Resolver<ResolversTypes['messages_aggregate'], ParentType, ContextType, RequireFields<Query_RootMessages_AggregateArgs, never>>;
  messages_by_pk?: Resolver<Maybe<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<Query_RootMessages_By_PkArgs, 'mid'>>;
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsersArgs, never>>;
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, RequireFields<Query_RootUsers_AggregateArgs, never>>;
  users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsers_By_PkArgs, 'user_id'>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  chat_to_user?: SubscriptionResolver<Array<ResolversTypes['chat_to_user']>, "chat_to_user", ParentType, ContextType, RequireFields<Subscription_RootChat_To_UserArgs, never>>;
  chat_to_user_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['chat_to_user']>, "chat_to_user_by_pk", ParentType, ContextType, RequireFields<Subscription_RootChat_To_User_By_PkArgs, 'chat_id' | 'user_id'>>;
  chats?: SubscriptionResolver<Array<ResolversTypes['chats']>, "chats", ParentType, ContextType, RequireFields<Subscription_RootChatsArgs, never>>;
  chats_aggregate?: SubscriptionResolver<ResolversTypes['chats_aggregate'], "chats_aggregate", ParentType, ContextType, RequireFields<Subscription_RootChats_AggregateArgs, never>>;
  chats_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['chats']>, "chats_by_pk", ParentType, ContextType, RequireFields<Subscription_RootChats_By_PkArgs, 'chat_id'>>;
  messages?: SubscriptionResolver<Array<ResolversTypes['messages']>, "messages", ParentType, ContextType, RequireFields<Subscription_RootMessagesArgs, never>>;
  messages_aggregate?: SubscriptionResolver<ResolversTypes['messages_aggregate'], "messages_aggregate", ParentType, ContextType, RequireFields<Subscription_RootMessages_AggregateArgs, never>>;
  messages_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['messages']>, "messages_by_pk", ParentType, ContextType, RequireFields<Subscription_RootMessages_By_PkArgs, 'mid'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, RequireFields<Subscription_RootUsersArgs, never>>;
  users_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "users_aggregate", ParentType, ContextType, RequireFields<Subscription_RootUsers_AggregateArgs, never>>;
  users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['users']>, "users_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUsers_By_PkArgs, 'user_id'>>;
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = {
  chats?: Resolver<Array<ResolversTypes['chat_to_user']>, ParentType, ContextType, RequireFields<UsersChatsArgs, never>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_seen?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['messages']>, ParentType, ContextType, RequireFields<UsersMessagesArgs, never>>;
  messages_aggregate?: Resolver<ResolversTypes['messages_aggregate'], ParentType, ContextType, RequireFields<UsersMessages_AggregateArgs, never>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<Users_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_seen?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_seen?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  chat_to_user?: Chat_To_UserResolvers<ContextType>;
  chat_to_user_mutation_response?: Chat_To_User_Mutation_ResponseResolvers<ContextType>;
  chats?: ChatsResolvers<ContextType>;
  chats_aggregate?: Chats_AggregateResolvers<ContextType>;
  chats_aggregate_fields?: Chats_Aggregate_FieldsResolvers<ContextType>;
  chats_avg_fields?: Chats_Avg_FieldsResolvers<ContextType>;
  chats_max_fields?: Chats_Max_FieldsResolvers<ContextType>;
  chats_min_fields?: Chats_Min_FieldsResolvers<ContextType>;
  chats_mutation_response?: Chats_Mutation_ResponseResolvers<ContextType>;
  chats_stddev_fields?: Chats_Stddev_FieldsResolvers<ContextType>;
  chats_stddev_pop_fields?: Chats_Stddev_Pop_FieldsResolvers<ContextType>;
  chats_stddev_samp_fields?: Chats_Stddev_Samp_FieldsResolvers<ContextType>;
  chats_sum_fields?: Chats_Sum_FieldsResolvers<ContextType>;
  chats_var_pop_fields?: Chats_Var_Pop_FieldsResolvers<ContextType>;
  chats_var_samp_fields?: Chats_Var_Samp_FieldsResolvers<ContextType>;
  chats_variance_fields?: Chats_Variance_FieldsResolvers<ContextType>;
  messages?: MessagesResolvers<ContextType>;
  messages_aggregate?: Messages_AggregateResolvers<ContextType>;
  messages_aggregate_fields?: Messages_Aggregate_FieldsResolvers<ContextType>;
  messages_avg_fields?: Messages_Avg_FieldsResolvers<ContextType>;
  messages_max_fields?: Messages_Max_FieldsResolvers<ContextType>;
  messages_min_fields?: Messages_Min_FieldsResolvers<ContextType>;
  messages_mutation_response?: Messages_Mutation_ResponseResolvers<ContextType>;
  messages_stddev_fields?: Messages_Stddev_FieldsResolvers<ContextType>;
  messages_stddev_pop_fields?: Messages_Stddev_Pop_FieldsResolvers<ContextType>;
  messages_stddev_samp_fields?: Messages_Stddev_Samp_FieldsResolvers<ContextType>;
  messages_sum_fields?: Messages_Sum_FieldsResolvers<ContextType>;
  messages_var_pop_fields?: Messages_Var_Pop_FieldsResolvers<ContextType>;
  messages_var_samp_fields?: Messages_Var_Samp_FieldsResolvers<ContextType>;
  messages_variance_fields?: Messages_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
