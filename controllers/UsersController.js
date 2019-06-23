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
    User
        .find({},(err,users)=>{
            return users;
        })
        .sort({'updatedAt':'desc','createdAt':'asc'})
        .then((users)=>{
            return res.render('pages/users', { title: 'Express',users: users});
        })
        .catch(next);
};
exports.deleteUser=(req,res,next)=>{
    User.findByIdAndRemove(req.params.userId)
        .then(()=>{
            return res.redirect('/users');
        })
        .catch(next)
    ;
};

exports.showUser=(req,res,next)=>{
    User.findById(req.params.userId)
        .then((user)=>{
            return res.render('pages/user', { title: 'Express',user: user});
        })
        .catch(next)
    ;
};

exports.editUser=(req,res,next)=>{
    User.findById(req.params.userId)
        .then((user)=>{
            if(!user){ return res.sendStatus(401); }

            // only update fields that were actually passed...
            if(typeof req.body.username !== 'undefined'){
                user.username = req.body.username;
            }
            if(typeof req.body.email !== 'undefined'){
                user.email = req.body.email;
            }

            return user.save().then(()=>{
                return res.redirect('/users');
            });

        })
        .catch(next)
    ;
};