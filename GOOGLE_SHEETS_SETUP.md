# Google Sheets message setup

1. Create a Google Sheet.
2. Open **Extensions > Apps Script**.
3. Copy the contents of `google-sheets-web-app.gs` into the Apps Script editor and save.
4. Deploy it with **Deploy > New deployment**.
5. Choose **Web app**.
6. Set **Execute as** to **Me** and **Who has access** to **Anyone**. This must be the anonymous/public option, not an option restricted to your account.
7. Deploy, authorize the app, and copy the Web app URL ending in `/exec`.
8. In `index.html`, set `googleSheetsEndpoint` to that URL.
9. Open the `/exec` URL in a private browser window. It must show `Bride message endpoint is online.` without asking you to sign in.
10. Submit a test message on the invitation page and check the `Messages` tab.

Important: the URL in `index.html` must exactly match the URL shown under **Manage deployments**. If you create a new deployment, its URL can be different. Use the **Copy** button beside the Web app URL and replace the complete value of `googleSheetsEndpoint`; do not copy only the visible beginning of the URL.

When the Apps Script code changes, use **Deploy > Manage deployments > Edit**, choose **New version**, and deploy again. Keep the same `/exec` URL in `index.html`.

If the `/exec` URL redirects to Google sign-in, edit the deployment and change **Who has access** to **Anyone**, then redeploy.

The script creates a sheet named `Messages` automatically and stores:

- Timestamp
- Name
- Message
