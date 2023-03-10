const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaPessoa)
router.post('/pessoas/', PessoaController.criarPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)
router.get('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.pegaMatricula)
router.post('/pessoas/:estudante_id/matricula/', PessoaController.criarMatricula)
router.put('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.atualizarMatricula)
router.delete('/pessoas/:estudante_id/matricula/:matricula_id', PessoaController.apagaMatricula)

module.exports = router