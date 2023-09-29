const uuid = require("uuid");
const randomstring = require("randomstring");

const generateFakeNews = () => {
  const id = uuid.v4();
  const title = randomstring.generate({
    length: 12,
    charset: "alphabetic",
  });

  const description = randomstring.generate({
    length: 50,
  });

  const published_at = new Date().toISOString();

  const author = randomstring.generate({
    length: 12,
    charset: "alphabetic",
  });

  const image = `https://ui-avatars.com/api/?background=random&name=${author}`;

  return {
    id,
    title,
    description,
    image,
    published_at,
    author,
  };
};

const generateFakeNewsList = (quantity) => {
  const fakeNewsList = [];

  for (let i = 0; i < quantity; i++) {
    const fakeNews = generateFakeNews();
    fakeNewsList.push(fakeNews);
  }

  console.log(fakeNewsList);

  return fakeNewsList;
};

generateFakeNewsList(2);

//module.exports = generateFakeNewsList;
