import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { object, string, infer as zodInfer } from 'zod';
import { join } from 'node:path';

const configSchema = object({
  bot: object({
    token: string().min(1),
  }),
});

type ConfigType = zodInfer<typeof configSchema>;

// eslint-disable-next-line unicorn/prefer-module
const path = join(__dirname, '../../config.yaml');

export class Config {
  private static readonly config: ConfigType = configSchema.parse(parse(readFileSync(path, 'utf-8')));

  static getToken(): string {
    return this.config.bot.token;
  }
}
