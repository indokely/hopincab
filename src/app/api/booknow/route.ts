import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// --- FOR LOCAL DEVELOPMENT ONLY ---
//  import path from 'path';
//  import { promises as fs } from 'fs';

const SHEET_ID = '1wyJxoJRA1JrLgkKzyZRwJQQVU7Be1F1dwMWumtnSf5Y'; // Use your actual sheet ID
const TAB_NAME = 'Sheet2'; // Your bookings tab

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, mobile, transferType, pickupDate, pickupTime, pickupLocation, dropoffLocation, numPassengers, numBags, message } = body;

    // --- FOR LOCAL DEVELOPMENT ONLY ---
      // const KEY_PATH = path.join(process.cwd(), 'google-sheets-key.json');
      // const credentialsRaw = await fs.readFile(KEY_PATH, 'utf8');
      // const credentials = JSON.parse(credentialsRaw);

    // --- FOR VERCEL DEPLOYMENT ONLY ---
    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_KEY_JSON || '{}');
    // ^^^ Uncomment this line and comment out the above block when deploying to Vercel
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${TAB_NAME}!A:K`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          name, 
          email, 
          mobile, 
          transferType, 
          pickupDate, 
          pickupTime, 
          pickupLocation, 
          dropoffLocation,
          numPassengers,
          numBags,
          message
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Google Sheets error:', error);
    function isErrorWithMessage(err: unknown): err is { message: string } {
      return (
        typeof err === 'object' &&
        err !== null &&
        'message' in err &&
        typeof (err as { message: unknown }).message === 'string'
      );
    }
    let message = 'Unknown error';
    if (isErrorWithMessage(error)) {
      message = error.message;
    }
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
