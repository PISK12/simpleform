exports.home=(req,res,next)=>{
    res.render('pages/home', { title: 'Express' });
};