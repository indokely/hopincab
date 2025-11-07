import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Your Google Sheet ID
const SHEET_ID = '1wyJxoJRA1JrLgkKzyZRwJQQVU7Be1F1dwMWumtnSf5Y'; // <-- REPLACE THIS

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, mobile, message } = body;

    // Read credentials from environment variable
    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_KEY_JSON || '{}');

    // Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });

    // Append the row
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:D', // Adjust if your sheet/tab name is different
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, mobile, message]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Google Sheets error:', error);
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      message = (error as { message: string }).message;
    }
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
