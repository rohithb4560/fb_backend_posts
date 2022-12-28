module.exports = app => {
    app.use("/fb", require("./PostModel/Routes/index"))
    // app.use("/whatsapp", require("./Connection/Routes/index"))
  };