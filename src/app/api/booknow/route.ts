import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sendEmail } from '@/lib/email';

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
    
    // Format the email content with YC startup style
    const emailHtml = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; color: #1a1a1a; line-height: 1.6; text-align: left;">
      <div style="background-color: #f6f9fc; padding: 20px 0; text-align: center; border-bottom: 1px solid #e1e4e8;">
        <h1 style="margin: 0; font-size: 20px; font-weight: 600; color: #1a1a1a;">🚕 New Ride Booking</h1>
        <p style="color: #6b7280; margin: 4px 0 0; font-size: 14px;">${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      
      <div style="padding: 32px;">
        <div style="background: white; border-radius: 8px; border: 1px solid #e1e4e8; padding: 24px; margin-bottom: 24px;">
          <h2 style="font-size: 18px; font-weight: 600; margin: 0 0 16px; color: #1a1a1a;">Booking Details</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div>
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 4px;">Passenger</p>
              <p style="font-weight: 500; margin: 0;">${name}</p>
            </div>
            <div>
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 4px;">Contact</p>
              <p style="margin: 0;">${mobile} • ${email}</p>
            </div>
          </div>
          
          <div style="height: 1px; background-color: #e1e4e8; margin: 16px 0;"></div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div>
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 4px;">Pickup</p>
              <p style="font-weight: 500; margin: 0;">${pickupLocation}</p>
              <p style="color: #6b7280; font-size: 14px; margin: 4px 0 0;">${new Date(pickupDate).toLocaleDateString()} • ${pickupTime}</p>
            </div>
            <div>
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 4px;">Drop-off</p>
              <p style="font-weight: 500; margin: 0;">${dropoffLocation}</p>
              <p style="color: #6b7280; font-size: 14px; margin: 4px 0 0;">${transferType === 'oneway' ? 'One Way' : 'Return Trip'}</p>
            </div>
          </div>
          
          <div style="display: flex; align-items: center; margin-top: 16px; padding-top: 16px; border-top: 1px solid #f0f0f0;">
            <div style="flex: 1;">
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 4px;">Passengers</p>
              <p style="font-weight: 500; margin: 0;">${numPassengers}</p>
            </div>
            <div style="width: 1px; height: 40px; background-color: #e5e7eb; margin: 0 24px;"></div>
            <div style="flex: 1;">
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 4px;">Bags</p>
              <p style="font-weight: 500; margin: 0;">${numBags}</p>
            </div>
          </div>
          
          ${message ? `
          <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 6px; border-left: 3px solid #3b82f6;">
            <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px; font-weight: 500;">Special Instructions</p>
            <p style="margin: 0; white-space: pre-line;">${message}</p>
          </div>
          ` : ''}
        </div>
        
        <div style="text-align: left; color: #6b7280; font-size: 14px; margin-top: 32px;">
          <p style="margin: 0 0 8px;">Need to make changes to this booking?</p>
          <p style="margin: 0;">Reply directly to this email Resv@hopincab.com or call +64 21 245 8155<p>
        </div>
      </div>
      
      <div style="background-color: #f6f9fc; padding: 24px; text-align: left; font-size: 14px; color: #6b7280; border-top: 1px solid #e1e4e8;">
        <p style="margin: 0 0 8px;">© ${new Date().getFullYear()} ${process.env.COMPANY_NAME || 'HopInCab'}. All rights reserved.</p>
        <p style="margin: 0; font-size: 13px; color: #9ca3af;">
          ${process.env.COMPANY_ADDRESS || '47 garton drive, Massey, Auckland, 0614, NZ'}
        </p>
      </div>
    </div>
    `;
    
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
