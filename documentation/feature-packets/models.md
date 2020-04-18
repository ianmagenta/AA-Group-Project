# Models

## Model List

- User
- Story
- Comment
- Story Category
- Story Like
- Comment Like

### Users Table

| column    | type    | max length | default | constraints      |
| --------- | ------- | ---------- | ------- | ---------------- |
| userName  | varchar | 20         | no      | not null, unique |
| password  | binary  | none       | no      | not null         |
| firstName | varchar | 50         | no      | not null         |
| lastName  | varchar | 50         | no      | not null         |
| email     | varchar | 50         | no      | not null, unique |
| bio       | text    | none       | no      | none             |
| isAdmin   | boolean | none       | false   | not null         |

### Stories

| column     | type    | max length | default | constraints                                |
| ---------- | ------- | ---------- | ------- | ------------------------------------------ |
| title      | varchar | 500        | no      | not null                                   |
| subHeading | varchar | 500        | no      | none                                       |
| body       | text    | none       | no      | not null                                   |
| userId     | integer | none       | no      | not null, references: (Users.Id)           |
| categoryId | integer | none       | no      | not null, references: (StoryCategories.Id) |

### Comments

| column  | type    | max length | default | constraints                        |
| ------- | ------- | ---------- | ------- | ---------------------------------- |
| storyId | integer | none       | no      | not null, references: (Stories.Id) |
| userId  | integer | none       | no      | not null, references: (Users.Id)   |
| body    | text    | none       | no      | not null                           |

### Story Categories

| column       | type    | max length | default | constraints |
| ------------ | ------- | ---------- | ------- | ----------- |
| categoryName | varchar | 25         | no      | not null    |

### Story Likes

| column  | type    | max length | default | constraints                       |
| ------- | ------- | ---------- | ------- | --------------------------------- |
| userId  | integer | none       | no      | not null references: (Users.Id)   |
| storyId | integer | none       | no      | not null references: (Stories.Id) |

### Comment Likes

| column    | type    | max length | default | constraints                        |
| --------- | ------- | ---------- | ------- | ---------------------------------- |
| userId    | integer | none       | no      | not null references: (Users.Id)    |
| commentId | integer | none       | no      | not null references: (Comments.Id) |
<!--
### Images

| column | type    | max length | default | constraints |
| ------ | ------- | ---------- | ------- | ----------- |
| name   | varchar | 25         | no      | not null    |
| image  | bytea   | none       | no      | not null    |
 -->
