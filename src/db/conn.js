const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://renurisha:Renu8271%40123@cluster0.afvf7.mongodb.net/clickcloud?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log(e);
  });
