'use client';
import { useWhatsappChat } from "@/hooks/forComponentsTemplate/useWhatsappChat";

const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp tujuan

export default function WhatsappChatWidget() {
  const {
    isOpen,
    messages,
    input,
    handleToggle,
    handleInputChange,
    handleSend,
    handleContinueToWhatsapp,
  } = useWhatsappChat(whatsappNumber);

  return (
    <>
      {/* Floating WhatsApp Icon */}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 9999,
          cursor: "pointer",
        }}
        onClick={handleToggle}
      >
        <svg width={56} height={56} viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="28" fill="#25D366" />
          <path d="M39.6 33.6c-.6-.3-3.6-1.8-4.2-2.1-.6-.3-1.2-.3-1.8.3-.6.6-1.2 1.2-1.5 1.5-.3.3-.6.3-1.2 0-3.3-1.5-5.7-5.1-6-5.4-.3-.3-.3-.6 0-.9.3-.3.6-.9.9-1.2.3-.3.3-.6.6-.9.3-.3.3-.6 0-.9-.3-.3-1.8-4.2-2.1-4.8-.3-.6-.6-.6-1.2-.6h-1.2c-.3 0-.9.3-1.2.6-.9.9-1.5 2.1-1.5 3.3 0 1.2.3 2.4.9 3.6 1.2 2.1 3.3 4.5 6.3 6 .9.3 1.8.6 2.7.6 1.2 0 2.1-.3 3-.9.6-.3 1.2-.9 1.5-1.2.3-.3.3-.6.3-.9v-1.2c0-.6 0-.9-.6-1.2z" fill="#fff"/>
        </svg>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: 320,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            zIndex: 10000,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ background: "#25D366", color: "#fff", padding: 16, fontWeight: "bold" }}>
            Chat WhatsApp
            <button
              onClick={handleToggle}
              style={{
                float: "right",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: 18,
                cursor: "pointer",
              }}
              aria-label="Tutup"
            >
              ×
            </button>
          </div>
          <div style={{ flex: 1, padding: 16, maxHeight: 260, overflowY: "auto" }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: 8,
                  textAlign: msg.from === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: msg.from === "user" ? "#dcf8c6" : "#f0f0f0",
                    color: "#222",
                    borderRadius: 8,
                    padding: "6px 12px",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", borderTop: "1px solid #eee", padding: 8 }}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Ketik pesan..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: 8,
                fontSize: 14,
              }}
            />
            <button
              onClick={handleSend}
              style={{
                background: "#25D366",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "0 16px",
                marginLeft: 8,
                cursor: "pointer",
              }}
            >
              Kirim
            </button>
          </div>
          <button
            onClick={handleContinueToWhatsapp}
            style={{
              background: "#128C7E",
              color: "#fff",
              border: "none",
              borderRadius: 0,
              padding: 12,
              width: "100%",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Lanjutkan ke WhatsApp
          </button>
        </div>
      )}
    </>
  );
}