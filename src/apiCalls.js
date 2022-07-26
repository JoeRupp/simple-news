let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const apiCalls = {
  getArticles: (section) => {
    return fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=ALrpaVd2tCM8iQrNmNh5z0LGbAqmz12w`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.text);
        } else {
          return response.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default apiCalls;
