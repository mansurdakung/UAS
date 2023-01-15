import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('tabel_obat',{
    nama_obat: DataTypes.STRING,
    tgl_kadarluarsa: DataTypes.STRING,
    jumlah: DataTypes.STRING,
    id_distributor: DataTypes.STRING,
   

},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();