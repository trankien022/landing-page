/**
 * Google Apps Script Webhook for Writing9 Landing Page Lead Capture
 * 
 * This script receives POST requests from the Next.js API and writes lead data to Google Sheets
 * 
 * Setup Instructions:
 * 1. Create a new Google Sheet
 * 2. Add column headers: Timestamp, Full Name, Email, Phone, Message, IP Address, User Agent, Source Page, UTM Source, UTM Medium, UTM Campaign
 * 3. Open Google Apps Script (script.google.com)
 * 4. Create a new project and paste this code
 * 5. Replace SHEET_ID with your Google Sheet ID
 * 6. Deploy as Web App with execute permissions for "Anyone"
 * 7. Copy the Web App URL and use it as GOOGLE_SHEETS_WEBHOOK_URL
 */

// Replace this with your Google Sheet ID (found in the URL)
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
const SHEET_NAME = 'Leads'; // Name of the sheet tab

/**
 * Main function that handles POST requests
 */
function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', e.postData.contents);
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.fullName || !data.email || !data.message) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Missing required fields'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Write data to Google Sheets
    const result = writeToSheet(data);
    
    if (result.success) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: true,
          message: 'Data successfully written to Google Sheets',
          rowNumber: result.rowNumber
        }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: result.error
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
  } catch (error) {
    console.error('Error processing POST request:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: 'Internal server error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Function to write lead data to Google Sheets
 */
function writeToSheet(data) {
  try {
    // Open the Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      throw new Error(`Sheet "${SHEET_NAME}" not found`);
    }
    
    // Prepare the row data according to the column structure
    const rowData = [
      data.timestamp || new Date().toISOString(),  // Timestamp
      data.fullName || '',                         // Full Name
      data.email || '',                            // Email
      data.phone || '',                            // Phone
      data.message || '',                          // Message
      data.ipAddress || '',                        // IP Address
      data.userAgent || '',                        // User Agent
      data.sourcePage || '',                       // Source Page
      data.utmSource || '',                        // UTM Source
      data.utmMedium || '',                        // UTM Medium
      data.utmCampaign || ''                       // UTM Campaign
    ];
    
    // Add the row to the sheet
    const newRow = sheet.appendRow(rowData);
    const rowNumber = sheet.getLastRow();
    
    console.log(`Successfully added lead data to row ${rowNumber}`);
    
    return {
      success: true,
      rowNumber: rowNumber
    };
    
  } catch (error) {
    console.error('Error writing to sheet:', error);
    return {
      success: false,
      error: error.toString()
    };
  }
}

/**
 * Function to handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Writing9 Lead Capture Webhook is running',
      timestamp: new Date().toISOString(),
      parameters: e.parameter
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function to verify the setup
 */
function testWebhook() {
  const testData = {
    fullName: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    message: 'This is a test message from Google Apps Script',
    timestamp: new Date().toISOString(),
    ipAddress: '127.0.0.1',
    userAgent: 'Test User Agent',
    sourcePage: 'https://example.com',
    utmSource: 'test',
    utmMedium: 'script',
    utmCampaign: 'setup'
  };
  
  const result = writeToSheet(testData);
  console.log('Test result:', result);
  
  return result;
}

/**
 * Function to set up the sheet headers (run once)
 */
function setupSheetHeaders() {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      throw new Error(`Sheet "${SHEET_NAME}" not found`);
    }
    
    // Define the headers
    const headers = [
      'Timestamp',
      'Full Name',
      'Email',
      'Phone',
      'Message',
      'IP Address',
      'User Agent',
      'Source Page',
      'UTM Source',
      'UTM Medium',
      'UTM Campaign'
    ];
    
    // Set the headers in the first row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers]);
    
    // Format the header row
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4285f4');
    headerRange.setFontColor('white');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, headers.length);
    
    console.log('Sheet headers set up successfully');
    return { success: true };
    
  } catch (error) {
    console.error('Error setting up headers:', error);
    return { success: false, error: error.toString() };
  }
}
