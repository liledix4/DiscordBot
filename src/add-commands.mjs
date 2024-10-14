import { botConfig } from "../config.mjs";
import { commands } from "../commands.mjs";
import { REST, Routes } from "discord.js";

export async function addCommands() {
    const rest = new REST({ version: '10' }).setToken(botConfig.token);
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(botConfig.client_id), { body: commands });
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}