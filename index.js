// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Partials } = require("discord.js");
require("dotenv").config();
console.log(process.env);

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);

  client.on("messageCreate", (message) => {
    // Filter out bot messages and ensure it's not from the bot itself
    if (message.author.bot || message.author.id === client.user.id) return;

    console.log(`Received message: ${message.content}`);
    // Process incoming messages here
  });
});

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
