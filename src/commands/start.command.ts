import { Command } from "./command.class";
import { Markup, Telegraf } from "telegraf";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start((ctx) => {
      console.log(ctx.session);
      ctx.reply(
        "Вам понравился курс?",
        Markup.inlineKeyboard([
          Markup.button.callback("Like", "course_like"),
          Markup.button.callback("Dislike", "course_dislike"),
        ]),
      );
    });
  }
}
