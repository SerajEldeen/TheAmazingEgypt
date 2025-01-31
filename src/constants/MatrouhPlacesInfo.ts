type MatrouhPlaces = {
  header: string;
  points: string[];
  images: { no: string; src: string }[];
};
const PlacesInfo: MatrouhPlaces[] = [
  {
    header: "Siwa Oasis",
    points: [
      "Siwa Oasis is known for its tranquil beauty, palm groves, and natural springs.Siwa Oasis is known for its tranquil beauty, palm groves, and natural springs.",
      "Historically significant as an ancient trade route stop and home to the Oracle of Amun, which Alexander the Great famously consulted.",
      "The Siwan people have a distinct Berber heritage, reflected in their language, traditional crafts, and unique festivals.",
      "Visitors can enjoy sandboarding, desert safaris, and exploring the surrounding Great Sand Sea dunes.",
      "Siwa’s remote location makes it ideal for stargazing, offering breathtaking views of the night sky.",
    ],
    images: [
      { no: "first-img", src: "/Matrouh/Matrouh1.jpg" },
      { no: "second-img", src: "/Matrouh/Matrouh2.jpg" },
      { no: "3rd-img", src: "/Matrouh/Matrouh3.jpg" },
      { no: "4th-img", src: "/Matrouh/Matrouh4.jpg" },
      { no: "5th-img", src: "/Matrouh/Matrouh5.jpg" },
    ],
  },
  {
    header: "Ageba Beach",
    points: [
      "Known for its unique rock formations and stunning cliffs that rise dramatically from the sea.",
      "Famous for its crystal-clear waters that shimmer in shades of turquoise and blue, perfect for swimming and photography.",
      "The soft, golden sands of the beach provide a serene spot for relaxation and sunbathing.",
      "The beach’s natural beauty makes it a favorite for nature lovers and adventurers who enjoy exploring its caves and rugged cliffs.",
    ],
    images: [
      { no: "first-img", src: "/Matrouh/Matrouh6.jpg" },
      { no: "second-img", src: "/Matrouh/Matrouh7.jpg" },
      { no: "3rd-img", src: "/Matrouh/Matrouh8.jpg" },
      { no: "4th-img", src: "/Matrouh/Matrouh9.jpg" },
    ],
  },
  {
    header: "Cleopatra Beach",
    points: [
      "Named after Cleopatra VII, the famous Egyptian queen, who is said to have visited the beach. It is believed she swam in its crystal-clear waters.",
      "The beach is known for its calm, shallow waters, making it ideal for swimming and families.",
      "The clear waters make it an ideal location for snorkeling, diving, and other water activities.",
    ],
    images: [
      { no: "first-img", src: "/Matrouh/Matrouh10.jpg" },
      { no: "second-img", src: "/Matrouh/Matrouh11.jpg" },
      { no: "3rd-img", src: "/Matrouh/Matrouh12.jpg" },
    ],
  },
  {
    header: "White Desert (Farafra)",
    points: [
      "White Desert is known for its unique white limestone formations that create a surreal, almost otherworldly landscape.",
      "The desert features whimsical rock formations shaped by wind erosion,offering stunning views especially at sunrise and sunset.",
      "Despite its harsh environment, the White Desert is home to a range of desert wildlife, including foxes, gazelles, and desert birds.",
      "Due to its isolation, the White Desert offers an unspoiled natural experience, providing a sense of tranquility and connection to the ancient desert landscape.",
    ],
    images: [
      { no: "first-img", src: "/Matrouh/Matrouh13.jpg" },
      { no: "second-img", src: "/Matrouh/Matrouh14.jpg" },
      { no: "3rd-img", src: "/Matrouh/Matrouh15.jpg" },
      { no: "4th-img", src: "/Matrouh/Matrouh16.jpg" },
    ],
  },
  {
    header: "Bedouin Culture Tours",
    points: [
      "Experience the traditional Bedouin lifestyle through guided tours that showcase the customs, history, and daily life of Egypt's indigenous desert dwellers.",
      "Visitors are welcomed into Bedouin camps, where they can enjoy authentic meals made from local ingredients, often cooked over an open fire, and sip traditional mint tea.",
      " Tour participants can learn about Bedouin crafts such as weaving, leatherwork, and pottery, and even purchase handmade items as souvenirs.",
      "Enjoy traditional Bedouin music and dance performances, where local musicians play instruments like the rababa and tabla, and visitors may even be invited to join in.",
    ],
    images: [
      { no: "first-img", src: "/Matrouh/Matrouh17.jpg" },
      { no: "second-img", src: "/Matrouh/Matrouh18.jpg" },
      { no: "3rd-img", src: "/Matrouh/Matrouh19.webp" },
      { no: "4th-img", src: "/Matrouh/Matrouh20.jpg" },
    ],
  },
];

export default PlacesInfo;
