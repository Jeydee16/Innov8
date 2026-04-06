import https from 'https';

const checkIcon = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => {
      resolve({ url, status: 'error' });
    });
  });
};

const urls = [
  'https://logo.uplead.com/vstecs.com',
  'https://logo.uplead.com/vstecs.ph',
  'https://logo.uplead.com/bytestraits.com',
  'https://logo.uplead.com/agmostudio.com',
  'https://logo.clearbit.com/vstecs.com',
  'https://logo.clearbit.com/bytestraits.com',
  'https://logo.clearbit.com/agmostudio.com'
];

Promise.all(urls.map(checkIcon)).then(results => {
  console.log(results);
});
