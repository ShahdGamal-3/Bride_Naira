# Google Sheets message setup

1. Create a Google Sheet.
2. Open **Extensions > Apps Script**.
3. Copy the contents of `google-sheets-web-app.gs` into the Apps Script editor and save.
4. Deploy it with **Deploy > New deployment**.
5. Choose **Web app**.
6. Set **Execute as** to **Me** and **Who has access** to **Anyone**.
7. Deploy, authorize the app, and copy the Web app URL.
8. In `index.html`, replace `PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with that URL.

The script creates a sheet named `Messages` automatically and stores:

- Timestamp
- Name
- Message
