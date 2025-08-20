
var homelist=(req,res)=>{
    res.render('index',{title:'Home'});
};
var locationInfo=(req,res)=>{
    res.render('index',{title:'Location Info'});
};

var addReview=(req,res)=>{
    res.render('index',{title:'Add Review'});
};
module.exports={
    homelist,
    locationInfo,
    addReview
};