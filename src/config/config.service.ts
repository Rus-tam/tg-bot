import { IConfigService } from "./config.interface";
import { DotenvParseOutput } from "dotenv";

export class ConfigService implements IConfigService {
  private config: DotenvParseOutput;
  constructor() {}
  get(key: string): string {
    return "";
  }
}
