const {Schema,model, Mongoose, Types}=require('mongoose');
const PreguntaSchema=Schema({ 
    
    
    

    
    encuesta:{
               type:Schema.Types.ObjectId,
               ref: 'encuestas'
             }
    

   
},{collection:'preguntas'});

module.exports=model('Pregunta',PreguntaSchema);