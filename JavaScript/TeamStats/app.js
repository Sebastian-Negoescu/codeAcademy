/*
Team Stats
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. 
It''s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. 
For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

const team = {
    _players: [
      { 
        firstName: "Blu", 
        lastName: "Negoescu", 
        age: 1
      },
      { firstName: "Luiza",
        lastName: "Negoescu",
        age: 24
      },
      {
        firstName: "Sebi",
        lastName: "Negoescu",
        age: 24
      }
      ],
    _games: [
      {
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: "Los Angeles",
        teamPoints: 38,
        opponentPoints: 38
      },
      {
        opponent: "New York",
        teamPoints: 37,
        opponentPoints: 36
      },
      {
        opponent: "Ostroveni",
        teamPoints: 31,
          opponentPoints: 39
      }
    ],
    
    get players () {
      return this._players;
    },
    
    get games() {
      return this._games;
    },
    
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
    
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie", 44);
  team.addPlayer("Buggs", "Bunny", 76);
  console.log(team.players);
  
  team.addGame("Bucharest", 25, 25);
  team.addGame("Tunarii Vechi", 39, 23);
  team.addGame("Bailesti", 34, 7);
  console.log(team.games);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  