import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: "chatgpt-field",
    plugin: "chatgpt-field",
    type: "text",
    inputSize: {
      // optional
      default: 4,
      isResizable: true,
    },
  });
};
