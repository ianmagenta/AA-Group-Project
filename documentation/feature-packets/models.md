# Models

## Table List
- Users
- Stories
- Comments
- Categories of stories
- Articles Liked by User

### Users Table
- userName : string
- password : string
- firstName : string
- lastName : string
- isAuthor : boolean
- bio : text
- isAdmin : boolean

### Stories
- title : string
- subHeading : string
- story : text
- userId : int foreignKey (User)
- likes : integer
- date : read from updatedAt
- categoryId : int foreignKey (StoryCategories)

### Comments
- storyId : int foreignKey (Stories)
- userId : int foreignKey (User)
- comment : text
- likes : int
- date : read from updatedAt

### Story Categories
- category : string

### Draft: Articles/Comments Liked
- userId : int foreignKey (Users)
- storiesId/commentId : int foreignKey (Stories, Comments)
- IsStory(?)

### Articles Liked
- userId : int foreignKey (Users)
- storiesId : int foreignKey (Stories)

### Comments Liked
- userId : int foreignKey (Users)
- commentId : int foreignKey (Comment)
