import { Command, Flags, Args } from '@oclif/core';
import { Bot } from '../bot/bot';

export default class Send extends Command {
  static description = 'Send a message to a Chat'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    chat: Flags.integer({
      char: 'c',
      description: 'Chat ID',
      required: true,
    }),
  }

  static args = {
    message: Args.string({
      description: 'Message to send',
      required: true,
    }),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Send);

    await Bot.api.sendMessage(flags.chat, args.message);
  }
}
