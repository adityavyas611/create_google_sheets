const { google } = require('googleapis');

const createSheet = (oAuth2Client) => {
    const sheets = google.sheets({ version: "v4"});
  
    const request = {
      resource: {
        properties: {
          title: "My first sheet",
        },
      },
      auth: oAuth2Client
    };
  
    sheets.spreadsheets.create(request, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(JSON.stringify(response, null, 2));
    });
  };

module.exports = createSheet;