const pool = require('../config/db');

class StatusModel {
    static async getAllStatus() {
        const query = 'SELECT * FROM status';
        const result = await pool.query(query);
        return result.rows;
    }
}

module.exports = StatusModel;