const mongoose = require('mongoose');


const dbConection = async()=>{
    try {
        mongoose.connect(
            process.env.DB_CNN,
            {
              useNewUrlParser:true,
              useUnifiedTopology:true,
              useCreateIndex:true  
            }
            
        );
        console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new mongoose.Error('Error a al hora de iniciar');
    }
}

module.exports={
    dbConection
}