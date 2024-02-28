// sidebar
document.addEventListener("click", function (event) {
  const sidebar = document.querySelector("aside");
  const expandBtn = document.querySelector(".expand-btn");

  // Cek apakah yang diklik adalah di luar sidebar dan tidak pada tombol expand
  if (!sidebar.contains(event.target) && event.target !== expandBtn) {
    document.body.classList.add("collapsed");
  }
});

const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

// share
const modalDialog = document.querySelector(".copy-link-dialog");
const shareBtn = document.querySelector(".share-btn");
const closeBtn = document.querySelector(".close-btn");
const copyBtn = document.querySelector(".copy-btn");

shareBtn.addEventListener("click", () => {
  modalDialog.classList.remove("copy-link-dialog--fadeout");
  modalDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  modalDialog.classList.add("copy-link-dialog--fadeout");

  modalDialog.close();
});

copyBtn.addEventListener("click", () => {
  const copyInput = document.getElementById("copy-link-input");

  copyInput.select();
  copyInput.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyInput.value);

  const copyText = document.getElementById("copy-text");
  copyText.innerHTML = "Copied!";
});

// Comments
const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }

  if (seconds < 10) {
    return "just now";
  }

  return Math.floor(seconds) + " seconds ago";
};

//? In regular app you will fetch these dat from api

//? defined commenters
const users = {
  me: {
    name: "Me",
    src: "assets/uknown.jpg",
  },
  ilham: {
    name: "Ilham Rofiadi",
    src: "assets/ilham.jpg",
  },
  iqbal: {
    name: "Iqbal M. Mimbar",
    src: "assets/iqbal.jpg",
  },
};

//? currently logged user
const loggedUser = users["me"];

//? defined comments
let comments = [
  {
    id: 1,
    text: "Yang Bener Aje, Rugi Dong😁",
    author: users["iqbal"],
    createdAt: "2024-03-01 10:00:00",
  },
  {
    id: 2,
    text: "Informasinya Bagus, Dijelaskan Secara Rinci. Top",
    author: users["ilham"],
    createdAt: "2024-02-28 18:00:00",
  },
];

const authedUser = document.querySelector(".authed-user");

const authorHTML = DOMPurify.sanitize(
  `<img class="avatar" src="${loggedUser.src}" alt="${loggedUser.name}">`
);

authedUser.innerHTML = authorHTML;

const commentsWrapper = document.querySelector(".discussion__comments");

//? generate comment HTML based on comment object
const createComment = (comment) => {
  const newDate = new Date(comment.createdAt);
  //? sanitize comment HTML
  return DOMPurify.sanitize(`<div class="comment">
      <div class="avatar">
          <img
              class="avatar"
              src="${comment.author.src}"
              alt="${comment.author.name}"
          >
      </div>
      <div class="comment__body">
          <div class="comment__author">
              ${comment.author.name}
              <time
                  datetime="${comment.createdAt}"
                  class="comment__date"
              >
                  ${timeSince(newDate)}
              </time>
          </div>
          <div class="comment__text">
              <p>${comment.text}</p>
          </div>
      </div>
  </div>`);
};

//? prepare comments to be written to DOM
const commentsMapped = comments.map((comment) => createComment(comment));

//? write comments to DOM
const innerComments = commentsMapped.join("");
commentsWrapper.innerHTML = innerComments;

const newCommentForm = document.getElementById("newcomment__form");
const newCommentTextarea = document.querySelector("#newcomment__form textarea");

document.getElementById("reset-button").addEventListener("click", () => {
  newCommentForm.reset();
});

newCommentForm.addEventListener("submit", (e) => {
  e.stopPropagation();
  e.preventDefault();
  const newCommentTextareaValue = newCommentTextarea.value;

  const newComment = {
    id: comments.length + 1,
    text: newCommentTextareaValue,
    author: loggedUser,
    createdAt: new Date().toISOString(),
  };

  const comment = document.createElement("div");
  comment.innerHTML = createComment(newComment);

  if (commentsWrapper.hasChildNodes()) {
    commentsWrapper.insertBefore(comment, commentsWrapper.childNodes[0]);
  } else {
    commentsWrapper.appendChild(comment);
  }

  //? reset form after submit
  newCommentForm.reset();
});
