type AswanPlaces = {
  header: string;
  points: string[];
  images: { no: string; src: string }[];
};

const PlacesInfo: AswanPlaces[] = [
  {
    header: "Abu Simbel Temple",
    points: [
      "A UNESCO World Heritage Site and one of Egypt’s most iconic landmarks.",
      "Built by Pharaoh Ramses II in the 13th century BCE to commemorate his victory at the Battle of Kadesh.",
      "Consists of two temples, the Great Temple (dedicated to Ramses II) and the Small Temple (dedicated to his wife, Queen Nefertari).",
      "Famous for the four colossal statues of Ramses II at the entrance, each 20 meters (65 feet) tall.",
      "The Great Temple is aligned so that sunlight illuminates the inner sanctum twice a year (February 22 and October 22), lighting up statues of Ramses II.",
    ],
    images: [
      { no: "first-img", src: "/Aswan/Aswan1.jpg" },
      { no: "second-img", src: "/Aswan/Aswan2.jpg" },
      { no: "third-img", src: "/Aswan/Aswan3.jpg" },
      { no: "4th-img", src: "/Aswan/Aswan4.jpg" },
    ],
  },
  {
    header: "Philae Temple",
    points: [
      "A UNESCO World Heritage Site and a must-visit attraction in Aswan.",
      "Originally built on Philae Island but relocated in the 1970s to save it from flooding caused by the Aswan High Dam.",
      "Dedicated to the goddess Isis, with additional shrines for Osiris and Hathor.",
      "Construction began during the Ptolemaic dynasty (around 380 BCE) and continued into the Roman era.",
      "Famous for its Sound and Light Show, which highlights its history and mythology.",
    ],
    images: [
      { no: "first-img", src: "/Aswan/Aswan5.jpg" },
      { no: "second-img", src: "/Aswan/Aswan6.jpg" },
      { no: "third-img", src: "/Aswan/Aswan7.jpg" },
    ],
  },
  {
    header: "Aswan High Dam",
    points: [
      "Completed in 1970 after a decade of construction, with Soviet assistance.",
      "Built to control Nile flooding, provide water for irrigation, and generate hydroelectric power.",
      "Created Lake Nasser, one of the largest artificial lakes in the world.",
      "Significant for boosting Egypt’s economy and agriculture.",
      "A symbol of modern Egyptian engineering and a key landmark in Aswan.",
    ],
    images: [
      { no: "first-img", src: "/Aswan/Aswan8.jpg" },
      { no: "second-img", src: "/Aswan/Aswan9.jpg" },
      { no: "third-img", src: "/Aswan/Aswan10.jpg" },
    ],
  },
  {
    header: "Kalabsha Temple",
    points: [
      "Originally built during the Roman era (around 30 BCE) under Emperor Augustus, dedicated to the Nubian sun god Mandulis (Merul).",
      "One of the largest free-standing temples in Nubia, showcasing a mix of Egyptian and Roman architectural styles.",
      "Features well-preserved reliefs, inscriptions, and a large pylon entrance",
      "Offers stunning views of Lake Nasser and is a peaceful, less-crowded alternative to other Aswan temples.",
    ],
    images: [
      { no: "first-img", src: "/Aswan/Aswan11.jpg" },
      { no: "second-img", src: "/Aswan/Aswan12.jpg" },
      { no: "third-img", src: "/Aswan/Aswan13.jpg" },
    ],
  },
  {
    header: "Temple of Kom Ombo",
    points: [
      "Built during the Ptolemaic dynasty (180–47 BCE) under Ptolemy VI.",
      "Unique for being a double temple, dedicated to two sets of gods: Sobek (the crocodile god) and Horus the Elder (the falcon-headed god).",
      "Features symmetrical design with two entrances, two halls, and two sanctuaries.",
      "Known for its detailed reliefs, including ancient medical instruments and a calendar of festivals.",
    ],
    images: [
      { no: "first-img", src: "/Aswan/Aswan14.jpg" },
      { no: "second-img", src: "/Aswan/Aswan15.jpg" },
      { no: "third-img", src: "/Aswan/Aswan16.jpg" },
      { no: "4th-img", src: "/Aswan/Aswan17.jpg" },
    ],
  },
  {
    header: "Temple of Edfu",
    points: [
      "Dedicated to the falcon-headed god Horus, built during the Ptolemaic period (237–57 BCE).",
      "One of the best-preserved ancient temples in Egypt, thanks to being buried under sand for centuries.",
      "Features a massive pylon entrance, a grand courtyard, and a hypostyle hall with intricate carvings.",
      "Known for its detailed reliefs depicting the myth of Horus and his victory over Seth.",
      "A key stop for Nile River cruises and a major tourist attraction in Upper Egypt.",
    ],
    images: [
      { no: "first-img", src: "/Aswan/Aswan18.jpg" },
      { no: "second-img", src: "/Aswan/Aswan19.jpg" },
      { no: "third-img", src: "/Aswan/Aswan20.jpg" },
      { no: "4th-img", src: "/Aswan/Aswan21.jpg" },
    ],
  },
  {
    header: "Aswan Felucca Ride",
    points: [
      "A traditional Egyptian sailboat ride on the Nile River in Aswan.",
      "Offers a peaceful and scenic way to experience the Nile’s beauty and Aswan’s landscapes.",
      "A relaxing and authentic way to enjoy the Nile, away from motorized boats",
      "Can be booked for short rides or multi-day trips, including sunset or moonlight sails.",
      "A must-do activity for visitors to Aswan, providing a glimpse into traditional Egyptian life",
    ],
    images: [
      { no: "second-img", src: "/Aswan/Aswan22.jpg" },
      { no: "third-img", src: "/Aswan/Aswan23.jpg" },
      { no: "4th-img", src: "/Aswan/Aswan24.jpg" },
    ],
  },
];

export default PlacesInfo;
