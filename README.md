# Opening Doors with JSON Web Tokens

This is a Twilio Function to be used to add recipients to messages from the door using [jsonbox.io](https://jsonbox.io/).

## Setting up the function

Clone the repo and install the dependencies like so:

```bash
git clone https://github.com/philnash/opening-doors.git
cd opening-doors
npm install
```

Copy the `.env.example` file to `.env` and fill in the environment variables.

### Environment variables

This Function expects the following environment variables set:

| Variable      | Meaning                                                                                | Required |
| :------------ | :------------------------------------------------------------------------------------- | :------- |
| `ACCOUNT_SID` | Your Twilio Account SID found on [your Twilio console](https://www.twilio.com/console) | Yes      |
| `AUTH_TOKEN`  | Your Twilio Auth Token found on [your Twilio console](https://www.twilio.com/console)  | Yes      |
| `JSONBOX_ID`  | The ID of your [jsonbox.io](https://jsonbox.io/) box                                   | Yes      |

### Run the function locally

You can now start the server using:

```bash
npm start
```

### Testing the function locally

#### With the Twilio CLI

If you have the Twilio CLI installed, you can run the following command

```bash
twilio phone-numbers:update [Your Twilio number] --sms-url http://localhost:3000/subscribe-to-door
```

This will open an [ngrok](https://ngrok.com) tunnel to your machine and configure your number's SMS URL to the ngrok URL.

#### With ngrok

You can use [ngrok](http://ngrok.com) without using the CLI. Run ngrok to point at port 3000:

```bash
ngrok http 3000
```

Then take the resulting ngrok URL, add the path `/subscribe-to-door`. Open the Twilio console find your number and open it to configure. Enter the full URL, `https://YOUR_NGROK_SUBDOMAIN.ngrok.io/subscribe-to-door`, in the field under _Messaging_ for when _A message comes in_.

## Deploying

You can create a build and deploy this function with the following command:

```bash
npm run deploy
```

This will deploy the function to a twil.io subdomain with a "dev" suffix. If you want to promote this to production, run:

```bash
npm run deploy:prod
```

