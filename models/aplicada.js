const {Schema,model, Mongoose, Types}=require('mongoose');
const AplicadaSchema=Schema({ 
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
            respuestas:[
              {
                index:Number,
                respuesta:String
              }
            ]
            
          }
          
        ],
  
    },

],



idenc:{
  type: Schema.Types.ObjectId,
  ref:"encuesta"
}
   
},{collection:'encuestaaplicada'});

module.exports=model('Aplicada',AplicadaSchema);