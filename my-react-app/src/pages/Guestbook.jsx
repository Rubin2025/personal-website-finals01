import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch messages
  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    setLoading(true);

    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setMessages(data);
    } else {
      console.error("Error fetching messages:", error);
    }

    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Prevent empty or spaces-only messages
    if (!name.trim() || !message.trim()) return;

    const { error } = await supabase.from("guestbook").insert([
      { name: name.trim(), message: message.trim() }
    ]);

    if (error) {
      console.error("Insert error:", error);
      return;
    }

    setName("");
    setMessage("");
    fetchMessages();
  }

  return (
    <div
      style={{
        padding: "60px 20px",
        textAlign: "center",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>Guestbook</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "40px" }}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            width: "250px",
            height: "60px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            resize: "none"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </form>

      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                marginBottom: "20px",
                padding: "15px",
                background: "rgba(255,255,255,0.95)",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                textAlign: "left",
                color: "#222" // 
              }}
            >
              <strong style={{ color: "#111" }}>{msg.name}</strong>
              <p style={{ marginTop: "8px", color: "#333" }}>
                {msg.message}
              </p>

              {msg.created_at && (
                <small style={{ opacity: 0.6 }}>
                  {new Date(msg.created_at).toLocaleString()}
                </small>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}