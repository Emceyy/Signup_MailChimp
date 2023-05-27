# singinup_mailchimp

This is a web app that allows users to sign in for a Mailchimp newsletter using their first name, last name and email address. The app saves the user's information to Mailchimp using their API.

## Installation

To run this app, you need to have Node.js installed on your machine. You also need to create a .env file in the root directory of the project and add your Mailchimp API key and list ID as environment variables. For example:

MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_LIST_ID=your_list_id

Then, you can install the dependencies using:

npm install

## Usage

To start the app, run:

node app.js

The app will listen on port 3000 by default. You can change this by editing the app.js file.

To access the app, open your browser and go to:

http://localhost:3000

You will see a simple form where you can enter your first name, last name and email address and click on the "Sign in" button. If everything goes well, you will see a success message. Otherwise, you will see an error message with some details.

## License

This project is licensed under the ISC license.
