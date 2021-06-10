const moongose = require ('mongoose');

moongose.connect('mongodb://localhost/peopledb',{
    useNewUrlParser:true,
    useUnifiedTopology:true 
})
    .then(()=>console.log("Coneccion a la base de datos establecida"))
    .catch(err=>console.log("Error al conectar a la bd", err))