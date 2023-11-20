
import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]); 

  useEffect (() =>{
    //Fetch data from API
    fetch ('https://my-json-server.typicode.com/John-Mwau/Bot-Battlr/bots')
    .then ((response) => response.json())
    .then ((data) => setBots(data))
    .catch((error) => console.error('Error fetching data:', error));
  }, []);

  /*useEffect(() => {
    // Fetch data from the API
    fetch('https://my-json-server.typicode.com/John-Mwau/Bot-Battlr/bots')
    .then((resp) => resp.json())
    .then((data) => setBots(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);
*/
const releaseFromArmy = (updatedEnlistedBots) => {
  // Implement the logic to release bots from the army
  setEnlistedBots(updatedEnlistedBots);
};

function handleBotDischarge(bot) {
  // Remove the bot from enlistedBots in the frontend
  const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
  setEnlistedBots(updatedEnlistedBots);
}
 

  return (
    <div className="App">
       <BotArmy 
        enlistedBots={enlistedBots} 
        releaseFromYourBotArmy={releaseFromArmy}/> 

      <BotCollection
       bots={bots} 
       enlistedBots={enlistedBots} 
       setEnlistedBots={setEnlistedBots}
       handleBotDischarge={handleBotDischarge}
      />
      
      
    </div>
  );
}
export default App