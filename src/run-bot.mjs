import { botConfig } from '../config.mjs';
import { chatInteraction } from '../commands.mjs';
import { client } from './connect.mjs';
import { groupOfActivities } from './activities.mjs';

export function runBot() {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
        groupOfActivities(botConfig.activities, "straight", 10);
    });
    client.on('interactionCreate', async interaction => {
        chatInteraction(interaction);
    });
    client.login(botConfig.token);
}