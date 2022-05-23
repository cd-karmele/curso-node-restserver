const { Router } = require('express');

const { usuariosGet,
usuariosPut,
usuariosPost,
usuariosDelete } = require('../controllers/usuarios');

const router = Router();



router.get('/', usuariosGet);


router.put('/:id', usuariosPut);


router.post('/', usuariosPost);

//delete se utiliza para borrar o marcar algo como eliminado
router.delete('/', usuariosDelete);





module.exports = router;