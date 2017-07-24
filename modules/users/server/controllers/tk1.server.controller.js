var fs = require('fs');
var formidable = require('formidable');
module.exports.uploadImg = function (req, res) {
var form = new formidable.IncomingForm();   //创建上传表单
 //     form.encoding = 'utf-8';        //设置编辑
      form.uploadDir = '/home/zhouzhou/';     //设置上传目录
      form.keepExtensions = true;     //保留后缀
      form.maxFieldsSize = 3 * 1024 * 1024;   //文件大小
      console.log('333333')
  form.parse(req, function(err, fields, files) {
        console.log(files);
        if (err) {
            console.log(err);
          return res.json(0);
        }
        console.log('444444')
        for (var key in files) {
 //           console.log(files[key].path);
            var extName = ''; //后缀名
            switch (key.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
            case 'image/x-png':
            default:
                extName = 'png';
                break;
            }
            console.log('777777777')
            var avatarName = (new Date()).getTime() + '.' + extName;
            var newPath = form.uploadDir + avatarName;
 			console.log(file.file.endPath);
            fs.renameSync(files[key].path, newPath); //重命名
            return res.json("/upload/temp/"+ avatarName);
        }
    });
res.json('yeye') 
};

module.exports.addcar= function(req,res) {
  console.log(req.body);
  console.log(req.body.id);
  res.json('ok')
}



var mqtt = require('mqtt');
var client = mqtt.createClient(1883, 'localhost',{clientId:'1',clean:false});

client.subscribe('datasend')
client.subscribe('get_pos')
client.subscribe('trafficlight')
client.subscribe('addcar')

client.publish('datasend', 'Hello mqtt')
client.publish('addcar','1')

client.on('datasend', function (topic, message) {
console.log(message.toString())
})

