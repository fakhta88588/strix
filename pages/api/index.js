export default function handler(req, res) {
  res.status(200).json({ ok: true, service: "voice-chat-frontend", route: "/api" });
}
