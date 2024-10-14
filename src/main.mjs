import { addCommands } from './add-commands.mjs';
import { runBot } from './run-bot.mjs';
import { hookSendMessage } from './webhook.mjs';

addCommands();
runBot();
/*
hookSendMessage({
    username: "My Webhook Name",
    avatar_url: "",
    content: "The message to send"
}, "YOUR_CLIENT_ID", "YOUR_TOKEN");
*/