import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sendEmail } from '@/lib/email';
import { getBookingConfirmationEmail } from '@/app/emails/booking-confirmation';

function isErrorWithMessage(err: unknown): err is { message: string } {
  return (
    typeof err === 'object' &&
    err !== null &&
    'message' in err &&
    typeof (err as { message: unknown }).message === 'string'
  );
}

// --- FOR LOCAL DEVELOPMENT ONLY ---
//  import path from 'path';
//  import { promises as fs } from 'fs';

const SHEET_ID = '1wyJxoJRA1JrLgkKzyZRwJQQVU7Be1F1dwMWumtnSf5Y'; // Use your actual sheet ID
const TAB_NAME = 'Sheet2'; // Your bookings tab

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, mobile, transferType, pickupDate, pickupTime, pickupLocation, dropoffLocation, numPassengers, numBags, message } = body;
    
    // Email recipient from environment variable or default
    const RECIPIENT_EMAIL = process.env.CONTACT_FORM_RECIPIENT || 'rajkumar.mundel@gmail.com';
    
    // Generate email content using the template
    const emailHtml = getBookingConfirmationEmail({
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
      message,
    });
    
    // Send email notification
    await sendEmail({
      to: RECIPIENT_EMAIL,
      subject: `New Booking from ${name}`,
      html: emailHtml,
    });

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

    // Save to Google Sheets
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
    console.error('Error processing booking:', error);
    let message = 'An error occurred while processing your booking';
    if (isErrorWithMessage(error)) {
      message = error.message;
    }
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
