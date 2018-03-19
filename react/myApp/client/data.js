class Posts {
    constructor(id,title,intro){
        this.id =id;
        this.title = title;
        this.intro = intro;
    }
}
const createPost = (arr) =>{
    const newArr = arr.map(element =>{
        return new Posts(element.id,element.title,element.intro);
    })
    return newArr;
}

export {Posts,createPost};