type FayoumPlaces = {
  header: string;
  points: string[];
  images: { no: string; src: string }[];
};
const PlacesInfo: FayoumPlaces[] = [
  {
    header: "Wadi El Rayan",
    points: [
      "Wadi El Rayan is a protected area known for its unique desert ecosystem, natural springs, and stunning landscapes.",
      "Home to Egypt's only waterfalls, created by the connection between two man-made lakes, these waterfalls are a key attraction and a rare sight in the desert.",
      "Popular for sandboarding, dune bashing, and off-road driving, Wadi El Rayan offers a thrilling desert adventure experience.",
      "Close to the artistic Tunis Village, known for its pottery workshops and charming atmosphere, making it a great addition to a Wadi El Rayan trip.",
      "The calm surroundings, combined with the natural beauty of the lakes and desert, make it a peaceful retreat for visitors seeking a break from city life.",
    ],
    images: [
      { no: "first-img", src: "/Fayoum/Fayoum1.jpg" },
      { no: "second-img", src: "/Fayoum/Fayoum2.jpg" },
      { no: "3rd-img", src: "/Fayoum/Fayoum3.jpg" },
      { no: "4th-img", src: "/Fayoum/Fayoum4.jpg" },
      { no: "5th-img", src: "/Fayoum/Fayoum5.jpg" },
      { no: "6th-img", src: "/Fayoum/Fayoum6.jpg" },
    ],
  },
  {
    header: "Wadi Al-Hitan",
    points: [
      "Wadi Al-Hitan is a UNESCO World Heritage Site,recognized for its unparalleled fossil discoveries ",
      "Known for housing fossilized remains of prehistoric whales (Basilosaurus and Dorudon species) that date back around 40-50 million years, offering a glimpse into Earth's evolutionary history.",
      "The site features stunning sandstone formations, fossils of ancient sharks, crocodiles, turtles, and mangroves, illustrating the area's history as a prehistoric sea.",
      "Considered one of the world’s most important open-air museums for studying the evolution of whales from land-based to aquatic mammals.",
      "Visitors can explore the desert landscape through hiking, 4x4 safaris, and camping under the stars, making it a destination for both education and adventure.",
    ],
    images: [
      { no: "first-img", src: "/Fayoum/Fayoum7.jpg" },
      { no: "second-img", src: "/Fayoum/Fayoum8.jpg" },
      { no: "3rd-img", src: "/Fayoum/Fayoum9.jpg" },
      { no: "4th-img", src: "/Fayoum/Fayoum10.jpg" },
    ],
  },
  {
    header: "Lake Qarun",
    points: [
      "One of the oldest natural lakes in the world, dating back to Pharaonic times",
      "Known for its fishing opportunities, with species like tilapia and catfish thriving in the lake.",
      "Popular for boat rides, picnics, and waterfront relaxation, Lake Qarun offers a peaceful retreat for visitors.",
      " Surrounded by picturesque desert landscapes, the lake provides a serene setting for nature lovers and photographers.",
    ],
    images: [
      { no: "first-img", src: "/Fayoum/Fayoum11.jpg" },
      { no: "second-img", src: "/Fayoum/Fayoum12.jpg" },
      { no: "3rd-img", src: "/Fayoum/Fayoum13.jpg" },
    ],
  },
  {
    header: "Fayoum Pyramid (Hawara Pyramid) ",
    points: [
      "Built by Pharaoh Amenemhat III: The Hawara Pyramid was constructed during the 12th Dynasty of the Middle Kingdom, around 1850 BCE, as the pharaoh’s burial place.",
      "Over the centuries, the pyramid’s limestone casing was stripped, leaving its core exposed and contributing to its ruined appearance.",
      "The pyramid's design and the remnants of the labyrinth demonstrate the ingenuity of ancient Egyptian engineers and builders.",
      "The Hawara Pyramid is a significant example of Middle Kingdom pyramid construction, reflecting the period's shift in architectural style and materials.",
    ],
    images: [
      { no: "first-img", src: "/Fayoum/Fayoum14.jpg" },
      { no: "second-img", src: "/Fayoum/Fayoum15.jpg" },
      { no: "3rd-img", src: "/Fayoum/Fayoum16.jpg" },
    ],
  },
];

export default PlacesInfo;
