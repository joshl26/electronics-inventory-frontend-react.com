module.exports = function (api) {
  // Cache the returned value forever and don't call this function again.
  api.cache(true);

  return {
    plugins: ["macros"],
  };
};
