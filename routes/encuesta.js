const {Router}=require('express');
const {allencuestas,getencuesta}=require('../controllers/encuesta');
const router=Router();


router.get('/',allencuestas);
router.get('/:id',getencuesta);



module.exports=router;