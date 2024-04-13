const catchAsync = require("../utils/catchAsync");
const feedData = require("../data/feed.json");

exports.getFeeds = catchAsync(async (req, res, next) => {
  const { page } = req.query;
  const limit = 5;
  const limitData = feedData.slice(page - 1, page * limit);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  res.status(200).json({
    status: "success",
    data: limitData,
  });
});

exports.getFeedById = catchAsync(async (req, res, next) => {
  const feed = feedData?.filter((el) => el.briefref === req.params.id);
  res.status(200).json({
    status: "success",
    data: feed,
  });
});
