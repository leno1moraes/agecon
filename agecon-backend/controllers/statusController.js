const StatusModel = require('../models/statusModel');

class StatusController {

    static async getAllStatus(req, res) {
        try {
          const statuscon = await StatusModel.getAllStatus();
          res.status(200).json(statuscon);
        } catch (error) {
          console.error('Erro ao buscar status dos concursos:', error);
          res.status(500).json({ error: 'Erro ao buscar status dos concursos' });
        }
    }    
}

module.exports = StatusController;