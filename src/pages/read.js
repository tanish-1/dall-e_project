const fs = require("fs");
const path = require("path");

const data = [
  {
    movie: "Sholey",
    rating: 8.2,
  },
  {
    movie: "Dhoom",
    rating: 7.2,
  },
  {
    movie: "Don",
    rating: 6.2,
  },
  {
    movie: "Dhoom 2",
    rating: 7.2,
  },
  {
    movie: "Don 2",
    rating: 6.2,
  },
];


// ---- Creating file outside the File_Handling folder ----

fs.writeFile(
  
  "movies.json",
  JSON.stringify(data),
  {
    encoding: "utf-8",
    flag: "w",
  },
  (err) => {
    if (!err) console.log("File Written Successfully outside File_Handling folder");
    else console.log(err);
  }
);

/// ---- Creating file outside the File_Handling folder ----

fs.writeFile(
  
    "movies.json",
    JSON.stringify(data),
    {
      encoding: "utf-8",
      flag: "w",
    },
    (err) => {
      if (!err) console.log("File Written Successfully outside File_Handling folder");
      else console.log(err);
    }
  );
  
  // ---- Creating file inside the File_Handling folder ----
  
  const movieDir = path.join(__dirname, "movies.json");
  
  fs.writeFile(
    movieDir,
    JSON.stringify(data),
    {
      encoding: "utf-8",
      flag: "w",
    },
    (err) => {
      if (!err) console.log("File Written Successfully in File_Handling folder");
      else console.log(err);
  }
  );