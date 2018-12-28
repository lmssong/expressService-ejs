
var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next){
    res.render('chatRoom',{ contentTitle : 'NodeJs + WebSocket 聊天室'});
});



module.exports = router;