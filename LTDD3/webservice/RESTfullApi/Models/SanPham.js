var db = require('../Dbconnection');

var SanPham={
	getAllSanPham:function(callback){
		return db.query("Select * from tbSanPham",callback);
    },
    getSanPhamById:function(id,callback){
		return db.query("select * from tbSanPham where Id=?",[id],callback);
	}
};
 module.exports=SanPham;