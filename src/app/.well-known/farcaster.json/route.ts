function withValidProperties(properties: Record<string, undefined | string | string[]>) {
    return Object.fromEntries(
        Object.entries(properties).filter(([_, value]) => (Array.isArray(value) ? value.length > 0 : !!value))
    );
    }
    
    export async function GET() {
    const URL = process.env.NEXT_PUBLIC_URL as string;
    return Response.json({
        "accountAssociation": {  // these will be added in step 5
          "header": "",
          "payload": "",
          "signature": ""
        },
        "miniapp": {
          "version": "1",
          "name": "Tap Game",
          "homeUrl": "https://miniapp-game-one.vercel.app",
          "iconUrl": "https://miniapp-game-one.vercel.app/miniapp-logo.png",
          "splashImageUrl": "https://miniapp-game-one.vercel.app/miniapp-logo.png",
          "splashBackgroundColor": "#000000",
          "webhookUrl": "https://ex.co/api/webhook",
          "subtitle": "Fast, fun, social",
          "description": "A fast, fun way to challenge friends in real time.",
          "screenshotUrls": [
            "https://miniapp-game-one.vercel.app/miniapp-logo.png",
            "https://miniapp-game-one.vercel.app/miniapp-logo.png",
            "https://miniapp-game-one.vercel.app/miniapp-logo.png"
          ],
          "primaryCategory": "games",
          "tags": ["example", "miniapp", "baseapp"],
          "heroImageUrl": "https://miniapp-game-one.vercel.app/miniapp-logo.png",
          "tagline": "Play instantly",
          "ogTitle": "Tap Game",
          "ogDescription": "Challenge friends in real time.",
          "ogImageUrl": "https://miniapp-game-one.vercel.app/miniapp-logo.png",
          "noindex": true
        }
        });
    }