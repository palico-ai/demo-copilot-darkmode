import { ToolExecutionEnvironment, Toolset } from "@palico-ai/app";
// import * as z from "zod";

export const AppToolset: Toolset = {
  name: "webapp_toolset",
  tools: [
    {
      name: "turn_on_dark_mode",
      description: "Turn on dark mode for the web app",
      executionEnvironment: ToolExecutionEnvironment.Client,
    },
    {
      name: "turn_off_dark_mode",
      description: "Turn off dark mode for the web app",
      executionEnvironment: ToolExecutionEnvironment.Client,
    },
  ],
};