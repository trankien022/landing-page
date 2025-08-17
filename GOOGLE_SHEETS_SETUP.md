# Google Sheets Integration Setup Guide

This guide will walk you through setting up Google Sheets integration for the Writing9 landing page lead capture form.

## Overview

The integration works by sending form data from the Next.js API to a Google Apps Script Web App, which then writes the data to a Google Sheet in real-time.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Writing9 Leads" (or any name you prefer)
4. Set up the column headers in the first row:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Full Name | Email | Phone | Message | IP Address | User Agent | Source Page | UTM Source | UTM Medium | UTM Campaign |

5. Copy the Google Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
   - Copy the `SHEET_ID` part

## Step 2: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script/webhook.gs`
4. Update the `SHEET_ID` constant with your Google Sheet ID:
   ```javascript
   const SHEET_ID = 'your_actual_sheet_id_here';
   ```
5. Save the project (Ctrl+S or Cmd+S)
6. Name your project "Writing9 Lead Webhook"

## Step 3: Deploy as Web App

1. In Google Apps Script, click "Deploy" → "New deployment"
2. Choose type: "Web app"
3. Fill in the deployment settings:
   - **Description**: "Writing9 Lead Capture Webhook"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. **Important**: Copy the Web App URL that appears
   - Format: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

## Step 4: Test the Setup

1. In Google Apps Script, run the `setupSheetHeaders()` function:
   - Select the function from the dropdown
   - Click the "Run" button
   - This will format your sheet headers properly

2. Test the webhook by running `testWebhook()`:
   - This will add a test row to your sheet
   - Check your Google Sheet to verify the data appears

## Step 5: Configure Environment Variables

1. In your project, create a `.env.local` file (or update existing one):
   ```env
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

2. Replace `YOUR_SCRIPT_ID` with the actual script ID from your Web App URL

## Step 6: Deploy to Vercel

1. Push your code to GitHub (if not already done)
2. In Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add: `GOOGLE_SHEETS_WEBHOOK_URL` with your Web App URL
3. Redeploy your application

## Testing the Complete Flow

1. Visit your deployed landing page
2. Fill out and submit the contact form
3. Check your Google Sheet - the data should appear within seconds
4. Verify all columns are populated correctly:
   - Timestamp should be in ISO format
   - UTM parameters should be captured if present in URL
   - IP address and user agent should be recorded

## Troubleshooting

### Common Issues

**1. "Service configuration error" message**
- Check that `GOOGLE_SHEETS_WEBHOOK_URL` is set correctly in environment variables
- Verify the Web App URL is accessible

**2. Form submits but no data in sheet**
- Check Google Apps Script execution logs (View → Logs)
- Verify the `SHEET_ID` in the script matches your Google Sheet
- Ensure the sheet name is "Leads" or update the `SHEET_NAME` constant

**3. Permission errors**
- Make sure the Web App is deployed with "Anyone" access
- Check that the Google Apps Script has permission to access your sheet

**4. Missing UTM parameters**
- UTM parameters are only captured if present in the URL when the page loads
- Test with URLs like: `https://yoursite.com?utm_source=test&utm_medium=email&utm_campaign=launch`

### Debugging Steps

1. **Check Google Apps Script Logs**:
   - In Google Apps Script, go to "Executions" to see recent runs
   - Look for error messages or failed executions

2. **Test the Web App directly**:
   - Visit your Web App URL in a browser
   - You should see a JSON response confirming it's running

3. **Verify API endpoint**:
   - Check browser developer tools for API call responses
   - Look for any error messages in the console

## Data Privacy and Security

- The Google Apps Script runs under your Google account
- Only you have access to the Google Sheet data
- The Web App URL should be kept secure (don't share publicly)
- Consider setting up data retention policies for GDPR compliance

## Advanced Configuration

### Custom Sheet Name
To use a different sheet name, update the `SHEET_NAME` constant in the Google Apps Script:
```javascript
const SHEET_NAME = 'Your Custom Sheet Name';
```

### Additional Data Fields
To capture additional form fields, update both:
1. The `writeToSheet()` function in Google Apps Script
2. The API endpoint in `/api/lead/route.ts`
3. The form component to include new fields

### Data Validation
The Google Apps Script includes basic validation for required fields. You can enhance this by adding custom validation rules in the `doPost()` function.

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Google Apps Script execution logs
3. Verify all environment variables are set correctly
4. Test each component individually (form → API → Google Apps Script → Google Sheets)
