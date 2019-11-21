const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

//Koneksi ke mysql database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "arkademybootcamp"
});

//connect ke database
conn.connect(err => {
  if (err) throw err;
  console.log("Koneksi berhasil");
});

app.use(bodyParser.json());
app.listen(4000, () => console.log("Server berjalan di port 4000"));
app.use(express.static("public"));

//Baca Semua Data
app.get("/read", (req, res) => {
  let sql =
    "SELECT t_product.price as prod_price, t_product.id as id_prod, t_product.name as nm_prod, t_category.name as nm_cat, t_cashier.name as nm_cas FROM t_product LEFT JOIN t_cashier ON t_product.id_cashier = t_cashier.id LEFT JOIN t_category ON t_product.id_category = t_category.id;";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//Baca Data Berdasarkan NIS
app.get("/readbynis/:nis", async (req, res) => {
  const nis = req.params.nis;
  console.log(nis);

  let sql =
    "SELECT t_product.price as prod_price, t_product.id as id_prod, t_product.name as nm_prod, t_category.name as nm_cat, t_cashier.name as nm_cas FROM t_product LEFT JOIN t_cashier ON t_product.id_cashier = t_cashier.id LEFT JOIN t_category ON t_product.id_category = t_category.id WHERE t_product.id =" +
    nis +
    ";";

  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//route untuk insert data
app.post("/api", (req, res) => {
  let action = req.body.action;
  let data = {
    id_prod: req.body.id_prod,
    nm_cas: req.body.nm_cas,
    nm_prod: req.body.nm_prod,
    nm_cat: req.body.nm_cat,
    prod_price: req.body.prod_price
  };
  console.log(data);
  let sql;

  if (action === "Simpan") {
    sql = `INSERT INTO t_product (id,name,price,id_category,id_cashier)
    VALUES (null,'${product}','${price}',null,null)`;
  } else {
    sql =
      `UPDATE t_product SET cashier='` +
      req.body.nm_cas +
      `', 
		        name='` +
      req.body.nm_prod +
      `', price='` +
      req.body.prod_price +
      `' 
		        WHERE id='` +
      req.body.id_prod +
      `';`;
  }

  console.log(sql);
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.json(results);
    console.log(results);
  });
});

//Baca Data Berdasarkan id
app.get("/hapus/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  let sql = "DELETE FROM t_product WHERE id=" + id + "";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
