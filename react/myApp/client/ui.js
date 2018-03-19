const $showPostContainer = $(".container")

const displayPosts = posts => {
    posts.forEach(element => {
        const $postBlock = $(`
            <div class="row">
                <div class="col-12">
                    <div class="card blue-grey darken-1">
                       <div class="card-content white-text">
                            <span class="card-title">${element.title}</span>
                            <p>${element.intro}</p>
                    
                       </div>
                    </div>
                </div>
            </div>
      `)
      $showPostContainer.append($postBlock);

    });
}
export {displayPosts};