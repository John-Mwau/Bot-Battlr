import React from "react"
export default function BotArmy({ bots, releaseFromYourBotArmy, enlistedBots}){

    function releaseBot (releasedBot){
        const updatedEnlistedBots = enlistedBots.filter(
            (bot) => bot.id !== releasedBot.id
          );
          releaseFromYourBotArmy(updatedEnlistedBots);
    }

    const groupedBots =[];
    

    for (let i = 0; i < enlistedBots.length; i += 5) {
      groupedBots.push(enlistedBots.slice(i, i + 4));
    }

    return (
      <div className="bot-army">
        <h2>Single Bot</h2>
      {groupedBots.map((group, index) => (
        <div key={index} className="bot-row">
          {group.map((bot) => (
            <div
              key={bot.id}
              className="bot-card enlisted"
              onClick={() => releaseBot(bot)}
            >
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              {/* <p className="catchphrase">Catchphrase: {bot.catchphrase}</p> */}
              <div className="bot-details">
                <p>
                   Health: {bot.health}
                </p>
                <p>
                   Damage: {bot.damage}
                </p>
                <p>
                  Armor: {bot.armor}
                </p>
                <p>
                   Class: {bot.bot_class}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}