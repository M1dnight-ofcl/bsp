const fastify=require('fastify')({logger:true});
const path=require('path');
fastify.register(require('@fastify/static'), {
  root:path.join(__dirname,'public'),
  prefix:'/', 
});
fastify.register(require('@fastify/cors'), { 
  origin: '*',
});
fastify.get('/',async(request,reply)=>{
  reply.send({ hello: 'world' })
});
fastify.get('/cc',async(request,reply)=>{
  reply.sendFile('/cc/index.html');
});
fastify.listen({
  port:3000,
  host: "0.0.0.0"
},(err,address)=>{
  if(err){
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`);
  console.log(`  => ${address}/cc`);
});
// start();