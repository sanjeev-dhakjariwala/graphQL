const express = require("express");

const app = express();

const PORT = 3000;

const start = async () => {
  try {
    await new Promise((resolve) => {
      app.listen({ PORT }, resolve);
    });
  } catch (e) {}
};
