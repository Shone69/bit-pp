// import { log } from "util";

const {Posts} = require("./post.js");
const loremIpsum = require('lorem-ipsum');

const getTitle = () => loremIpsum({
    count: 3,
    units: "words"
});
const getIntro = () =>
    loremIpsum({
        count: 2,
        units: "sentences"
    });


const getPosts = (count) => {
    let postList = [];
    for (let i = 0; i < count; i++) {
        const title = getTitle();
        const intro = getIntro();
        const id = i;
        const currentPost = new Posts(id, title, intro);
       
        postList.push(currentPost);
     
    }
    return postList;
}




module.exports = {getPosts}