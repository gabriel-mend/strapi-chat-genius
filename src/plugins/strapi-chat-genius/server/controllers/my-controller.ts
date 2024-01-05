import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  async list(ctx) {
    try {
      let data = await strapi?.entityService?.findMany('plugin::strapi-chat-genius.settings-content-type');
      return ctx.body = data
    } catch (e) {
      console.log(e)
    }
  },
  async create(ctx) {
    try {
      const { key } = ctx.request.body

      let entity: any = await strapi?.entityService?.findMany('plugin::strapi-chat-genius.settings-content-type');

      if(entity?.id) {
        await strapi?.entityService?.delete('plugin::strapi-chat-genius.settings-content-type', entity?.id);
      }

      let data = await strapi?.entityService?.create('plugin::strapi-chat-genius.settings-content-type', {
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
