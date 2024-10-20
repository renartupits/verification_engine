import { AllowedSchema } from "express-json-validator-middleware";

export const checksSchema: AllowedSchema = {
  type: "object",
  required: ["results"],
  additionalProperties: false,
  properties: {
    results: {
      type: "array",
      items: {
        type: "object",
        required: ["checkId", "result"],
        additionalProperties: false,
        properties: {
          checkId: {type: "string"},
          result: {type: "string", enum: ["yes", "no"]}
        }
      }
    }
  }
};
