type links = {
  path: string;
  activeName: string;
  activeStyle: string;
  normalStyle: string;
  name: string;
};
const Items: links[] = [
  {
    path: "/",
    activeName: "home",
    activeStyle: "text-primary",
    normalStyle: "text-secondary hover:text-primary",
    name: "Home",
  },
  {
    path: "/about",
    activeName: "about",
    activeStyle: "text-primary",
    normalStyle: "text-secondary hover:text-primary",
    name: "About",
  },

  {
    path: "/places",
    activeName: "types",
    activeStyle: "text-primary",
    normalStyle: "text-secondary hover:text-primary",
    name: "Places to Visit",
  },
];
export default Items;
