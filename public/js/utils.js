export function generateArticleHtml(stories) {
    let articlesHTML = "";

    if (stories.length < 1) {
        articlesHTML = `<div class="article-container text-style2"><a class="article-title">No stories found.</div>`;
        return articlesHTML;
    }

    stories.forEach((story) => {
        articlesHTML += `<div class="article-container text-style2"><a class="article-title text-style2" href="/stories/${story.id}">${story.title}</a><div class="article-subheader">${story.subHeading}</div>
            <div class="article-author">${story.User.firstName} ${story.User.lastName} in <a name="searchButton" class="category-italics" style="color:#000000;" href='/categoryStories/${story.StoryCategory.categoryName}'>${story.StoryCategory.categoryName}</a></div>
            <div class="article-date">${new Date(story.createdAt.replace("T", " ")).toDateString()}</div>
            <div class="article-time">${story.readTime.text}</div><div class="article-likes">Likes: ${story.storyLikes.length}</div></div>`
    });

    return articlesHTML;
}

export function generateUserHtml(users) {
    let userHTML = '';

    if (users.length < 1) {
        userHTML = `<div class="article-container text-style2"><a class="article-title">No users found.</div>`;
        return userHTML;
    }

    users.forEach(userObj => {
        userHTML += `
            <div class="user-container text-style2">
                <a class="user-fullname" href="profile/${userObj.id}">${userObj.firstName} ${userObj.lastName}</a>
                <div class="user-bio">${userObj.bio}</div>
            </div>`;
    });

    return userHTML;
}

export function generateCategoriesHTML(categories) {
    let categoriesHTML = '';
    categories.forEach(categoryObj => {
        categoriesHTML += `<div class="category-text">${categoryObj.categoryName}</div>`
    });
    return categoriesHTML;
}

export const handleErrors = async (err) => {
    if (err.status >= 400 && err.status < 600) {
        const errorJSON = await err.json();
        const errorsContainer = document.querySelector(".errors-container");
        let errorsHtml = [
            `
            <div class="alert alert-danger">
                Something went wrong.Please try again.
        </div>
            `,
        ];
        const { errors } = errorJSON;
        if (errors && Array.isArray(errors)) {
            errorsHtml = errors.map(
                (message) => `
            <div class="alert alert-danger">
                ${ message}
          </div>
            `
            );
        }
        errorsContainer.innerHTML = errorsHtml.join("");
    } else {
        console.log(err);
        console.log(
            'Something went wrong. Please check your internet connection and try again!'
        );
    }
};

export const api = document.querySelector('link[rel="api"]').href
