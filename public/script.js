fetch('/data')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const dataContainer = document.getElementById("data-container");

    for (let player of data.players) {
      const newDiv = document.createElement("div");
      newDiv.innerText = player.name;
      dataContainer.append(newDiv);
    }
  })
  .catch((error) => {
    console.log(error);
  });
