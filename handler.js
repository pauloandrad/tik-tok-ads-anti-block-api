"use strict";

const videoService = require("./services/videoService.js");

module.exports.processVideo = async (event) => {
  const fileName = decodeURIComponent(event.pathParameters.fileName);

  return {
    statusCode: 200,
    body: JSON.stringify({
      video: await videoService.process(fileName),
    }),
  };
};
