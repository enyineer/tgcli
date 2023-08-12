import { Config } from '../config/config';
import { Api, Bot as GrammyBot, RawApi } from 'grammy';
export class Bot {
  private static readonly _bot: GrammyBot = new GrammyBot(Config.getToken());

  static get api(): Api<RawApi> {
    return this._bot.api;
  }
}
