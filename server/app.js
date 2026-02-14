'use strict';
const path=require('node:path');
const AutoLoad=require('@fastify/autoload');
const options={};
module.exports=async function (fastify, opts) {
  fastify.register(require('@fastify/helmet'),{
    // contentSecurityPolicy:true,
    xFrameOptions: "ALLOW-FROM *",
  });
  fastify.register(require('@fastify/static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/',
  });
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  });
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  });
}
module.exports.options=options;