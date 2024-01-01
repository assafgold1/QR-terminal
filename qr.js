const qrcodeTerminal = require('qrcode-terminal');
const url = 'https://www.youtube.com/watch?v=PwL29YCgavo';

qrcodeTerminal.generate(url, {
  small: true,
});
