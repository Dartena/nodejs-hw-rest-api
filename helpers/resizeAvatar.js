const Jimp = require("jimp");

const resizeAvatar = (avatar) => {
  Jimp.read(avatar)
    .then((image) => {
      return image.resize(250, 250).quality(60).write(avatar);
    })
    .catch((error) => console.log(error));
};

module.exports = resizeAvatar;
