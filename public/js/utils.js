export function generateArticleHtml(articleArr) {
    let articlesHTML = "";
    articleArr.forEach(articleObj => {
        articlesHTML += `<div class="article-container text-style2"><div class="article-title text-style1">${articleObj.title}</div><div class="article-subheader">${articleObj.subHeading}</div>
        <div class="article-author">${articleObj.User.firstName} ${articleObj.User.lastName} in ${articleObj.StoryCategory.categoryName}</div><div class="article-date">${new Date(articleObj.createdAt.replace("T", " ")).toDateString()}</div>
        <div class="article-time">5 min read</div><div class="article-likes">Likes</div></div>`
    });

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
            "Something went wrong. Please check your internet connection and try again!"
        );
    }
};
