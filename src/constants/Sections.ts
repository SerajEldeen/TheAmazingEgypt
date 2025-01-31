type Section = {
  name: string;
  content: string;
  ImgName: string;
  ImgSrc: string;
};
const sections: Section[] = [
  {
    name: "history",
    content:
      "Egypt  history dates back over 7,000 years, marked by the rise of the ancient Egyptian civilization, the construction of the Great Pyramids, and its pivotal role in the development of writing, mathematics, and governance. Egypt's history also includes periods of Greek, Roman, Coptic, and Islamic, shaping its unique heritage.",
    ImgSrc: "/history.jpg",
    ImgName: "History of Egypt",
  },
  {
    name: "Geography",
    content:
      "Located in northeastern Africa, Egypt is bordered by the Mediterranean Sea to the north, the Red Sea to the east, and the deserts to the west and south. The Nile River, the lifeblood of the nation, flows through the heart of Egypt, creating the fertile Nile Valley and Delta, where the majority of the population resides.",
    ImgSrc: "/Geography.jpg",
    ImgName: "Geography of Egypt",
  },
  {
    name: "Climate",
    content:
      "Egypt experiences a predominantly arid climate with hot, dry summers and mild winters. The coastal regions along the Mediterranean enjoy moderate temperatures, while the desert areas are characterized by extreme heat during the day and cooler nights. Seasonal rainfall is sparse, mostly confined to the northern areas.",
    ImgSrc: "/Climate.webp",
    ImgName: "Climate of Egypt",
  },
  {
    name: "Culture",
    content:
      "Egyptian culture is a vibrant blend of ancient traditions and modern influences. It is renowned for its contributions to art, literature, and architecture, from the majestic temples to contemporary music and film. Festivals and religious celebrations, such as Ramadan and Coptic Christmas, are central to Egyptian life, reflecting its deep spiritual roots.",
    ImgSrc: "/Culture.jpg",
    ImgName: "Culture of Egypt",
  },

  {
    name: "People",
    content:
      "The people of Egypt are known for their warmth, hospitality, and resilience. Family ties are deeply valued, and social gatherings play a significant role in daily life, Fostering a society that reflects both unity and coexistence.",
    ImgSrc: "/People.jpg",
    ImgName: "People of Egypt",
  },
];
export default sections;
