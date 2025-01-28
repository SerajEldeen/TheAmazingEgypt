type SouthSinaiPlaces = {
  header: string;
  points: string[];
  images: { no: string; src: string }[];
};
const PlacesInfo: SouthSinaiPlaces[] = [
  {
    header: "Sharm El Sheikh",
    points: [
      "Known as one of the best scuba diving and snorkeling destinations in the world, with famous dive sites like Ras Mohammed National Park and Tiran Island offering vibrant coral reefs and abundant marine life",
      "The city offers a lively nightlife scene, with beachfront clubs, bars, and restaurants offering a mix of local and international cuisine.",
      "Home to numerous all-inclusive resorts and wellness centers, making it a prime destination for relaxation and rejuvenation.",
      "Visitors can enjoy exciting activities such as quad biking, camel rides, and jeep safaris through the surrounding desert landscapes.",
      "Famous for hosting international conferences, including the Sharm El-Sheikh Climate Change Conference and various business and cultural events.",
    ],
    images: [
      { no: "first-img", src: "/SouthSinai/SouthSinai1.jpg" },
      { no: "second-img", src: "/SouthSinai/SouthSinai2.jpg" },
      { no: "3rd-img", src: "/SouthSinai/SouthSinai3.jpg" },
      { no: "4th-img", src: "/SouthSinai/SouthSinai4.jpg" },
      { no: "5th-img", src: "/SouthSinai/SouthSinai5.jpg" },
      { no: "6th-img", src: "/SouthSinai/SouthSinai6.jpg" },
      { no: "7th-img", src: "/SouthSinai/SouthSinai7.jpg" },
    ],
  },
  {
    header: "Nuweiba",
    points: [
      "Nuweiba is known for its serene beaches and crystal-clear waters, making it a tranquil getaway.",
      "Popular for its vibrant coral reefs, Nuweiba offers excellent diving and snorkeling opportunities, with sites like Coral Island and the nearby Ras Abu Gallum.",
      "Nuweiba offers a quieter, more laid-back atmosphere, ideal for relaxation and nature lovers.",
      "Visitors can experience the Bedouin lifestyle, including traditional hospitality, cuisine, and cultural experiences, with many locals offering tours and services.",
      "Its combination of natural beauty, tranquility, and eco-friendly options makes Nuweiba a growing destination for eco-tourism and nature-based travel.",
    ],
    images: [
      { no: "first-img", src: "/SouthSinai/SouthSinai8.jpg" },
      { no: "second-img", src: "/SouthSinai/SouthSinai9.jpg" },
      { no: "3rd-img", src: "/SouthSinai/SouthSinai10.jpg" },
      { no: "4th-img", src: "/SouthSinai/SouthSinai11.jpg" },
    ],
  },
  {
    header: "Taba",
    points: [
      "Known for its luxurious resorts and pristine beaches, Taba is a peaceful retreat offering stunning views of the Red Sea and the Gulf of Aqaba.",
      "Taba is famous for its coral reefs, making it a prime destination for diving and snorkeling, with rich marine life and crystal-clear waters.",
      "The area is historically significant, with proximity to Pharaoh’s Island, where the medieval castle of the Crusader period stands, offering both history and scenic beauty.",
      "The town's relatively quiet atmosphere compared to other Red Sea destinations makes it a great choice for those seeking relaxation, nature, and seclusion.",
    ],
    images: [
      { no: "first-img", src: "/SouthSinai/SouthSinai12.jpg" },
      { no: "second-img", src: "/SouthSinai/SouthSinai13.jpg" },
      { no: "3rd-img", src: "/SouthSinai/SouthSinai14.jpg" },
      { no: "4th-img", src: "/SouthSinai/SouthSinai15.jpg" },
    ],
  },
  {
    header: "Mount St. Catherine",
    points: [
      " At 2,629 meters (8,625 feet), Mount St. Catherine is the highest mountain in the Sinai Peninsula and one of Egypt’s most important natural landmarks.",
      "St. Catherine's Monastery, a UNESCO World Heritage Site, and the Mount Sinai, where Moses is believed to have received the Ten Commandments.",
      "Popular for hiking, the mountain offers several trekking routes, with the most common being the sunrise hike to catch a breathtaking view of the surrounding desert and mountains.",
      "Despite being located in a desert region, Mount St. Catherine experiences a much cooler climate due to its altitude, with temperatures often dropping significantly at night.",
    ],
    images: [
      { no: "first-img", src: "/SouthSinai/SouthSinai16.jpg" },
      { no: "second-img", src: "/SouthSinai/SouthSinai17.jpg" },
      { no: "3rd-img", src: "/SouthSinai/SouthSinai18.jpg" },
      { no: "4th-img", src: "/SouthSinai/SouthSinai19.jpg" },
    ],
  },
];

export default PlacesInfo;
