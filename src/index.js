import { createService } from './lib/createService';
import { startService } from './lib/startService';

const initialize = async () => {
  const { PORT: port = 3000, NODE_ENV: env } = process.env;
  try {
    const service = await createService();
    await startService(service, { port });
    console.log(`[${env}] 💻 Service is running at http://localhost:${port}`);
  } catch (error) {
    console.log(`[${env}] Not possible to run the service`);
  }
};

initialize();
