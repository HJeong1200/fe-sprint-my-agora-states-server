const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const filteredData = discussionsData.filter((el) => {
      return el.id === Number(id);
    });

    if (filteredData.length !== 0) {
      res.status(200).json(filteredData[0]);
    } else {
      res.status(404).send("Invalid ID");
    }
  },

  postQuestion: (req, res) => {
    const data = req.body;
    discussionsData = [data, ...discussionsData];

    res.json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
