type NavItem = {
  name: string;
  listStyle: string;
  path: string;
  pathStyle: string;
};

const navItems: NavItem[] = [
  {
    name: "Home",
    listStyle: "border-solid border-b-2",
    path: "/",
    pathStyle:
      "block text-gray-800 hover:text-primary transform hover:translate-x-2 transition-all duration-300 ",
  },
  {
    name: "About",
    listStyle: "border-solid border-b-2",
    path: "/about",
    pathStyle:
      "block text-gray-800 hover:text-primary transform hover:translate-x-2 transition-all duration-300 ",
  },
  {
    name: "Places to Visit",
    listStyle: "border-solid border-b-2",
    path: "/places",
    pathStyle:
      "block text-gray-800 hover:text-primary transform hover:translate-x-2 transition-all duration-300 ",
  },
];

export default navItems;
