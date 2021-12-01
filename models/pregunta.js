const {Schema,model}=require('mongoose');
const PreguntaSchema=Schema({ 
    descripcion:{
        type: String,
        require:true
    },
    istypeabierto:{
        type: Boolean
    },
    selectmultiple:{
        type: Boolean
    },
    opciones:[
        {
          descripcion:String,
        }
    ],
    encuesta:{
               id:Number,
               nombre:String
             }
    

   
},{collection:'pregunta'});

module.exports=model('Pregunta',PreguntaSchema);