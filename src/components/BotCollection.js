import React from "react";
import SingleBot from "./SingleBot";

export default function BotCollection ({ bots, enlistedBots, setEnlistedBots, handleBotDischarge }) {
  // Check if bots is an array
  if (!Array.isArray(bots)) {
    console.error("Error: 'bots' is not an array");
    return null; // or display an error message
  }

  return (
    <div className="BotCollection">
      <h2>Bots Collection</h2>
      <ul className="bot-collection">
        {bots.map((bot) => (
          <li key={bot.id}>
            <SingleBot
              bot={bot}
              enlistedBots={enlistedBots}
              setEnlistedBots={setEnlistedBots}
              handleBotDischarge={handleBotDischarge}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
