var express = require('express');
var router = express.Router();
var SanPham = require('./Models/SanPham');
router.get('/:id?',function(req,res,next){
    if(req.params.id){
        SanPham.getSanPhamById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        SanPham.getAllSanPham(function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});


module.exports=router;