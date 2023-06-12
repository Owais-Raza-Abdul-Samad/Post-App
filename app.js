var createPost = document.getElementById("create-post");
var postModal = document.getElementById("post-modal");
var removeModalBtn = document.getElementById("remove-modal-btn");
var backgroundsBtn = document.getElementById("bg-changer");
var moreBackgrounds = document.getElementById("more-bg-options");
var postPreview = document.getElementById("post-preview");

createPost.addEventListener("click", function () {
    postModal.style.display = "flex";
});

removeModalBtn.addEventListener("click", function () {
    postModal.style.display = "none";
    moreBackgrounds.style.display = "none";
    postPreview.style.backgroundImage = "none"
    postPreview.value = "";
});

backgroundsBtn.addEventListener("click", function () {
    moreBackgrounds.style.display = "flex";
    // console.log(postPreview.style.backgroundImage)
});

var background1 = document.getElementById("bg-1").addEventListener("click", function () {
    postPreview.style.backgroundImage = "none"
    postPreview.style.color = "#000"
})
var background2 = document.getElementById("bg-2").addEventListener("click", function () {
    postPreview.style.backgroundImage = "url(images/background-2.jpg)"
    postPreview.style.backgroundSize = "cover"
    postPreview.style.color = "#000"
})
var background3 = document.getElementById("bg-3").addEventListener("click", function () {
    postPreview.style.backgroundImage = "url(images/background-3.jpg)"
    postPreview.style.backgroundSize = "cover"
    postPreview.style.color = "#000"
})
var background4 = document.getElementById("bg-4").addEventListener("click", function () {
    postPreview.style.backgroundImage = "url(images/background-4.jpg)"
    postPreview.style.backgroundSize = "cover"
    postPreview.style.color = "#000"
})
var background5 = document.getElementById("bg-5").addEventListener("click", function () {
    postPreview.style.backgroundImage = "url(images/background-5.jpg)"
    postPreview.style.backgroundSize = "cover"
    postPreview.style.color = "#fff"
})
var background6 = document.getElementById("bg-6").addEventListener("click", function () {
    postPreview.style.backgroundImage = "url(images/background-6.jpg)"
    postPreview.style.backgroundSize = "cover"
    postPreview.style.color = "#000"
})
var background7 = document.getElementById("bg-7").addEventListener("click", function () {
    postPreview.style.backgroundImage = "url(images/background-7.jpg)"
    postPreview.style.backgroundSize = "cover"
    postPreview.style.color = "#000"
})
var background8 = document.getElementById("bg-8").addEventListener("click", function () {
    postPreview.style.backgroundImage = "url(images/background-8.jpg)"
    postPreview.style.backgroundSize = "cover"
    postPreview.style.color = "#fff"
})
var background9 = document.getElementById("bg-9").addEventListener("click", function () {
    postPreview.style.backgroundImage = "url(images/background-9.jpg)"
    postPreview.style.backgroundSize = "cover"
    postPreview.style.color = "#000"
})
var background10 = document.getElementById("bg-10").addEventListener("click", function () {
    postPreview.style.backgroundImage = "url(images/background-10.jpg)"
    postPreview.style.backgroundSize = "cover"
    postPreview.style.color = "#000"
})

var post = document.getElementById("post");
var postArea = document.getElementById("posting-area");

function deletePost() {
    event.target.closest("#post").remove()
};

var arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var postDate = new Date();
var time = postDate.toLocaleTimeString().split("");
time.splice(4, 3)
var date = arr[postDate.getMonth()] + " " + postDate.getDate() + " at " + time.join("");

var postItBtn = document.getElementById("post-it-btn");
postItBtn.addEventListener("click", addPost);
function addPost() {
    var postBackground = postPreview.style.backgroundImage;
    if (postPreview.value.trim() === "") {
        swal({
            icon: 'error',
            title: 'Enter some text',
          })
    } else {
        postArea.innerHTML = `
    <div class="card post" id="post">
    <div class="card-body">
      <div class="post-header">
        <span>
          <div class="icons icon-profile" title="Your Profile"></div>
        </span>
        <span>
          <h6>Owais raza</h6>
          <p><span id="post-time">${date}</span> . <i class="fa-solid fa-earth-asia"></i></p>
        </span>
        <button class="delete-post" onclick="deletePost()" title="Delete post"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
    <div class="post-image-section" disabled>
        <p>${postPreview.value}</p>
    </div>
    <div class="card-footer post-footer">
      <button><i class="fa-regular fa-thumbs-up"></i>&nbsp; Like</button>
      <button><i class="fa-regular fa-comment-dots"></i>&nbsp; Comment</button>
      <button><i class="fa-solid fa-retweet"></i>&nbsp; Repost</button>
      <button><i class="fa-regular fa-share-from-square"></i>&nbsp; Share</button>
    </div>
  </div>
    ` + postArea.innerHTML;

        var postImage = document.querySelector(".post-image-section");
        postImage.style.backgroundImage = postBackground;
        postImage.style.color = postPreview.style.color;

        postModal.style.display = "none";
        moreBackgrounds.style.display = "none";
        postPreview.style.backgroundImage = "none"
        postPreview.value = "";
    }
}