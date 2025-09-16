// constants/forTemplate2/testimonials.js

let testimonials = [
  {
    name: "John Doe",
    description: "Magic UI sangat membantu project saya jadi lebih cepat 🚀",
    time: "2 hari lalu",
    avatar: "/images/avatar1.png",
  },
  {
    name: "Jane Smith",
    description: "UI komponenya keren banget, gampang dipake 👍",
    time: "5 hari lalu",
    avatar: "/images/avatar2.png",
  },
  {
    name: "Michael Lee",
    description: "Sekarang kerjaan desain front-end jadi lebih efisien 🔥",
    time: "1 minggu lalu",
    avatar: "/images/avatar3.png",
  },
];

// Gandakan biar banyak (100x) untuk efek scroll
testimonials = Array.from({ length: 100 }, () => testimonials).flat();

export default testimonials;
