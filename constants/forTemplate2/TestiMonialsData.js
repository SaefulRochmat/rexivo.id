import Avatar1 from "@/public/Images/avatar1.png"
import Avatar2 from "@/public/Images/avatar2.png"
import Avatar3 from "@/public/Images/avatar3.png"
import Saeful from "@/public/Images/Saeful.png"
let testimonials = [
  {
    name: "John Doe",
    description: "Magic UI sangat membantu project saya jadi lebih cepat 🚀",
    time: "2 hari lalu",
    avatar: Avatar1,
  },
  {
    name: "Jane Smith",
    description: "UI komponenya keren banget, gampang dipake 👍",
    time: "5 hari lalu",
    avatar: Avatar2,
  },
  {
    name: "Michael Lee",
    description: "Sekarang kerjaan desain front-end jadi lebih efisien 🔥",
    time: "1 minggu lalu",
    avatar: Avatar3,
  },
];

// Gandakan biar banyak (100x) untuk efek scroll
testimonials = Array.from({ length: 100 }, () => testimonials).flat();

export default testimonials;
