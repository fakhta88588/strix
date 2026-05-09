export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    rooms: [
      { id: "public-lounge", name: "Public Lounge", usersOnline: 128, type: "voice" },
      { id: "creators-club", name: "Creators Club", usersOnline: 42, type: "voice" },
      { id: "friends-room", name: "Friends Room", usersOnline: 16, type: "voice" }
    ]
  });
}
