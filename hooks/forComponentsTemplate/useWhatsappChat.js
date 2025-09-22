import { useState } from "react";

export const useWhatsappChat = (whatsappNumber) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Halo! Ada yang bisa kami bantu?" }
  ]);
  const [input, setInput] = useState("");

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    // Simulasi balasan bot sederhana
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Terima kasih, pesan Anda sudah kami terima." }
      ]);
    }, 800);
    setInput("");
  };

  const handleContinueToWhatsapp = () => {
    const userMsg = messages.filter((m) => m.from === "user").map((m) => m.text).join("\n");
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(userMsg || "Halo")}`;
    window.open(url, "_blank");
  };

  return {
    isOpen,
    messages,
    input,
    handleToggle,
    handleInputChange,
    handleSend,
    handleContinueToWhatsapp,
  };
};