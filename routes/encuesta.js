const {Router}=require('express');
const {allencuestas,getencuesta,guardarencuesta}=require('../controllers/encuesta');
const router=Router();


router.get('/',allencuestas);
router.get('/:id',getencuesta);
router.post('/',guardarencuesta);



module.exports=router;