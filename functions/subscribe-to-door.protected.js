const got = require('got');

exports.handler = async function(context, event, callback) {
  const twiml = new Twilio.twiml.MessagingResponse();
  const number = event.From;
  const name = event.Body;
  try {
    await got.post(`https://jsonbox.io/${context.JSONBOX_ID}/door`, {
      json: { number, name },
      responseType: 'json'
    });
    callback(null, twiml);
  } catch(e) {
    callback(e);
  }
};
