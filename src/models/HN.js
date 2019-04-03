const HN = {
  stories: [],
  getStory: id => {
    m.request({
      method: "GET",
      url: `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    }).then(result => HN.stories.push(result));
  },
  getStories: () => {
    HN.stories = [];

    m.request({
      method: "GET",
      url: "https://hacker-news.firebaseio.com/v0/topstories.json"
    }).then(results => results.slice(0, 10).map(HN.getStory));
  }
};

export default HN;
