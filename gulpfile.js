const { watch, task } = require('gulp');

const { exec } = require('child_process');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

function compile(cb) {
  //执行编译命令 layaair2-cmd compile

  let process = exec('layaair2-cmd compile');

  process.stdout.on('data', data => {
    console.log(data);
  });

  process.stderr.on('data', data => {
    console.log(data);
  });

  process.on('exit', (code, signal) => {
    console.log('success');

    console.log(code, signal);
    reload();
    cb();
  });
}

//创建一个名称为compile的gulp任务

task('compile', function () {
  /**

*@监听src目录下的所有子目录的所有文件，

*@延迟1000毫秒，才执行下次监听

*@监听生效后执行的函数

*/
  browserSync({
    server: './bin',
  });
  watch('src/**/*.*', { delay: 1000 }, compile);
});
