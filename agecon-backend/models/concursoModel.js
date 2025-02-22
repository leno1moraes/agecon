const pool = require('../config/db');

class ConcursoModel {

    static async createConcurso(titulo) {
        const query = 'INSERT INTO concurso (titulo) VALUES ($1) RETURNING *';
        const values = [titulo];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async getAllConcurso() {
        const query = 'SELECT * FROM concurso';
        const result = await pool.query(query);
        return result.rows;
    }    

    static async getAllConcursoStatus(id) {
        const query = 'SELECT * FROM concurso_status WHERE concurso=$1 ORDER BY status';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows;
    }      

}

module.exports = ConcursoModel;