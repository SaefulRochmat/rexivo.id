'use client';
import { useWhatsappChat } from "@/hooks/forComponentsTemplate/useWhatsappChat";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "6281223487355"; // Ganti dengan nomor WhatsApp tujuan

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
          background: "#25D366",
          borderRadius: "50%",
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
          transition: "transform 0.2s",
        }}
        onClick={handleToggle}
        aria-label="Buka chat WhatsApp"
      >
        <FaWhatsapp size={32} color="#fff" />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: 340,
            maxWidth: "95vw",
            background: "#f0f0f0",
            borderRadius: 16,
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            zIndex: 10000,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            border: "1.5px solid #e0e0e0",
          }}
        >
          {/* Header */}
          <div style={{
            background: "linear-gradient(90deg, #075e54 0%, #25d366 100%)",
            color: "#fff",
            padding: "14px 16px 12px 16px",
            fontWeight: 600,
            fontSize: 17,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1.5px solid #25d366",
          }}>
            <span style={{display: "flex", alignItems: "center", gap: 8}}>
              <FaWhatsapp size={22} style={{marginRight: 4}} />
              Chat WhatsApp
            </span>
            <button
              onClick={handleToggle}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: 22,
                cursor: "pointer",
                lineHeight: 1,
                marginLeft: 8,
              }}
              aria-label="Tutup"
            >
              ×
            </button>
          </div>
          {/* Chat Body */}
          <div style={{
            flex: 1,
            padding: 12,
            maxHeight: 320,
            overflowY: "auto",
            background: "#ece5dd",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                }}
              >
                <span
                  style={{
                    background: msg.from === "user" ? "#dcf8c6" : "#fff",
                    color: "#222",
                    borderRadius: msg.from === "user" ? "12px 12px 4px 12px" : "12px 12px 12px 4px",
                    padding: "8px 13px",
                    fontSize: 15,
                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                    maxWidth: "80%",
                    wordBreak: "break-word",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          {/* Input Area */}
          <div style={{
            display: "flex",
            borderTop: "1.5px solid #e0e0e0",
            padding: 8,
            background: "#f7f7f7",
            alignItems: "center",
            gap: 8,
          }}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Ketik pesan..."
              style={{
                flex: 1,
                border: "1.5px solid #e0e0e0",
                outline: "none",
                padding: "8px 12px",
                fontSize: 15,
                borderRadius: 8,
                background: "#fff",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                background: "#25D366",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 18px",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                transition: "background 0.2s",
              }}
            >
              Kirim
            </button>
          </div>
          {/* Continue to WhatsApp */}
          <button
            onClick={handleContinueToWhatsapp}
            style={{
              background: "#128C7E",
              color: "#fff",
              border: "none",
              borderRadius: 0,
              padding: 13,
              width: "100%",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              letterSpacing: 0.2,
              borderTop: "1.5px solid #25d366",
            }}
          >
            Lanjutkan ke WhatsApp
          </button>
          {/* Responsive style */}
          <style>{`
            @media (max-width: 600px) {
              .whatsapp-chat-widget {
                right: 8px !important;
                bottom: 8px !important;
                width: 98vw !important;
                max-width: 98vw !important;
                border-radius: 0 !important;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}