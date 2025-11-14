import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sendEmail } from '@/lib/email';

// Your Google Sheet ID
const SHEET_ID = '1wyJxoJRA1JrLgkKzyZRwJQQVU7Be1F1dwMWumtnSf5Y'; // <-- REPLACE THIS


// Email where contact form submissions will be sent
const RECIPIENT_EMAIL = process.env.CONTACT_FORM_RECIPIENT || 'rajkumar.mundel@gmail.com';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, mobile, message } = body;

    // Send email notification
    const emailHtml = `      
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    await sendEmail({
      to: RECIPIENT_EMAIL,
      subject: `Message from ${name}`,
      html: emailHtml,
    });

    // The rest of your Google Sheets code remains the same
    // --- FOR LOCAL DEVELOPMENT ONLY ---
    // import path from 'path';
    // import { promises as fs } from 'fs';
    // const KEY_PATH = path.join(process.cwd(), 'google-sheets-key.json');
    // const credentialsRaw = await fs.readFile(KEY_PATH, 'utf8');
    // const credentials = JSON.parse(credentialsRaw);

    // --- FOR VERCEL DEPLOYMENT ONLY ---
    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_KEY_JSON || '{}');
    // ^^^ Uncomment this line and comment out the above block when deploying to Vercel

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
