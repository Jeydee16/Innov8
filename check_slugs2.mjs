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
  'https://cdn.simpleicons.org/amazonaws/white',
  'https://cdn.simpleicons.org/microsoft365/white',
  'https://cdn.simpleicons.org/hewlettpackardenterprise/white'
];

Promise.all(urls.map(checkIcon)).then(results => {
  console.log(results);
});
