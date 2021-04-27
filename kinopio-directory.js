#!/usr/bin/env node

const fs = require("fs");
const needle = require("needle");

const { apiKey } = JSON.parse(fs.readFileSync("config.json", "utf8"));

const createCard = async (space) => {
  const spaceUrl = `https://kinopio.club/${space.url}`;
  try {
    const response = await needle(
      "post",
      `http://api.kinopio.club/card`,
      { spaceId: "LM30TehYj1NIDFh3EOUit", name: spaceUrl },
      {
        headers: { Authorization: apiKey },
        json: true,
      }
    );
    if (response.statusCode == 200 || response.statusCode == 201) {
      console.log(response.body);
    }
    if (response.statusCode == 500) {
      console.log(response);
      process.exit(1);
    }
  } catch (error) {
    console.log(error);
  }
};

const createCards = async () => {
  try {
    const response = await needle(
      "get",
      "http://api.kinopio.club/user/spaces",
      {
        headers: { Authorization: apiKey },
      }
    );
    if (response.statusCode == 200) {
      for (const space of response.body) {
        await createCard(space);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

createCards().catch((e) => console.error(e));
