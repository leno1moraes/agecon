const ConcursoModel = require('../models/concursoModel');

class ConcursoController {

    static async createConcurso(req, res) {
        const { titulo } = req.body;
        try {
          const concurso = await ConcursoModel.createConcurso(titulo);
          res.status(201).json(concurso);
        } catch (error) {
          console.error('Erro ao inserir o concurso:', error);
          res.status(500).json({ error: 'Erro ao inserir o concurso' });
        }
    }
    
    static async getAllConcurso(req, res) {
        try {
          const concurso = await ConcursoModel.getAllConcurso();
          res.status(200).json(concurso);
        } catch (error) {
          console.error('Erro ao buscar concursos:', error);
          res.status(500).json({ error: 'Erro ao buscar concursos' });
        }
    }       

    static async getAllConcursoStatus(req, res) {
      const { id } = req.params;
      try {
        const concurso = await ConcursoModel.getAllConcursoStatus(id);
        res.status(200).json(concurso);
      } catch (error) {
        console.error('Erro ao buscar concursos:', error);
        res.status(500).json({ error: 'Erro ao buscar concursos' });
      }
  }     

}

module.exports = ConcursoController;