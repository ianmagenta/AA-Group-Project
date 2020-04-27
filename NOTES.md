# Review notes

These are just some feedback items that I see for the project. Thank you for
giving me the chance to review it.

## Overall

I like a good wordplay. I didn't know what _Rare_ meant until I read the project
description. As a new version of Medium meant to highlight social journalism,
it's an excellent choice.

The sign-up process was smooth. I configured my application wrong and got an
error. The error output in the console was informative. After fixing the error,
I rebuilt the database and was able to register. The fact that there are unique
constraints on the user name and the email are nice.

Both login and logout performed as expected.

The Markdown editor is very pleasing to use. An unfortunate side effect of the
CSS is that _all_ links are rendered in white. That means the links that I
include in my stories and comments are virtually invisible. :-D

The active linking between stories and categories is really nice. I am a fan
of hypermedia and you have it all over the place. Thank you.

The seed data is _really_ funny in places. Herman Melville commenting on Mary
Shelley's story is particularly grand. Also, _bravo!_ for using content that is
in the public domain.

The _Like_ buttons are very nice, both for the comments and the stories. Your
use of the join table as an entity shows that you have really embraced
relational database design. I like that you insure that I have not checked it
already when presented in the view. Your proper use of RESTful endpoints with
these interactions is a delight to behold, POST vs. DELETE, creating and
removing. Nicely done. The API is also very nice.

I want to write that I _enjoyed_ using your app. Thanks for building it.

## Source files

Here is some stuff about the source files.

### README.md

I _really_ like this write-up. Thank you for including it. The link to the live
site does not work, so I ended up installing it locally to test it.

### auth.js and app.js

These are both well organized and maintainable. That's saying something for the
**app.js** because you embraced RESTful and got it right. I am going to do one
nitpick about the consistency of the naming of your routes. You have
"categoryStories" and "storycategories" for the two compound words routes. These
should be standardized: either use lower case for both, or use camel case for
both. Or, a third option, use sword-case for both: "category-stories" and
"story-categories". It's a nice alternative and improves readability.

### Model files

These are clear and concise. I understand the relationships at a glance. Good
work, here. In areas where you actually define associations, I would remove the
boilerplate comment "// associations can be defined here" as can be found in
**models/user.js**.

### Front-end JavaScript

These all are nicely commented where they need to be, variables are well-named,
indentation is consistent, and I can parse almost everything easily with my
Brain JavaScript parser.

I do like my line lengths to be less than 120 characters, if possible, and often
try for 80 characters in length (or less), like this README.  Code like this:

```js
const res = await fetch(`${api}user/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
```

is usually better maintained (and understood) given narrower line lengths.

```js
const res = await fetch(
  `${api}user/${id}`,
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}`
    }
  }
);
```

It's also easier to add new headers, if it's laid out that way, something that
you may need to do as the complexity of your application grows.

### Pug files

Overall, your Pug files are dense like a good brownie, tasty and a delight to
consume. Thanks for that. Here are some things to consider for your next
commits.

Once you had things working (or even before that), removing the commented out
lines of Pug that was there for layout testing (and perhaps styling) would
really help with the long-term maintainability. It's also something I would
clean up before showcasing to an audience wider than the classroom. Your
**index.pug** would go from 84 lines to 16 lines, for example.

#### Idiomatic Pug

Using idiomatic Pug, instead of lines like this

```pug
a.search-button.text-style2(href='/search' title='Search stories and users') <i class="fas fa-search"></i>
```

you should either indent it

```pug
a.search-button.text-style2(href='/search' title='Search stories and users')
  i.fas.fa-search
```

or you should colon it

```pug
a.search-button.text-style2(href='/search' title='Search stories and users'): i.fas.fa-search
```

Personally, I like the former option because I like narrower lines.

#### HTML vs. Pug, two spaces vs. four

Some of your files have a hard time deciding how they want their content
declared and organized. Sometimes, it's with an HTML tag. Sometimes, it's with
Pug. Both work, of course, but that's not the point. You should try to remain
consistent with your choice. (And, your choice should be Pug. :-)

Also, there are some spots where the spacing gets a little wonky. Pug is
forgiving, that way. However, this is good training for Python which is _not_
forgiving in its white space parsing. Go back and make things nice. You can
use a Visual Studio Code plugin like "Beautify Pug" to make this a snap.

#### Proper indentation in layout.pug

Your layout file has the content block and script tags at the same level of
indentation as the HTML tag. This produces invalid HTML.

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <title></title>
      <link rel="shortcut icon" href="/assets/rarefavicon.png" type="image/x-icon"/>
      <link rel="stylesheet" href="/style.css">
      <script src="https://kit.fontawesome.com/957ab26b61.js" crossorigin="anonymous"></script>
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Raleway&display=swap" rel="stylesheet">
      <link rel="api" href="http://localhost:8080/">
   </head>
   <body>
      <div class="top-bar">
         <div class="inner-top-bar">
            <a class="rare-logo text-style1" href="/">Rare</a><a class="search-button text-style2" href="/search" title="Search stories and users"><i class="fas fa-search"></i></a><a class="new-story-button text-style2" href="/stories/new" title="Write a new story"><i class="fas fa-pencil-alt"></i></a>
            <div class="sign-in-top text-style2">Sign in</div>
            <div class="register-top text-style2">Register</div>
         </div>
      </div>
   </body>
</html>

<!-- here's that script tag -->
<script type="module" src="/js/layout.js"></script>

<!-- here's the stuff from block content--->
<div class="bio-container text-style2">
   <div class="username">Username here</div>
   <div class="member-since">Rare member since Jan 2020</div>
   <div class="bio">User bio here</div>
</div>
<div class="profile-container text-style2">
   <div class="articles-container">
      <div class="heading-text text-style1">Authored Stories</div>
      <div class="article-container">
         <div class="article-title text-style1">Title</div>
         <div class="article-subheader">Subheader</div>
         <div class="article-author">Author in Category</div>
         <div class="article-date">Jan 1, 2020</div>
         <div class="article-time">5 min read</div>
         <div class="article-likes">Likes</div>
      </div>
   </div>
   <div class="likes-container">
      <div class="heading-text text-style1">Liked Stories</div>
      <div class="article-container">
         <div class="article-title">Title</div>
         <div class="article-author">Author</div>
         <div class="article-date">Jan 1, 2020</div>
      </div>
   </div>
</div>
<script type="module" src="/js/profile.js"></script>
```

See how the `script` and stuff from `block content` are _outside_ the HTML tags?
That's "bad". The browser forgives you and renders it correctly. However, other
programmers may not be so forgiving when they come to look at your code. As a
matter of fact, a lot of them (the hiring ones), are pretty darn picky about the
little things. (You should hear me rant about some resumes I receive.)

### Routes

Again, your JavaScript is near impeccable. Well done. All of your queries are
clear and understandable. Your route files are well organized. I would work on
this code base with little-to-no complaint.

I'd like to "talk" with you about the security on your routes. There is a subtle
flaw in your security in `restoreUser`. This code

```js
if (!token) {
  return next();
}
```

reads that, if a token is not present, then there is _no_ security. This is
_bad_. It needs to do something punitive, like set a 401 and end the request
or... something. This little snippet of code allows me to use my API client
(Insomnia, if you're interested, because I despise Postman :-) to hit _any_
endpoint without a Bearer token and successfully make that call.
