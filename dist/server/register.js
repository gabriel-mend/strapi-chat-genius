"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
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
