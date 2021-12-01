const {Schema,model}=require('mongoose');
const EncuestaSchema=Schema({
   
    nombre:{
        type: String,
        require:true

    },
    id:{
        type:Number,
        require:true
    }
    
    
    
    
},{collection:'encuesta'});

module.exports=model('Encuesta',EncuestaSchema);