let toastBox = document.getElementById("toastBox");
let successMsg = "<strong><span>✔️</span> Successfully submitted</strong>";
let errorMsg = "<strong><span>❌</span> Please fix the error!</strong>";
let invalidMsg = "<strong><span>❗</span> Invalid input, check again</strong>";

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  if (msg.includes("error")) {
    toast.classList.add("error");
  } else if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  } else {
    toast.classList.add("success");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
