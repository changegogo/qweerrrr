var mongo = require('../lib/mongo');

module.exports = {
    //注册一个用户
    create: function create(user){
        return mongo.User.create(user).exec();
    },
    //通过用户名获取用户信息
    getUserByName: function getUserByName(name){
        return mongo.User
            .findOne({name: name})
            .addCreatedAt()//自定义插件，通过_id生成时间戳
            .exec();
    }
};