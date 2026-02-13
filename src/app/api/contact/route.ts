import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // TODO: Implement email sending logic here
    console.log('Contact form submission:', body)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Messaggio inviato con successo' 
    })
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Errore nell\'invio del messaggio' 
    }, { status: 500 })
  }
}
