export function generateArticleHtml(articleArr, readTimeArr, LikeArr) {
    console.log(articleArr);
    let articlesHTML = "";

    if (articleArr.length < 1) {
        articlesHTML = `<div class="article-container text-style2"><a class="article-title">No stories found.</div>`;
        return articlesHTML;
    }

    if (readTimeArr) {
        let readTimes = [];
        readTimeArr.forEach(obj => {
            readTimes.push(obj.text);
        });
        let readCount = 0;

        articleArr.forEach((articleObj, i) => {
            console.log(i, LikeArr[i]);
            articlesHTML += `<div class="article-container text-style2"><a class="article-title text-style1" href="/stories/${articleObj.id}">${articleObj.title}</a><div class="article-subheader">${articleObj.subHeading}</div>
            <div class="article-author">${articleObj.User.firstName} ${articleObj.User.lastName} in ${articleObj.StoryCategory.categoryName}</div><div class="article-date">${new Date(articleObj.createdAt.replace("T", " ")).toDateString()}</div>
            <div class="article-time">${readTimes[readCount]}`;
            // </div><div class="article-likes">${LikeArr[i].Likes}</div></div>
            readCount++;
        });
    } else {

    }

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

export const handleErrors = async (err) => {
    if (err.status >= 400 && err.status < 600) {
        const errorJSON = await err.json();
        const errorsContainer = document.querySelector(".errors-container");
        let errorsHtml = [
            `
        <div class="alert alert-danger">
            Something went wrong. Please try again.
        </div>
      `,
        ];
        const { errors } = errorJSON;
        if (errors && Array.isArray(errors)) {
            errorsHtml = errors.map(
                (message) => `
          <div class="alert alert-danger">
              ${message}
          </div>
        `
            );
        }
        errorsContainer.innerHTML = errorsHtml.join("");
    } else {
        console.log(err);
        alert(
            'Something went wrong. Please check your internet connection and try again!'
        );
    }
};
