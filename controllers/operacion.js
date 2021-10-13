
const sumar=async(req,res)=>{
  
  
 const{num1,num2}=req.params;

 const suma=Number(num1)+Number(num2);
 res.json({
    ok: true,
    result:suma
 });
    
}

module.exports={
  sumar
}