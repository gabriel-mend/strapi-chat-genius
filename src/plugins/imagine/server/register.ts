import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: "imagine",
    plugin: "imagine",
    type: "text",
    inputSize: {
      // optional
      default: 4,
      isResizable: true,
    },
  });
};
