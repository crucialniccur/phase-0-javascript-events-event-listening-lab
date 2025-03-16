function addingEventListener() {
  let toClick = document.getElementById("button");
  toClick.addEventListener("click", () => alert("I was clicked! By you"));
  //   console.log(toClick);
}

addingEventListener();
