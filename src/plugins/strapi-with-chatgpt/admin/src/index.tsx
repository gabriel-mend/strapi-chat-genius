import { prefixPluginTranslations } from '@strapi/helper-plugin';

import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';

const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    app.customFields.register({
      name: "strapi-with-chatgpt",
      pluginId: "strapi-with-chatgpt",
      plugin: "strapi-with-chatgpt",
      type: "string",
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      intlDescription: {
        id: "strapi-with-chatgpt.description",
        defaultMessage: "Facilite a criação de conteúdo",
      },
      icon: PluginIcon,
      components: {
        Input: async () =>
          import(
            "./components/Input"
          ),
      },
      options: {
      },
    });


    app.createSettingSection(
      {
        id: pluginId,
        intlLabel: {
          id: `${pluginId}.plugin.name`,
          defaultMessage: "Strapi with chatgpt"
        },
      },
      [
        {
          intlLabel: {
            id: `${pluginId}.plugin.name`,
            defaultMessage: "Configuration",
          },
          id: "strapi-chatgpt",
          to: `/settings/${pluginId}`,
          Component: async () => {
            const component = await import(
              "./pages/HomePage"
            );

            return component;
          },
        },
      ]
    );

    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    };

    app.registerPlugin(plugin);
  },

  bootstrap(app: any) {},

  async registerTrads(app: any) {
    const { locales } = app;

    const importedTrads = await Promise.all(
      (locales as any[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
