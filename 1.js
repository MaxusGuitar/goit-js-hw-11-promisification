const delay = ms => {
    setInterval(() => {
      resolve(ms)
  }, 1000)
};

const logger = time => console.log(`Resolved after ${time}ms`);


