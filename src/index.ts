import { Telegraf } from "telegraf";
import { token } from "./Config";
const bot = new Telegraf(token);
bot.on("text", (ctx) => {
    if (!ctx.message.text.startsWith("/")) return;
    const [command, ...args] = ctx.message.text.slice(1).split(/ +/g);
    if (command === "ping") {
        ctx.reply(`pong!\nArgs:${args}`);
    }
    
});
bot.launch().then(() => console.log("Bot is online"));

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
