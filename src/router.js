// views
import Layout from "./views/Layout";
import HomeView from "./views/HomeView";
import HNView from "./views/HN";

const routes = {
  "/": {
    render: () => m(Layout, m(HomeView))
  },
  "/hn": {
    render: () => m(Layout, m(HNView))
  }
};

export default routes;
