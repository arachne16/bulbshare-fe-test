const catchAsync = require("../utils/catchAsync");
const commentsData = require("../data/comments.json");

exports.getComments = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    data: commentsData,
  });
});
