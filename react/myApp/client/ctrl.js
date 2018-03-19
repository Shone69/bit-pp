const myUrl = " http://127.0.0.1:3000";
import { Posts, createPost } from "./data.js";
import { displayPosts } from "./ui.js"
// import { log } from "util";


export const init = () =>{
    const getData = fetch(myUrl)
    .then( response => {
        return response.json();
    })
    .then(myJsonList => {
       return createPost(myJsonList);
      })
      .then(listToDisplay => {
       return displayPosts(listToDisplay);

      })
      .catch(function (error) {
        throw new Error("Something went wrong");
    })

}
