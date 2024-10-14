import { sendMessage } from "./src/send-message.mjs";

export const commands = [
    {name: "ping", description: "Replies with Pong!"}
];
export async function chatInteraction(source) {
    console.log(source);
    if (!source.isChatInputCommand()) return;
    switch (source.commandName) {
        case "ping":
            sendMessage(`Test!!!!`, source.channelId);
            await source.reply('Pong!');
            break;
    }
}