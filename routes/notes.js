const notes = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

notes.get("/", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

notes.post("/", (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        throw err;
      } else {
        parsedData = JSON.parse(data);
        parsedData.push(newNote);
        strData = JSON.stringify(parsedData);
        fs.writeFile("./db/db.json", strData, (err) => {
          if (err) {
            throw err;
          } else {
            fs.readFile("./db/db.json", (err, data) => {
              if (err) {
                console.log(err);
              } else {
                res.json(JSON.parse(data));
              }
            });
          }
        });
      }
    });
  } else {
    res.error("Error saving note.");
  }
});

notes.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      
    }
  });
});

module.exports = notes;
