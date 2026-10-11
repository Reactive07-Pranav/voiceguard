// Where the VoiceGuard backend lives.
//
//   ""  = the same server that serves this page (running `uvicorn backend.app:app` locally,
//         or the Docker image, which serves this UI itself)
//
// When this folder is hosted separately (e.g. on Vercel), put your backend's HTTPS URL here:
//
//   window.VOICEGUARD_API = "https://your-backend.example.com";
//
// The WebSocket address (wss://...) is derived from it automatically.
window.VOICEGUARD_API = "";
