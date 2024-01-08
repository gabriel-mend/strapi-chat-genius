"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        method: 'GET',
        path: '/',
        handler: 'myController.list',
        config: {
            policies: [],
        }
    },
    {
        method: 'POST',
        path: '/',
        handler: 'myController.create',
        config: {
            policies: [],
        },
    },
];
