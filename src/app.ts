import { ConfigService } from "./config/config.service";
import { IConfigService } from "./config/config.interface";
import { session, Telegraf } from "telegraf";
import { IBotContext } from "./context/context.interface";

class Bot {
  bot: Telegraf<IBotContext>;
  constructor(private readonly configService: IConfigService) {
    this.bot = new Telegraf<IBotContext>(this.configService.get("TOKEN"));
    this.bot.use(session());
  }

  init() {
    this.bot.launch();
  }
}

const bot = new Bot(new ConfigService());
