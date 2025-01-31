type cairoPlaces = {
  header: string;
  points: string[];
  images: { no: string; src: string }[];
};

const PlacesInfo: cairoPlaces[] = [
  {
    header: "Pyramids of Giza & Sphinx",
    points: [
      "Built as monumental tombs for pharaohs during ancient Egypt's Old Kingdom",
      "Vary in size, with the largest originally standing over 140 meters tall.",
      "Constructed with millions of limestone and granite blocks.",
      "Sphinx is a massive limestone statue with a lion’s body and a human head, likely representing a pharaoh.",
      "Measures 73 meters (240 feet) long and 20 meters (66 feet) high.",
      "Faces east, guarding the pyramids complex.",
      "Light and sound shows narrate the history of the pyramids, the Sphinx, and their significance.",
    ],
    images: [
      { no: "first-img", src: "/Cairo/Cairo1.jpg" },
      { no: "second-img", src: "/Cairo/Cairo2.jpg" },
      { no: "third-img", src: "/Cairo/Cairo3.jpg" },
    ],
  },
  {
    header: "New Egyptian Museum (GEM)",
    points: [
      "The largest archaeological museum in the world dedicated to a single civilization.",
      "Designed with modern architecture featuring triangular patterns inspired by the pyramids",
      "Houses over 100,000 artifacts, including Tutankhamun's treasures displayed together for the first time.",
      "Features exhibits covering 7,000 years of Egyptian history, from pre-dynastic to the Greco-Roman period.",
      "Home to massive statues, including a 12-meter Ramses II statue at the entrance.",
      "Provides a comprehensive visitor experience with theaters, restaurants, and a children’s museum.",
    ],

    images: [
      { no: "first-img", src: "/Cairo/Cairo4.jpg" },
      { no: "second-img", src: "/Cairo/Cairo5.jpg" },
      { no: "third-img", src: "/Cairo/Cairo6.jpg" },
      { no: "4th-img", src: "/Cairo/Cairo7.jpg" },
      { no: "5th-img", src: "/Cairo/Cairo8.jpg" },
      { no: "6th-img", src: "/Cairo/Cairo9.jpg" },
      { no: "7th-img", src: "/Cairo/Cairo10.jpg" },
    ],
  },
  {
    header: "Islamic Cairo",
    points: [
      "A historic area that showcases Cairo’s rich Islamic heritage, spanning over 1,000 years of history.",
      "Recognized as a UNESCO World Heritage Site for its extensive collection of Islamic architecture.",
      "Features mosques, schools and fortresses, representing different Islamic dynasties.",
      "The citadel is a key landmark, housing several important mosques and museums, including the Mosque of Muhammad Ali.",
      "The Khan El Khalili is a famous market offering traditional crafts, spices, textiles, and souvenirs.",
      "Al-Azhar Mosque, named after Fatima al-Zahra, the daughter of Prophet Muhammad, is the first mosque and university in Egypt.",
      "Historic Gates of Cairo, The city walls once had 13 gates, with Bab Zuweila being one of the most iconic still standing.",
    ],
    images: [
      { no: "first-img", src: "/Cairo/Cairo11.jpg" },
      { no: "second-img", src: "/Cairo/Cairo12.jpg" },
      { no: "third-img", src: "/Cairo/Cairo13.jpg" },
      { no: "4th-img", src: "/Cairo/Cairo14.jpg" },
      { no: "5th-img", src: "/Cairo/Cairo15.jpg" },
      { no: "6th-img", src: "/Cairo/Cairo16.jpg" },
      { no: "7th-img", src: "/Cairo/Cairo17.jpg" },
    ],
  },
  {
    header: "Coptic Cairo",
    points: [
      "A historic area that preserves the rich Christian heritage of Egypt, dating back to the early centuries of Christianity.",
      "Home to significant Coptic Orthodox landmarks, reflecting the influence of early Christian communities in Egypt.",
      "Visitors can explore ancient Christian architecture, murals, and religious artifacts that provide insight into Egypt’s early Christian history.",
      "The Hanging Church, One of the oldest and most famous Coptic churches, built above the Roman fortress babylon.",
      "Coptic Museum, Home to an extensive collection of Coptic artifacts, showcasing Egypt’s Christian history.",
    ],
    images: [
      { no: "first-img", src: "/Cairo/Cairo18.jpg" },
      { no: "second-img", src: "/Cairo/Cairo19.jpg" },
      { no: "third-img", src: "/Cairo/Cairo20.jpg" },
      { no: "4th-img", src: "/Cairo/Cairo21.jpg" },
    ],
  },

  {
    header: "Cairo Tower",
    points: [
      "Standing at 187 meters (614 feet), the Cairo Tower is one of Egypt's tallest structures and offers panoramic views of the city.",
      "Designed in the form of a lotus flower, a symbol of ancient Egypt, with a unique lattice structure.",
      "The tower’s observation deck at the top offers breathtaking 360-degree views of Cairo, perfect for sightseeing and photography.",
      "The tower has a revolving restaurant at the top, where visitors can dine while enjoying the constantly changing views of Cairo.",
      "A popular spot for both tourists and locals, especially at sunset or during the evening when the city is illuminated.",
    ],
    images: [
      { no: "first-img", src: "/Cairo/Cairo22.jpg" },
      { no: "second-img", src: "/Cairo/Cairo23.jpg" },
      { no: "third-img", src: "/Cairo/Cairo24.jpg" },
      { no: "4th-img", src: "/Cairo/Cairo25.jpg" },
    ],
  },
];

export default PlacesInfo;
