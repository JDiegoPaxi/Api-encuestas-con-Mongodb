const {Router}=require('express');
const {sumar}=require('../controllers/operacion');
const router=Router();

router.get('/:num1/:num2',sumar);


module.exports=router;