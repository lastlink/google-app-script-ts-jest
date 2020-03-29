declare namespace glFunctions {
  interface global {
    doPost: (e: any) => GoogleAppsScript.Content.TextOutput;
    doGet: (e: any) => GoogleAppsScript.Content.TextOutput;
    main(): void;
  }
}

declare let global: glFunctions.global;
