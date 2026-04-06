const https = require('https');
const fs = require('fs');
const icons = ['microsoft', 'google', 'amazonwebservices', 'cisco', 'hp', 'fortinet', 'aruba', 'meraki'];
let results = [];
let done = 0;

icons.forEach(icon => {
  https.get('https://cdn.simpleicons.org/' + icon, r => {
    results.push(`${icon}: ${r.statusCode}`);
    done++;
    if (done === icons.length) {
      fs.writeFileSync('./icon_results.txt', results.join('\n'));
    }
  }).on('error', () => {
    results.push(`${icon}: error`);
    done++;
    if (done === icons.length) {
      fs.writeFileSync('./icon_results.txt', results.join('\n'));
    }
  });
});
