const https = require('https');
const urls = [
  'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/Fortinet_logo.svg',
  'https://upload.wikimedia.org/wikipedia/en/1/13/Aruba_Networks_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/1b/Cisco_Meraki_logo.svg'
];

urls.forEach(url => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    console.log(res.statusCode, url);
  });
});
