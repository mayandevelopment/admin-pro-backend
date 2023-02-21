const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        mongoose.set("strictQuery", false);
        mongoose.connect( process.env.DB_CNN , {
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
            // useUnifiedTopology: true
        });
        console.log('DB Online');

        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}




module.exports = {
    dbConnection
}



