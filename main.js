const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "phone_book",
});

connection.connect();
connection.query("select * from contacts", (err, data, fields) => {
  if (err) {
    console.log(err);
    return;
  }
  fields.forEach((field) => {
    console.log(field.name);
  });
  console.log(data);
});
connection.end();
