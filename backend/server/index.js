const app = require("./app");
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`service running on port ${PORT}`);
});
