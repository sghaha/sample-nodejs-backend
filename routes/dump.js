const express = require("express");
const router = express.Router(); //라우트를 다른 파일에도 쓰고싶으면 이걸쓰자

router.route("/all").get(async (req, res) => {
  console.log("[GET] /dump/all");

  let rtnJson = [
    {
      ord: 1,
      idx: 1,
      provider: "Oracle",
      full_title:
        "Oracle Cloud Infrastructure Developer 2021 Associate (1Z0-1084-21)",
      short_title: "Oracle Cloud Infrastructure Developer 2021 Associate",
      code: "1Z0-1084-21",
      from: "Unknown",
      update_date: "2022-02-14",
      comment: null,
      full_prbl_cnt: 91,
      korean_prbl_cnt: 0,
    },
    {
      ord: 2,
      idx: 2,
      provider: "Amazon",
      full_title: "AWS Certified Developer Associate",
      short_title: "AWS Certified Developer Associate",
      code: null,
      from: "examtopics.com",
      update_date: "2022-03-21",
      comment: null,
      full_prbl_cnt: 423,
      korean_prbl_cnt: 0,
    },
    {
      ord: 3,
      idx: 3,
      provider: "Amazon",
      full_title: "AWS Certified Solutions Architect - Associate SAA-C02",
      short_title: "AWS Certified Developer Associate",
      code: "SAA-C02",
      from: "examtopics.com",
      update_date: "2022-03-14",
      comment: "22년 8월까지 덤프 유효할 예정",
      full_prbl_cnt: 566,
      korean_prbl_cnt: 230,
    },
    {
      ord: 4,
      idx: 4,
      provider: "Amazon",
      full_title: "AWS Certified Cloud Practitioner (CLF-C01)",
      short_title: "AWS Certified Cloud Practitioner",
      code: "CLF-C01",
      from: "examtopics.com",
      update_date: "2022-03-21",
      comment: null,
      full_prbl_cnt: 490,
      korean_prbl_cnt: 0,
    },
  ];

  res.send(rtnJson);
});

module.exports = router;
