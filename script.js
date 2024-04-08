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
