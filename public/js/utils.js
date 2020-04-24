export function generateArticleHtml(articleArr, readTimeArr, LikeArr) {
    let articlesHTML = "";
    if (readTimeArr) {
        let readTimes = [];
        readTimeArr.map(obj => {
            readTimes.push(obj.text);
        });

        let readCount = 0;

        articleArr.forEach((articleObj, i) => {
            articlesHTML += `<div class="article-container text-style2"><a class="article-title text-style1" href="/stories/${articleObj.id}">${articleObj.title}</a><div class="article-subheader">${articleObj.subHeading}</div>
            <div class="article-author">${articleObj.User.firstName} ${articleObj.User.lastName} in ${articleObj.StoryCategory.categoryName}</div><div class="article-date">${new Date(articleObj.createdAt.replace("T", " ")).toDateString()}</div>
            <div class="article-time">${readTimes[readCount]}</div><div class="article-likes">${LikeArr[i].dataValues.Likes}</div></div>`;
            readCount++;
        });
    } else {

    }

    return articlesHTML;
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
        alert(
            'Something went wrong. Please check your internet connection and try again!'
        );
    }
};
