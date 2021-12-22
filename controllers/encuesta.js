const Encuesta =require('../models/encuesta');
const Aplicada=require('../models/aplicada');



const allencuestas=async(req,res)=>{
 
    const encuestas=await Encuesta.find({},"title estado");
    console.log(encuestas);
    return res.json(
        {
            ok:true,
            encuestas:encuestas
           
        }
    );
   }
   const getencuesta=async(req,res)=>{
     const {id}=req.params;
     
     const encuesta=await Encuesta.findById(id);
     console.log(encuesta);
   
    
   
     return res.json(
         {
             ok:true,
             encuesta:encuesta

             
         }
     );
   
   }

   const guardarencuesta=async(req,res)=>{
      
 
    const {title,_id,secciones}=req.body;
    const enc=new Aplicada({title,'idenc':_id,secciones});
    await enc.save();
   
    return res.json(
        {
            ok:true,
            
           
        }
    );
   }
   
   module.exports={
    allencuestas,
    getencuesta,
    guardarencuesta
   }