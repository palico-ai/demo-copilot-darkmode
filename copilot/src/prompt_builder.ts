import { PromptParamsCommon, PromptBuilder } from "@palico-ai/app";

export class AppPromptBuilder implements PromptBuilder {
  async getSystemPrompt(params: PromptParamsCommon): Promise<string> {
    return `You're a helpful copilot that helps user use a web app.`;
  }

  async getPromptForQuery(
    query: string,
    params: PromptParamsCommon
  ): Promise<string> {
    return `
    The user is asking for help with the web app. They are asking: "${query}".
    
    =====
    You know the following:
        ${JSON.stringify(params.context)}
    `;
  }
}
