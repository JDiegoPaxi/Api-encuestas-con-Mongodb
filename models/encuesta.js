const { type } = require('express/lib/response');
const {Schema,model, Types, isValidObjectId}=require('mongoose');
const EncuestaSchema=Schema({ 
    title:{
        type: String,
        require:true
    },
    secciones: [
        {
            title: {
                type: String,
                default: null
            },
            
            preguntas:[
              {
                descripcion:{
                    type:String,
                    require:true
                },
                istypeabierto:{
                    type: Boolean,
                    default: false
                },
                selectmultiple:{
                    type: Boolean,
                    default: false
                },
                opciones:[
                    {
                      descripcion:String,
                    }
                ],
                
              }
              
            ],
      
        },

    ],
    
    estado:{
        type:String,
        default:'d'//d: en diseño, a: aplicacion, c: cerrado 
    }
    
    
    
    
},{collection:'encuestas'});

module.exports=model('Encuesta',EncuestaSchema);