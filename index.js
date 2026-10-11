//import express
let express = require("express");
//create an app instance - calling express() returns an object
let app = express();
app.use(express.static("public", { extensions: ["html"] }));

app.get("/", (request, response) => {
  console.log(request.path);
  response.send("welcome to my landing page!!!!");
});

app.get("/data", (request, response) => {
  console.log("request data route");
  console.log(request.path);
  let filteredPlayers = {players: []};

  if (request.query.position) {
    const position = request.query.position;
    for (const player of canucksData.players) {
      if (player.position.map((p) => p.toLowerCase()).includes(position.toLowerCase())) {
        filteredPlayers.players.push(player);
      } 
    }
    response.json(filteredPlayers);
  } else {
    response.json(canucksData);
  }

});

//route with a 'path parameter'
//a data serving "dynamic" route with a path parameter
app.get("/data/:name", (request, response) => {
  console.log("A request to the dynamic data route!");

  let currentPlayer = request.params.name;

  let currentPlayerObj = { msg: "Player not found." };
  for (let i = 0; i < canucksData.players.length; i++) {
    if (currentPlayer.toLowerCase() == canucksData.players[i].name.toLowerCase()) {
      currentPlayerObj = canucksData.players[i];
    }
  }
  response.json(currentPlayerObj);
});

app.listen(3000, () => {
  console.log("app is listening at localhost:3000");
});

let canucksData = {
  players: [
    {name: "Henrik Sedin",
      number: "33",
      position: ["C"]
    },
    {name: "Daniel Sedin",
      number: "22",
      position: ["LW"]
    },
    {name: "Roberto Luongo",
      number: "1",
      position: ["G"]
    },
    {name: "Markus Naslund",
      number: "19",
      position: ["LW"]
    },
    {name: "Kevin Bieksa",
      number: "3",
      position: ["D"]
    },
    {name: "Brock Boeser",
      number: "6",
      position: ["RW"]
    },
    {name: "Elias Pettersson",
      number: "40",
      position: ["C"]
    },
    {name: "Trevor Linden",
      number: "16",
      position: ["C","RW"]
    },
    {name: "Alex Edler",
      number: "23",
      position: ["D"]
    },
    {name: "Alex Burrows",
      number: "14",
      position: ["LW"]
    },

  ]
};