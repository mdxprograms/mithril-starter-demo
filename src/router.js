import Layout from "./views/Layout";
import HomeView from "./views/HomeView";
import HNView from "./views/HN";
import TodosView from "./views/TodosView";

const routes = {
  "/": {
    render: () => m(Layout, m(HomeView))
  },
  "/hn": {
    render: () => m(Layout, m(HNView))
  },
  "/todos": {
    render: () => m(Layout, m(TodosView))
  }
};

export default routes;
