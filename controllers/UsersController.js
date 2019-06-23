const mongoose=require('mongoose');
const User = mongoose.model('User');

exports.saveUser=(req,res,next)=>{
    const user=new User();
    user.username=req.body.username;
    user.email=req.body.email;
    user.save()
        .then(()=>{
        return res.redirect('/users');
        })
        .catch(next)
    ;
};

exports.showUsers=(req,res,next)=>{
    res.render('pages/users', { title: 'Express',users: User.find({}) });
};