import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: "strapi-with-chatgpt",
    plugin: "strapi-with-chatgpt",
    type: "text",
    inputSize: {
      default: 12,
      isResizable: false,
    },
  });
};
