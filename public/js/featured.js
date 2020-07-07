import { handleErrors, api } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
    console.log(api)
    // const userId = localStorage.getItem("RARE_USER_ID");
    //   if (!userId) {
    //     window.location.href = "/splash";
    //     return;
    //   }
    try {
        const res = await fetch(`${api}story`,
            {
                headers:
                {
                    Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}`
                }
            }
        );
        // if (!res.ok) {
        //     window.location.href = "/splash";
        //     return;
        // }
        const data = await res.json();
        const { stories } = data;

        let featStory = ''
        console.log(featStory)
        // Featured story
        for (let i = 0; i < stories.length; i++) {
            if (stories[i].isFeatured) {
                featStory = stories[i];
                document.querySelector(".feature-container").innerHTML = featStory.body;
                stories.splice(i, i)
                break
            }
        }
    } catch (e) {
        // handleErrors(e);
    }
    //console.log(featStory.body)

})
