const APOD = {
  result: {},
  getApod: () =>
    m
      .request({
        method: "GET",
        url:
          "https://api.nasa.gov/planetary/apod?api_key=PEw2feZBRngLi4JWjEDyBfFOcpGyb5clPt0zoZHb"
      })
      .then(result => (APOD.result = result))
};

export default APOD;
