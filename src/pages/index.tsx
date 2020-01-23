import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    (async () => {
      const { default: Worker } = await import('worker-loader?name=static/[hash].worker.js!../workers/ping-pong.worker');

      console.log(Worker)
      const worker = new Worker();
      worker.addEventListener('message', event => {
        console.log(event.data);
      })
      worker.postMessage('ping');
    })();
  }, [])

  return <div>🎉</div>
}
