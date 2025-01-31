type LuxorPlaces = {
  header: string;
  points: string[];
  images: { no: string; src: string }[];
};

const PlacesInfo: LuxorPlaces[] = [
  {
    header: "Karnak Temple Complex",
    points: [
      "Designated as a UNESCO World Heritage Site for its historical and architectural importance.",
      "Construction began in the Middle Kingdom (around 2000 BCE) and continued into the Ptolemaic period, with each pharaoh adding to the complex.",
      " The Karnak Temple is the largest ancient religious site in Egypt, dedicated primarily to the Theban Triad of Amun, Mut, and Khonsu.",
      "Covers over 100 hectares, making it a vast and impressive complex of temples, chapels, pylons, and other structures.",
      "Famous for its 134 massive columns, each over 10 meters tall, arranged in 16 rows, creating a spectacular visual effect.",
      "The temple features a large sacred lake, believed to have been used for purification rituals by the priests.",
    ],
    images: [
      { no: "first-img", src: "/Luxor/Luxor1.jpg" },
      { no: "second-img", src: "/Luxor/Luxor2.jpg" },
      { no: "third-img", src: "/Luxor/Luxor3.jpg" },
      { no: "4th-img", src: "/Luxor/Luxor4.jpg" },
    ],
  },
  {
    header: "Luxor Temple",
    points: [
      "Part of the Luxor UNESCO World Heritage Site, along with nearby sites like Karnak Temple and the Valley of the Kings.",
      "Built during the New Kingdom period (around 1400 BCE), it was expanded by several pharaohs, including Amenhotep III and Ramesses II.",
      "The temple consists of an entrance pylon, a large courtyard, a hypostyle hall, and a sanctuary. It’s known for its grand, monumental entrance with giant statues of Ramses II.",
      "The Luxor Temple was originally connected to the Karnak Temple by the Avenue of Sphinxes, a ceremonial pathway lined with sphinx statues.",
      "Two obelisks once stood at the entrance, one of which is now located in Place de la Concorde in Paris.",
      "The temple is beautifully lit at night, enhancing its grandeur and making it a popular spot for evening visits.",
      " Luxor Temple is one of the most visited ancient sites in Egypt, with many of its original features still intact.",
    ],
    images: [
      { no: "first-img", src: "/Luxor/Luxor5.jpg" },
      { no: "second-img", src: "/Luxor/Luxor6.jpg" },
      { no: "third-img", src: "/Luxor/Luxor7.jpg" },
    ],
  },
  {
    header: "Valley of the Kings",
    points: [
      " The Valley of the Kings is a protected site, designated as a UNESCO World Heritage Site due to its historical and cultural significance.",
      "The Valley of the Kings was used as a burial site for pharaohs and powerful nobles of the New Kingdom (around 1539–1075 BCE), including famous rulers like Tutankhamun, Ramses II, and Seti I.",
      "The valley contains 63 known tombs carved into the mountainside, each with intricate murals, hieroglyphs, and royal burial items. The tombs are spread across two valleys: East Valley (where most of the royal tombs are located) and West Valley.",
      " The tombs are famous for their well-preserved wall paintings, depicting scenes of the afterlife, gods, and funeral rituals, providing insight into ancient Egyptian beliefs and practices.",
      "The tomb of Tutankhamun is the most famous and significant discovery in the valley, largely due to the treasures found in 1922.",
      "The tombs were constructed to be hidden and well-guarded, to prevent tomb robbing. Despite this, many tombs were looted in ancient times.",
      "Tourists can explore several tombs, though many are restricted to preserve their integrity. The tomb of Ramses VI and the tomb of Seti I are popular among visitors.",
    ],
    images: [
      { no: "first-img", src: "/Luxor/Luxor8.jpg" },
      { no: "second-img", src: "/Luxor/Luxor9.jpg" },
    ],
  },
  {
    header: "Valley of the Queens",
    points: [
      "The Valley of the Queens is part of the Theban Necropolis and is a UNESCO World Heritage Site, recognized for its historical and cultural importance.",
      "The Valley of the Queens is where queens, royal wives, and noblewomen were buried.",
      "The valley contains over 90 tombs, with some of the most famous being the Tomb of Nefertari, the wife of Ramses II, known for its stunningly preserved wall paintings.",
      "The tombs are richly decorated with vibrant frescoes, hieroglyphics, and reliefs, depicting scenes from Egyptian mythology, the afterlife, and daily life.",
      " Known for its exceptional beauty and the vivid preservation of its wall paintings, the tomb of Nefertari is often regarded as one of the most beautiful tombs in Egypt.",
      "The Valley of the Queens offers a more peaceful and less crowded experience for visitors exploring ancient Egyptian burial sites.",
      "Excavations in the Valley of the Queens have uncovered significant artifacts, giving insights into royal life, burial customs, and religious practices of ancient Egypt.",
    ],
    images: [
      { no: "first-img", src: "/Luxor/Luxor10.jpg" },
      { no: "second-img", src: "/Luxor/Luxor11.jpg" },
      { no: "third-img", src: "/Luxor/Luxor12.jpg" },
      { no: "4th-img", src: "/Luxor/Luxor13.jpg" },
    ],
  },
  {
    header: "Colossi of Memnon",
    points: [
      "Two massive statues of Pharaoh Amenhotep III,Each statue is 18 meters (60 feet) tall, made of quartzite sandstone.",
      "Built around 1350 BCE to guard his mortuary temple.",
      "Major tourist attraction since ancient times.",
      "Heavily eroded but still iconic symbols of ancient Egypt.",
    ],
    images: [
      { no: "first-img", src: "/Luxor/Luxor14.jpg" },
      { no: "second-img", src: "/Luxor/Luxor15.jpg" },
      { no: "third-img", src: "/Luxor/Luxor16.jpg" },
    ],
  },
  {
    header: "El-Der El-Bahary Temple",
    points: [
      "Built during the 15th century BCE for Queen Hatshepsut, one of Egypt’s strong female pharaohs known for the strength of her army.",
      "Queen Hatshepsut is known for her peaceful reign, both internally and externally, and for the famous voyage to Punt.",
      "Designed by her architect Senenmut, featuring a unique terraced structure.",
      "It is engraved inside the mountain.",
    ],
    images: [
      { no: "first-img", src: "/Luxor/Luxor17.jpg" },
      { no: "second-img", src: "/Luxor/Luxor18.jpg" },
      { no: "third-img", src: "/Luxor/Luxor19.jpg" },
      { no: "4th-img", src: "/Luxor/Luxor20.jpg" },
    ],
  },
  {
    header: "Habu Temple",
    points: [
      "Officially known as the Mortuary Temple of Ramses III",
      "Built during the 12th century BCE by Pharaoh Ramses III of the 20th Dynasty.",
      "Known for its massive walls, detailed reliefs, and inscriptions depicting battles, including the defeat of the Sea Peoples.",
      "One of the best-preserved temples in Egypt, with vibrant colors still visible on some reliefs.",
      "A key archaeological site and tourist attraction in Luxor.",
    ],
    images: [
      { no: "first-img", src: "/Luxor/Luxor21.jpg" },
      { no: "second-img", src: "/Luxor/Luxor22.jpg" },
      { no: "third-img", src: "/Luxor/Luxor23.jpg" },
      { no: "4th-img", src: "/Luxor/Luxor24.jpg" },
    ],
  },
  {
    header: "Abydos Temple",
    points: [
      "Built by Seti I of the 19th Dynasty (13th century BCE) and completed by his son, Ramses II.",
      "Famous for its Abydos King List, a wall carving listing 76 pharaohs from Menes to Seti I.",
      "Known for its exquisite reliefs and hieroglyphs, considered some of the finest in Egyptian art.",
      "Believed to be a pilgrimage site for worshippers of Osiris and a center for rituals related to the afterlife.",
      "A well-preserved and significant archaeological site, attracting historians and tourists.",
    ],
    images: [
      { no: "first-img", src: "/Luxor/Luxor26.jpg" },
      { no: "second-img", src: "/Luxor/Luxor25.jpg" },
      { no: "third-img", src: "/Luxor/Luxor27.jpg" },
    ],
  },

  {
    header: "Luxor Museum",
    points: [
      "Opened in 1975, showcasing artifacts from ancient Thebes and the surrounding area.",
      "Features a carefully curated collection, including statues, jewelry, pottery, and reliefs",
      "Highlights include statues of Pharaoh Amenhotep III, King Tutankhamun’s treasures, and the cachette of Luxor Temple.",
      "Known for its modern, well-lit displays and informative labels.",
      "A must-visit for history enthusiasts exploring Luxor’s ancient heritage.",
    ],
    images: [
      { no: "first-img", src: "/Luxor/Luxor28.jpg" },
      { no: "second-img", src: "/Luxor/Luxor29.jpg" },
      { no: "third-img", src: "/Luxor/Luxor30.jpg" },
      { no: "4th-img", src: "/Luxor/Luxor31.jpg" },
      { no: "5th-img", src: "/Luxor/Luxor32.jpg" },
    ],
  },
  {
    header: "Sound and Light Show at Karnak",
    points: [
      "Uses dramatic lighting, sound effects, and narration to bring the temple’s history to life.",
      "Highlights the temple’s construction, pharaohs like Ramses II, and its role in ancient Egyptian religion.",
      "Available in multiple languages, including English, French, and Arabic.",
      "A unique way to experience Karnak’s grandeur and history after dark.",
      "A popular tourist activity, combining entertainment with education.",
    ],
    images: [
      { no: "first-img", src: "/Luxor/Luxor33.jpg" },
      { no: "second-img", src: "/Luxor/Luxor34.jpg" },
      { no: "third-img", src: "/Luxor/Luxor35.jpg" },
      { no: "4th-img", src: "/Luxor/Luxor36.jpg" },
    ],
  },

  {
    header: "Luxor Souq",
    points: [
      "A bustling traditional market located in the heart of Luxor, Egypt, near Luxor Temple.",
      "Known for its vibrant atmosphere and wide variety of goods, including spices, jewelry, textiles, perfumes, and souvenirs.",
      "A great place to shop for authentic Egyptian items like alabaster statues, papyrus art, and handmade crafts.",
      "Offers a glimpse into local culture and daily life in Luxor.",
      "A must-visit for tourists looking for unique gifts and a lively shopping experience.",
    ],
    images: [
      { no: "first-img", src: "/Luxor/Luxor37.jpg" },
      { no: "second-img", src: "/Luxor/Luxor38.jpg" },
      { no: "third-img", src: "/Luxor/Luxor39.jpg" },
    ],
  },
];

export default PlacesInfo;
