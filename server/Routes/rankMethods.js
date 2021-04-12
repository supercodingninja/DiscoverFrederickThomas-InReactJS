const express = require('express');
const router = express.Router();
const rankData = require('../models/data');
//const secretUser = config.getUser(); //
const secretUser = 'no one';

router.get('/getRanks', (req, res, next) => {
  rankData.findOne({ name: secretUser }, (err, result) => {
    if (err) {
      return res.json({ status: 500, message: 'Internal Server Error' });
    } else if (!result) {
      return res.json({ status: 422, message: 'Document Not Found' });
    } else {
      allRanks = [];
      allRanks.push({ spojRank: result.spojRank });
      allRanks.push({ hackerrank: result.hackerrank });
      // allRanks.push({ cgpa: result.cgpa });
      // allRanks.push({ sem: result.sem });
      return res.json({ status: 200, message: allRanks });
    }
  });
});

module.exports = router;
