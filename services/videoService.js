const storageService = require("./storageService.js");

async function process(path) {
  const videoBuffer = await storageService.downloadFile(
    "videos",
    "public/" + path
  );

  const base64Video = Buffer.from(videoBuffer).toString("base64");
  return base64Video;
}

module.exports = { process };
