# Rare - A Medium Clone

> A reimagining of [Medium](https://medium.com/).

- [Rare - A Medium Clone](#rare---a-medium-clone)
  - [Overview](#overview)
  - [Front-end](#front-end)
    - [JavaScript, HTML, CSS](#javascript-html-css)
    - [Pug](#pug)
    - [Markdown](#markdown)
  - [Back-end](#back-end)
    - [Node and Express](#node-and-express)
    - [Sequelize](#sequelize)
  - [Conclusion](#conclusion)

## Overview

Rare, [found here](https://group-project-rare.herokuapp.com/), is a social journalism site that allows users to publish and share articles on any topic they find relevant.

Social journalism is about empowering users by giving them the tools (and the audience) to make their stories expressive and impactful. And finding a site that does that well is...well, Rare.

That's where we come in. Rare gives users access to a [Markdown](https://www.markdownguide.org/) editor that gives them the freedom to choose what they want to say and how they want to say it. Story tags, likes, and comments also give users an opportunity to engage with the stories being told on the platform. Lastly, Rare presents articles openly and honestly based on each users own personal preferences. We don't have our own agenda (or some algorithim's) baked into what articles are shown to our users.

## Front-end
Rare uses plain JavaScript with HTML, CSS, Pug, and Markdown for handling text.

### JavaScript, HTML, CSS


### Pug
Pug is an HTML template engine that allowed us to create a re-usable HTML-like base to then edit with JavaScript.

```
  //story.pug
  .story-container.text-style2
      .story-title.text-style1.story-container-text
      .story-subheader.story-container-text
```

```js
  //stories.js
        const { story, readTime, parsedBody, storyLikes } = await res.json();
        document.querySelector(".story-title").innerHTML = story.title;
        document.querySelector(".story-subheader").innerHTML = story.subHeading;
```

### Markdown

## Back-end

### Node and Express

### Sequelize

## Conclusion
