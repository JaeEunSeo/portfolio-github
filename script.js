function getPost(number) {
  fetchID = "forwarding" + String(number);
  let content = document.getElementById(fetchID);
  fetch("./postings.json")
    .then((response) => response.json())
    .then((data) => {
      const Title = data["title"][number];
      const Img = data["img_url"][number];
      console.log(Title, Img, "getpost");
      content.textContent = Title;
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
      throw error;
    });
}
getPost(0);
getPost(1);

function changeLink(number) {
  fetchID = "forwarding" + String(number);
  let tagA = document.getElementById(fetchID);
  fetch("./postings.json")
    .then((response) => response.json())
    .then((data) => {
      let Url = data["url"][number];
      tagA.href = Url;
    });
  console.log(tagA);
}

changeLink(0);
changeLink(1);

let menuEvent = document.querySelectorAll(".transpose");

console.log(menuEvent);
menuEvent.forEach((element) => {
  element.addEventListener(
    "mouseover",
    function (event) {
      event.target.style.color = "#939185";
      event.target.style.cursor = "pointer";
    },
    false
  );
});

menuEvent.forEach((element) => {
  element.addEventListener(
    "mouseout",
    function (event) {
      event.target.style.color = "var(--color-secondary)";
    },
    false
  );
});
