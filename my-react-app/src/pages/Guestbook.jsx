import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Fetch messages
  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setMessages(data);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !message) return;

    await supabase.from("guestbook").insert([
      { name, message }
    ]);

    setName("");
    setMessage("");
    fetchMessages();
  }

  return (
    <div style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1>Guestbook</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "40px" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />

        <input
          type="text"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", width: "250px" }}
        />

        <button type="submit" style={{ padding: "10px 20px" }}>
          Send
        </button>
      </form>

      <div>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              marginBottom: "20px",
              padding: "15px",
              background: "#f4f4f4",
              borderRadius: "10px"
            }}
          >
            <strong>{msg.name}</strong>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}