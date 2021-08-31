const notes = require("express").Router();
const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");

notes.get("/", (req, res) => {
  fs.readFile("./db/db.json").then((data) => {
    res.json(JSON.parse(data));
  });
});

notes.post("/", (req, res) => {
  console.log(req.body);
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    console.log({ newNote });
    // fs.readFile("./db/db.json")
    //   .then((data) => {
    //     JSON.parse(data);
    //   })
    //   .then((parsedData) => {
    //     console.log(typeof parsedData);
    //     parsedData.push(newNote);
    //     fs.writeFile("./db/db.json", parsedData);
    //   });
  } else {
    res.error("Error saving note.");
  }
});

notes.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
//   fs.readFile("./db/db.json")
//     .then((data) => {
//       JSON.parse(data);
//     })
//     .then((parsedData) => {
//       const filteredData = parsedData.filter((note) => note.id !== id);
//       fs.writeFile("./db/db.json", filteredData);
//       res.json(`Note ${id} has been deleted.`);
//     });
});

module.exports = notes;
