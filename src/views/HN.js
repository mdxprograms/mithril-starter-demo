import HN from "../models/HN";

const HNView = {
  oninit: HN.getStories,
  view: () =>
    m(".hn", [
      m("h3", "Hacker News - Top 10 Stories"),
      m("hr"),
      m(
        "ul.stories",
        HN.stories.map(story =>
          m(
            "li",
            m("a.story", { target: "_blank", href: story.url }, story.title)
          )
        )
      )
    ])
};

export default HNView;
