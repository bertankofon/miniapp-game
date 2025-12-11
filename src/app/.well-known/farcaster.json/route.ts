function withValidProperties(properties: Record<string, undefined | string | string[]>) {
    return Object.fromEntries(
        Object.entries(properties).filter(([_, value]) => (Array.isArray(value) ? value.length > 0 : !!value))
    );
    }
    
    export async function GET() {
    return Response.json({
        "accountAssociation": {
            "header": "eyJmaWQiOi0xLCJ0eXBlIjoiYXV0aCIsImtleSI6IjB4NkY5NTM5QjM2QzFFNzlhODQyZTgyQTg3RWU5NzI3MTY3ODk2ZmQ4QyJ9",
            "payload": "eyJkb21haW4iOiJtaW5pYXBwLWdhbWUtb25lLnZlcmNlbC5hcHAifQ",
            "signature": "AAAAAAAAAAAAAAAAyhG94Fl3s2MRZwKIYr4qFzl2yhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkSCrVbLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAul7REO_bo9AFv8iC11NYrLu4WEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVQ_-6NvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADmDbSz2Sbn5j1OOJfAz-k2DILJgV-fpTkrypEwoRYxy9dYuZbUTuFnD0PGhQlRus3m1PVayKmbC9k3ndljQyhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAA-FIQshzFAwL0d7pWaG0gGdybZ63hWwqMROytRWUz0BEOrSzgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABc3nHLDSdBSiR9j0oUSns_NVNxq7dXloVVif7yXlCwRw0Qz8Kp0i0o1LY5J31MgvF6pOL5hARuiXJxZPBWZP0jgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAl8ZgIay2xclZzG8RWZzuWvO8j9R0fus3XxDee9lRlVy8dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKeyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiNEdZUzlsZWhTUnRLZy1hS0VzU21aSE1mZThUZ29UMkdPWVdtNWZFUTBFSSIsIm9yaWdpbiI6Imh0dHBzOi8va2V5cy5jb2luYmFzZS5jb20iLCJjcm9zc09yaWdpbiI6ZmFsc2V9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSSZJJkkmSSZJJkkmSSZJJkkmSSZJJkkmSSZJJkkmSS"
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