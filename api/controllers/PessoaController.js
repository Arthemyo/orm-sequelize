const database = require('../models');

class PessoaController{
    static async pegaTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        }catch(error){
            return res.status(500).json(error.message);
        }
        
    }

    static async pegaPessoa(req, res){
        const { id } = req.params
        try {
            const pessoa = await database.Pessoas.findOne({where: { id: Number(id) }});
            return res.status(200).json(pessoa)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async criarPessoa(req, res){
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async atualizarPessoa(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, {where : {id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: { 
                    id: Number(id)
                }
            });

            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async apagaPessoa(req, res){
        const { id } = req.params
        try {
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({ mensagem: `ìd ${id} deletado`})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async pegaMatricula(req, res){
        const { estudante_id, matricula_id } = req.params
        try {
            const matricula = await database.Matriculas.findOne({where: {   
                    id: Number(matricula_id), 
                    estudante_id: Number(estudante_id) 
                }});
            return res.status(200).json(matricula)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async criarMatricula(req, res){
        const { estudante_id } = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudante_id)}
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)

        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async atualizarMatricula(req, res){
        const { estudante_id, matricula_id } = req.params

        const novasInfos = req.body
        try {
            await database.Matriculas.update(novasInfos, {where : {id: Number(matricula_id), estudante_id: Number(estudante_id)}})
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: { 
                    id: Number(matricula_id)
                }
            });

            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async apagaMatricula(req, res){
        const { estudante_id, matricula_id } = req.params
        try {
            await database.Matriculas.destroy({where: {id: Number(matricula_id)}})
            return res.status(200).json({ mensagem: `id ${matricula_id} deletado`})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
}

module.exports = PessoaController