declare module "@loilo-inc/eld" {
  class LanguageResult {
    language: string;
    getScores(): Record<string, number>;
    isReliable(): boolean;
  }
  interface EldInfo {
    "Data type": string;
    Languages: string[];
    "Dynamic subset": boolean | Record<string, number>;
  }
  interface Eld {
    detect(text: string): LanguageResult;
    cleanText(clean: boolean): void;
    dynamicLanguSubset(
      languages: Record<string, number>
    ): Record<string, number>;
    saveSubset(languages: Record<string, number>): void;
    info(): EldInfo;
  }
  interface EldWithNgramLoador extends Eld {
    loadNgrams(
      file: "ngramL60.js" | "ngramM60.js" | "ngramS60.js" | "ngramXS60.js"
    ): Promise<void>;
  }
  export const eld: EldWithNgramLoador;
}

declare module "@loilo-inc/eld/src/entries/static.M60.js" {
  import { Eld } from "@loilo-inc/eld";
  export const eld: Eld;
}

declare module "@loilo-inc/eld/src/entries/static.L60.js" {
  import { Eld } from "@loilo-inc/eld";
  export const eld: Eld;
}

declare module "@loilo-inc/eld/src/entries/static.M60.js" {
  import { Eld } from "@loilo-inc/eld";
  export const eld: Eld;
}

declare module "@loilo-inc/eld/src/entries/static.S60.js" {
  import { Eld } from "@loilo-inc/eld";
  export const eld: Eld;
}

declare module "@loilo-inc/eld/src/entries/static.XS60.js" {
  import { Eld } from "@loilo-inc/eld";
  export const eld: Eld;
}
