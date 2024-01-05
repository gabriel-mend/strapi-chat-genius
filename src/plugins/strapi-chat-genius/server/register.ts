import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: "strapi-chat-genius",
    plugin: "strapi-chat-genius",
    type: "text",
    inputSize: {
      default: 12,
      isResizable: false,
    },
  });
};
