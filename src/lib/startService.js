export const startService = (service, { port }) =>
  new Promise((resolve, reject) => {
    try {
      service.listen(port, resolve);
    } catch (error) {
      reject(error);
    }
  });
