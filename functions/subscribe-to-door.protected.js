const got = require("got");

exports.handler = async function (context, event, callback) {
  const twiml = new Twilio.twiml.MessagingResponse();
  const number = event.From;
  const name = event.Body;
  try {
    const content = {
      headers: {
        "X-Master-key": context.JSONBIN_KEY,
      },
      json: { number, name },
      responseType: "json",
    };
    await got.put(
      `https://api.jsonbin.io/v3/b/608f8f7ad64cd16802a79ff7`,
      content
    );
    callback(null, twiml);
  } catch (e) {
    callback(e);
  }
};
