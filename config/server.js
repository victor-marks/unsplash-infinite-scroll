module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    '9177d7b3f3ebca0825da44e05f8411f9d2b089a4ce7d3a8e5d1b2d848706489b',
  SECRET:
    process.env.SECRET ||
    '4087b780eebdc9124b9e475f3f69127655e832c8e6ff6218d7eeea3ae31cb269',
  CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000'
};
