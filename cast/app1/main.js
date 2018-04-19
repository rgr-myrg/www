console.log('[MAIN] Start Up');

const context = cast.framework.CastReceiverContext.getInstance();
context.start();

console.log('[MAIN] context', context);
