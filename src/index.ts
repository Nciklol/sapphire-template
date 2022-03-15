import { SapphireClient } from "@sapphire/framework";
import '@sapphire/plugin-logger/register';
import "dotenv/config";

const client = new SapphireClient({
    intents: ["GUILDS"]
});

client.login(/* This uses the DISCORD_TOKEN variable from .env to login automatically */)