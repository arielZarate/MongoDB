//=======CREAR========
db.createUser({
    user: "Ariel",
    pwd: "123",
    roles: ["readWrite", "dbAdmin"],
});

/* 

=========CONMANDOS===================

mongod:servidor d emongoDB

mongo:inicia el shell de mongo para poder trabajar , antes se debe inciar el server 


cls: limpia
show dbs : muetsra listado de bd 
db: muestra la bd actual
use <nombre BD> : sirve para usar esa bd
db.clientes.insert({<contenido>}) : lo que hace aca es crear una collecion llamda clientes en la bd:"misclientes"
db.clientes.find(): buscar y lista
db.clientes.find({age:{$gt:17}}): busca y lista aquellos que sean mayres de 17 
db.clientes.remove():eliminar
db.clientes.update({valorViejo},{valornuevo}):actualiza
db.clientes.insert({}):inserta un objeto
db.clientes.insert([{},{}]) inserta un array de objetos
db.clientes.find().pretty(): ordena todo en formato Json 
db.clientes.sort(<alguna propiedad>):ordena
db.clientes.count():cuenta





*/

//MONGO SE DIVIDE EN COLLECCIONES

db.clientes.insert({
    firstName: "issac",
    lastName: "Newton",
});

//guardar varios  datos
db.clientes.insert(
    //array de datos
    [{
            firstName: "issac",
            lastName: "Newton",
        },
        {
            firstName: "albert",
            lastName: "Einstein",
        },
        {
            firstName: "jdhd",
            lastName: "Baskara",
        },
    ]
);

//busca los clientes
db.clientes.find();

//busca los clientes por filtro
db.clientes.find({ firstName: "issac" });

//=====actualizar===============

db.clientes.update({ firstName: "jdhd" }, { firstName: "Juan Porongo", gender: "Female" });

//buscar y ordenar  los datos
db.clientes.find().pretty();

//buscar por _id

db.clientes.find({ _id: ObjectId("62e29b86fbc66eebf99ca2b3") });

//buscar por  id  y modificar

db.clientes.update({
    _id: ObjectId("62e29b86fbc66eebf99ca2b3"),
}, {
    firstName: "Isaac",
    lastName: "Newton",
    Ocupation: "Fisico",
});

//update de datos pero sin reescribir todo

//update solo la edad , la incrementa
db.clientes.update({
        _id: ObjectId("62e29b86fbc66eebf99ca2b3"),
    },

    { $inc: { age: 5 } }
);

//atributo upsert :sino existe en la actualizacion lo crea
db.clientes.update({
    firstName: "Aaaron",
}, {
    firstName: "Aaaron",
    lastName: "Zarate",
    gender: "male",
}, {
    upsert: true,
});

//=======REMOVER=========
db.clientes.remove({
    firstName: "albert",
});

db.clientes.remove({
    firstName: "albert",
}, {
    justOne: true,
});

//FILTROS

//OR
db.clientes.find({
    $or: [{ firstName: "albert" }, { firstName: "Aaaron" }],
});

//por propiedad
db.clientes.find({ firstName: "albert" });

//insertamos mas datos para luego buscar

db.clientes.insert([
    { name: "Alejandro", age: 14 },
    { name: "Maria", age: 28 },
    { name: "Jose", age: 45 },
]);

db.clientes.insert({
    firstName: "Guadalupe",
    address: { city: "London" },
});

//=====================================================

//buscar por edad mayor a 25 con lapropiedad $gt
db.clientes.find({ age: { $gt: 25 } });

//buscar por edad menores a 25 con lapropiedad $lt
db.clientes.find({ age: { $lt: 25 } });
//buscar por emtre
db.clientes.find({ age: { $lt: 65, $gt: 38 } });

//buscar por un objeto dentro de otro
db.clientes.find({
    "address.city": "London",
});

//buscar por expresiones Regulares

//1:ascendente  -1:descendente
db.clientes.find().sort({ firstName: 1 }).pretty();

//count
db.clientes.count();

//count y $gt
db.clientes.find({ age: { $gt: 17 } }).count();

//limit
db.clientes.find().pretty().limit(2);

// combinando filtros

db.clientes.find().limit(4).sort({ name: -1 });

//usando mongop con  javascript

db.clientes.find().forEach((element) => {
    print(element.name);
});