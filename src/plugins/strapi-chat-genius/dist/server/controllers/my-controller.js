"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    async list(ctx) {
        var _a;
        try {
            let data = await ((_a = strapi === null || strapi === void 0 ? void 0 : strapi.entityService) === null || _a === void 0 ? void 0 : _a.findMany('plugin::strapi-chat-genius.settings-content-type'));
            return ctx.body = data;
        }
        catch (e) {
            console.log(e);
        }
    },
    async create(ctx) {
        var _a, _b, _c;
        try {
            const { key } = ctx.request.body;
            let entity = await ((_a = strapi === null || strapi === void 0 ? void 0 : strapi.entityService) === null || _a === void 0 ? void 0 : _a.findMany('plugin::strapi-chat-genius.settings-content-type'));
            if (entity === null || entity === void 0 ? void 0 : entity.id) {
                await ((_b = strapi === null || strapi === void 0 ? void 0 : strapi.entityService) === null || _b === void 0 ? void 0 : _b.delete('plugin::strapi-chat-genius.settings-content-type', entity === null || entity === void 0 ? void 0 : entity.id));
            }
            let data = await ((_c = strapi === null || strapi === void 0 ? void 0 : strapi.entityService) === null || _c === void 0 ? void 0 : _c.create('plugin::strapi-chat-genius.settings-content-type', {
                data: {
                    key
                }
            }));
            return ctx.body = data;
        }
        catch (e) {
            console.log(e);
        }
    },
});
