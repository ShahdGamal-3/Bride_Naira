function doGet() {
  return ContentService
    .createTextOutput('Bride message endpoint is online.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Messages');
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Messages');
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Message']);
  }

  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('A message payload is required.');
  }

  var data = JSON.parse(e.postData.contents);
  var name = String(data.name || '').trim();
  var message = String(data.message || '').trim();
  if (!name || !message) {
    throw new Error('Name and message are required.');
  }

  sheet.appendRow([
    new Date(),
    name,
    message
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
