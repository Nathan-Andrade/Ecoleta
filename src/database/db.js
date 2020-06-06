//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utililizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
  //com comandos SQL eu vou:
  //1 criar uma tabela 
 // db.run(`
   // CREATE TABLE IF NOT EXISTS places (
   //   id INTEGER PRIMARY KEY AUTOINCREMENT,
   //   image TEXT,
   //   name TEXT,
   //   address TEXT,
   //   address2 TEXT,
   //   state TEXT,
   //   city TEXT,
   //   items TEXT
   // );
  //`)

  //2 inserir dados na tabela
 // const query = `
 // INSERT INTO places (
  //  image,
  //  name,
  //  address,
  //  address2,
  //  state,
  //  city,
  //  items
 // ) VALUES ( ?,?,?,?,?,?,?);
 // `


 // const values = [
  //  "https://images.unsplash.com/photo-1558583082-409143c794ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80",
  //  "Paperside",
  //  "Guilherme Gemballa, Jardim América",
  //  "Número 260",
  //  "Santa Catarina",
  //  "Rio do Sul",
  //  "Resíduos Eletrônicos, Lâmpadas"
 // ]

  //function afterInsertData(err){
  //  if(err){
  //    return console.log(err)
  //  }
  //  console.log("Cadastrado com sucesso!")
  //  console.log(this)
 // }
 // db.run(query, values, afterInsertData)

  
  //3 consultar os dados da tabela
 // db.all(`SELECT name FROM places`, function(err, rows){
   // if(err){
   //   return console.log(err)
  //  }
  //  console.log("Aqui estão seus registros")
  //  console.log(rows)
 // })

  //4 deletar um dado da tabela
  db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    if(err){
     return console.log(err)
    }
    console.log("Deletado com sucesso!")
  })

})