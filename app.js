let form = document.getElementById("form");
let input = document.querySelector("#input");
let msg = document.querySelector("#msg");
let post = document.querySelector("#posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post can't be blank";
    console.log("failure"); //this is work when our form is empty
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  post.innerHTML += ` <div>
  <p>${data.text}</p>
  <span class="options">
    <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
    <i onClick="deletePost(this)" class="fa-solid fa-trash"></i>
  </span>
</div> `;
  input.value = "";
  data.text;
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
