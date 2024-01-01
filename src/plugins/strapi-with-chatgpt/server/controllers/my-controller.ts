import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async list(ctx) {
    try {
      let data = await strapi?.entityService?.findMany('plugin::strapi-with-chatgpt.settings-content-type');
      return ctx.body = data
    } catch (e) {
      console.log(e)
    }
  },
  async create(ctx) {
    try {
      const { key } = ctx.request.body

      let { id }: any = await strapi?.entityService?.findMany('plugin::strapi-with-chatgpt.settings-content-type');

      await strapi?.entityService?.delete('plugin::strapi-with-chatgpt.settings-content-type', id);

      let data = await strapi?.entityService?.create('plugin::strapi-with-chatgpt.settings-content-type', {
        data: {
          key
        }
      });
      return ctx.body = data
    } catch (e) {
      console.log(e)
    }
  },
});
