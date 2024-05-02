const { Router } = require("express");
const router = Router();

const videogame = require("./Videogame-routes");

router.use("/videogames", videogame);

module.exports = router;
