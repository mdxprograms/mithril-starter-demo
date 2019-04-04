import APOD from "../models/APOD";

const HomeView = {
  oninit: APOD.getApod,
  view: () =>
    m(".apod", [
      m("h3", "NASA - A Picture of the day"),
      m("hr"),
      m("h5", APOD.result.title),
      m("img", { src: APOD.result.hdurl }),
      m("p", APOD.result.explanation)
    ])
};

export default HomeView;
