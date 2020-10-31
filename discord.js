const Discord = require("discord.js");
const client = new Discord.Client();
const dataCollection = require("./dataCollection.js");

//console.log(msg.member.user.fetch()); fetching user data

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("bro");
  }

  if (msg.content.toLowerCase() !== null) {
    const sentence = msg.content.split(" ");
    if (compareTwoArray(sentence, dataCollection.funnyWords)) {
      if (msg.member.user.id === "250998234720370689") {
        msg.reply("Rodin dai, nahasaunu na");
      } else {
        msg.reply("Na hasana vai..");
      }
    }

    if (compareTwoArray(sentence, dataCollection.sanitizer)) {
      if (msg.member.user.id === "250998234720370689") {
        msg.reply("Rodin dai, Mukh nachadnu na");
      } else {
        msg.reply("oh Bro..! mukh chai chadni hoena hai...");
      }
    }
  }

  function compareTwoArray(x, y) {
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        if (x[i] == y[j]) {
          return true;
        }
      }
    }
    return false;
  }
});

client.login("NzQxMzA2NzYyMzA0NDIxOTYy.Xy1puA.ZIBLX0f-rsqBZUo4Ie9epjFUKsY");
