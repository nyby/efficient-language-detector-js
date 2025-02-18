declare module "@nyby/eld" {
  class LanguageResult {
    language: string;
    getScores(): Record<string, number>;
    isReliable(): boolean;
  }
  interface EldInfo {
    "Data type": string;
    Languages: string[];
  }
  interface Eld {
    detect(text: string): LanguageResult;
    cleanText(clean: boolean): void;
    info(): EldInfo;
  }

}

declare module "@nyby/eld/src/entries/static.M60.js" {
  import { Eld } from "@nyby/eld";
  export const eld: Eld;
}
