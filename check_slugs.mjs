import https from 'https';

const checkIcon = (slug) => {
  return new Promise((resolve) => {
    https.get(`https://cdn.simpleicons.org/${slug}/white`, (res) => {
      resolve({ slug, status: res.statusCode });
    }).on('error', () => {
      resolve({ slug, status: 'error' });
    });
  });
};

const slugs = ['microsoft', 'google', 'amazonaws', 'cisco', 'hp', 'fortinet', 'aruba', 'meraki', 'hewlettpackardenterprise', 'microsoft365'];

Promise.all(slugs.map(checkIcon)).then(results => {
  console.log(results);
});
