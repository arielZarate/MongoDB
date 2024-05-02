const { parse } = require("path");
const Mascota = require("../models/Mascota");

const createMascota = async (req, res) => {
  try {
    let { name, color, peso, age, description } = req.body;

    /*  console.log(req.body); */

    let newMascota = await Mascota.create({
      name,
      color,
      peso: parseInt(peso),
      age: parseInt(age) || 0,
      description,
    });

    newMascota
      ? res.status(200).send("Mascota created successfully 👌")
      : res.status(404).json("Mascota not created ☹ ");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getMascota = async (req, res) => {
  try {
    const { name } = req.query; //opcion por name
    const mascotas = Mascota.find();

    mascotas
      ? res.json(mascotas)
      : res.status(404).json({ message: "Mascotas not Found 😕" });

    /*     if (!name) {
    } else { 
    //FILTRA Y OBLIGADAMENTE LOS DEBE PASAR A MINUSUCLAS PARA PODER COMPARAR HACIENDO QUE IGNORE SI ELLA MAYUSCULAS /MISUCULAS
    let searchGame = allGames.filter((game) =>
      game.name.toLowerCase().includes(name.toLowerCase())
    );

    searchGame.length
      ? res.status(200).json(searchGame)
      : res.status(404).json({
          message: "Videogame not Found 😕",
        });
     } */
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

module.exports = { createMascota, getMascota };
