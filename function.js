let haveFile3 = false;
let haveFile5 = false;
let numFile3 = [];
let numFile5 = [];
let startNum;
var endNum = [];
let pathFile5 = '';
//导入文件左
var fs = require('fs');
var pailie3 = document.getElementById('pailie3');
pailie3.ondragover = function () {
  return false;
};
pailie3.ondragleave = pailie3.ondragend = function () {
  return false;
};
pailie3.ondrop = function (e) {
  e.preventDefault();
  var file = e.dataTransfer.files[0];
  fs.readFile(file.path, 'utf8', function (err, data) {
    pailie3.textContent = data;
    var b = data.split(" ").filter(function (s) {
      return s && s.trim(); // 注：IE9(不包含IE9)以下的版本没有trim()方法
    })
    endNum = [];
    c = b.map(Number);
    numFile3 = c;
    haveFile3 = true;
  });
  return false;
};
// 清空按钮左
function F_Empty_dialog3() {
  pailie3.textContent = '请将排列三文件拖拽至此处';
  haveFile3 = false;
  endNum = [];
}
// 清空按钮右
function F_Empty_dialog5() {
  pailie5.textContent = '请将排列五文件拖拽至此处';
  haveFile5 = false;
  endNum = [];
}
//导入文件右
var fs = require('fs');
var pailie5 = document.getElementById('pailie5');
pailie5.ondragover = function () {
  return false;
};
pailie5.ondragleave = pailie5.ondragend = function () {
  return false;
};
pailie5.ondrop = function (e) {
  e.preventDefault();
  var file = e.dataTransfer.files[0];
  console.log(file)
  pathFile5 = e.dataTransfer.files[0];
  fs.readFile(file.path, 'utf8', function (err, data) {
    console.log(data)
    pailie5.textContent = data;
    let b;
    if (data.indexOf(" ") == -1) {
      b = data.split(",").filter(function (s) {
        return s && s.trim(); // 注：IE9(不包含IE9)以下的版本没有trim()方法
      });
    } else {
      b = data.split(" ").filter(function (s) {
        return s && s.trim(); // 注：IE9(不包含IE9)以下的版本没有trim()方法
      });
    }
    // let b = data.split(" ").filter(function (s) {
    //   return s && s.trim(); // 注：IE9(不包含IE9)以下的版本没有trim()方法
    // });
    // let b = data.split(",").filter(function (s) {
    //   return s && s.trim(); // 注：IE9(不包含IE9)以下的版本没有trim()方法
    // });
    endNum = [];
    c = b.map(Number);
    numFile5 = c;
    haveFile5 = true;
  });
  return false;
};
// 左边排列三内容
function F_Open_dialog3(event) {
  document.getElementById("btn_file").click();
  setTimeout(function () {
    console.log(document.getElementById('btn_file').files[0].path);
    fs.readFile(document.getElementById('btn_file').files[0].path, 'utf8', function (err, data) {
      pailie3.textContent = data;
      haveFile3 = true;
    });
    alert("导入成功!");
  }, 5000);
}
// 右边排列五内容
function F_Open_dialog5(event) {
  document.getElementById("btn_file").click();
  setTimeout(function () {
    console.log(document.getElementById('btn_file').files[0].path);
    fs.readFile(document.getElementById('btn_file').files[0].path, 'utf8', function (err, data) {
      pailie5.textContent = data;
      haveFile5 = true;
    });
    alert("导入成功!");
  }, 5000);
}
//导出功能
function setUp() {
  var os = require('os');
  var path = os.homedir();
  var fs = require('fs');
  fs.writeFile(path + "/test.txt", endNum, function (err) {
    if (err) {
      return console.log(err);
    }
    alert(`文件改写并导出成功！`)
  });

  //        var os = require('os');
  //                           var path = os.homedir();
  //         var createFolder = function(to) { //文件写入
  //             var sep = path.sep
  //             var folders = path.dirname(to).split(sep);
  //             var p = '';
  //             while (folders.length) {
  //                 p += folders.shift() + sep;
  //                 if (!fs.existsSync(p)) {
  //                     fs.mkdirSync(p);
  //                 }
  //             }
  //         }
  //         createFolder('/publis/out.txt');
  // fs.createWriteStream('public/out.txt')


  // var os = require('os');
  // var homedir = os.homedir();
  // var fs = require('fs');
  // fs.link("/test.txt", endNum, function (err) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log("The file was saved!");
  // });
  // fs.writeFile(pathFile5.path, endNum, function (err) {
  //   if (!err) {
  //     alert(`${pathFile5.name}文件改写并导出成功！`)
  //   }
  // })
  // console.log(endNum)
}
//执行过滤功能
function Executive() {
  if (!(haveFile3 && haveFile5 && pailieNum === 3)) {
    alert("请检查文件是否导入及比对位数是否选中三位!")
  }
  else {
    // var a = parseInt(num % 10); // 个位数
    // var b = parseInt((num % 100) / 10); // 十位数
    // var c = parseInt((num % 1000) / 100); // 百位数
    // var d = parseInt((num % 10000) / 1000); // 千位数
    // var e = parseInt((num % 100000) / 10000); // 万位数
    console.log(numFile3);
    console.log(numFile5);
    console.log(`文件导入成功！`);
    // 123 124 125 134   135 145 234  235 245 345
    if (document.getElementById("Contrast1").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast2").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast3").style.backgroundColor === "rgb(0, 0, 0)") {
      ///123
      for (var i = 0; i < numFile3.length; i++) {
        for (var j = 0; j < numFile5.length; j++) {
          if (numFile3[i] === parseInt(parseInt((numFile5[j] % 100000) / 10000) * 100
            + parseInt((numFile5[j] % 10000) / 1000) * 10
            + parseInt((numFile5[j] % 1000) / 100))) {

            endNum.push(buquan(numFile5[j], 5));
          }
        }
      }
    }
    else if (document.getElementById("Contrast1").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast2").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast4").style.backgroundColor === "rgb(0, 0, 0)") {
      //124
      for (var i = 0; i < numFile3.length; i++) {
        for (var j = 0; j < numFile5.length; j++) {
          if (numFile3[i] === parseInt((numFile5[j] % 100000) / 10000) * 100 +
            parseInt((numFile5[j] % 10000) / 1000) * 10 +
            parseInt((numFile5[j] % 100) / 10)) {
            endNum.push(buquan(numFile5[j], 5));
          }
        }
      }
    }
    else if (document.getElementById("Contrast1").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast2").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast5").style.backgroundColor === "rgb(0, 0, 0)") {
      //125
      for (var i = 0; i < numFile3.length; i++) {
        for (var j = 0; j < numFile5.length; j++) {
          if (numFile3[i] === parseInt((numFile5[j] % 100000) / 10000) * 100 +
            parseInt((numFile5[j] % 10000) / 1000) * 10 +
            parseInt(numFile5[j] % 10)) {
            endNum.push(buquan(numFile5[j], 5));
          }
        }
      }
    }
    else if (document.getElementById("Contrast1").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast3").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast4").style.backgroundColor === "rgb(0, 0, 0)") {
      //134
      for (var i = 0; i < numFile3.length; i++) {
        for (var j = 0; j < numFile5.length; j++) {
          if (numFile3[i] === parseInt((numFile5[j] % 100000) / 10000) * 100 +
            parseInt((numFile5[j] % 1000) / 100) * 10 +
            parseInt((numFile5[j] % 100) / 10)) {
            endNum.push(buquan(numFile5[j], 5));
          }
        }
      }
    }
    else if (document.getElementById("Contrast1").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast3").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast5").style.backgroundColor === "rgb(0, 0, 0)") {
      //135
      for (var i = 0; i < numFile3.length; i++) {
        for (var j = 0; j < numFile5.length; j++) {
          if (numFile3[i] === parseInt((numFile5[j] % 100000) / 10000) * 100 +
            parseInt((numFile5[j] % 1000) / 100) * 10 +
            parseInt(numFile5[j] % 10)) {
            endNum.push(buquan(numFile5[j], 5));
          }
        }
      }
    }
    else if (document.getElementById("Contrast1").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast4").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast5").style.backgroundColor === "rgb(0, 0, 0)") {
      //145
      for (var i = 0; i < numFile3.length; i++) {
        for (var j = 0; j < numFile5.length; j++) {
          if (numFile3[i] === parseInt((numFile5[j] % 100000) / 10000) * 100 +
            parseInt((numFile5[j] % 100) / 10) * 10 +
            parseInt(numFile5[j] % 10)) {
            endNum.push(buquan(numFile5[j], 5));
          }
        }
      }
    }
    else if (document.getElementById("Contrast2").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast3").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast4").style.backgroundColor === "rgb(0, 0, 0)") {
      //234
      for (var i = 0; i < numFile3.length; i++) {
        for (var j = 0; j < numFile5.length; j++) {
          if (numFile3[i] === parseInt((numFile5[j] % 10000) / 1000) * 100 +
            parseInt((numFile5[j] % 1000) / 100) * 10 +
            parseInt((numFile5[j] % 100) / 10)) {
            endNum.push(buquan(numFile5[j], 5));
          }
        }
      }
    }
    else if (document.getElementById("Contrast2").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast4").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast5").style.backgroundColor === "rgb(0, 0, 0)") {
      //245
      for (var i = 0; i < numFile3.length; i++) {
        for (var j = 0; j < numFile5.length; j++) {
          if (numFile3[i] === parseInt((numFile5[j] % 10000) / 1000) * 100 +
            parseInt((numFile5[j] % 100) / 10) * 10 +
            parseInt(numFile5[j] % 10)) {
            endNum.push(buquan(numFile5[j], 5));
          }
        }
      }
    }
    else if (document.getElementById("Contrast2").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast3").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast5").style.backgroundColor === "rgb(0, 0, 0)") {
      //235
      for (var i = 0; i < numFile3.length; i++) {
        for (var j = 0; j < numFile5.length; j++) {
          if (numFile3[i] === parseInt((numFile5[j] % 10000) / 1000) * 100 +
            parseInt((numFile5[j] % 1000) / 100) * 10 +
            parseInt(numFile5[j] % 10)) {
            endNum.push(buquan(numFile5[j], 5));
          }
        }
      }
    }
    else if (document.getElementById("Contrast3").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast4").style.backgroundColor === "rgb(0, 0, 0)"
      && document.getElementById("Contrast5").style.backgroundColor === "rgb(0, 0, 0)") {
      //345
      for (let i = 0; i < numFile3.length; i++) {
        for (let j = 0; j < numFile5.length; j++) {
          if ( parseInt((numFile5[j] % 1000) / 100) * 100 +
            parseInt((numFile5[j] % 100) / 10) * 10 +
            parseInt(numFile5[j] % 10)  === numFile3[i]) {
            endNum.push(buquan(numFile5[j], 5));
          }
        }
      }
    }
    endNum.myUnique();
    endNum = endNum.join(' ')
    pailie5.textContent = endNum;
    alert(`${pathFile5.name}执行过滤成功！`)
  }
}

// 补全数字
function buquan(num, length) {
  var numstr = num.toString();
  var l = numstr.length;
  if (numstr.length >= length) { return numstr; }

  for (var i = 0; i < length - l; i++) {
    numstr = "0" + numstr;
  }
  return numstr;
}


//数组去重 // 使用时直接调用 arr.myUnique();
Array.prototype.myUnique = function myUnique() {
  var obj = {};
  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    if (typeof obj[item] !== "undefined") {
      this[i] = this[this.length - 1];
      this.length--;
      i--;
      continue;
    }
    obj[item] = item;
  }
  obj = null;
  return this;
}

// 对比位数功能
let pailieNum = 0;
// #ddd 与 rgb(251,251,251)TMD有坑！！！
//rgb(0, 0, 0)黑色   rgb(204, 0, 0)红色  #ddd灰色
document.getElementById('Contrast1').onclick = function (event) {
  if (document.getElementById("Contrast1").style.backgroundColor === 'rgb(204, 0, 0)' && pailieNum <= 2) {
    pailieNum++;
    document.getElementById("Contrast1").style.backgroundColor = "rgb(0, 0, 0)";
    for (let i = 1; i <= 5; i++) {
      if (pailieNum === 3 && document.getElementById("Contrast" + i).style.backgroundColor === 'rgb(204, 0, 0)') {
        document.getElementById("Contrast" + i).style.backgroundColor = "#ddd"
      }
    }
  }
  else if (document.getElementById("Contrast1").style.backgroundColor === 'rgb(0, 0, 0)' && pailieNum <= 3) {
    pailieNum--;
    document.getElementById("Contrast1").style.backgroundColor = "rgb(204, 0, 0)";
    for (let j = 1; j <= 5; j++) {
      if (document.getElementById("Contrast" + j).style.backgroundColor !== 'rgb(204, 0, 0)' && document.getElementById("Contrast" + j).style.backgroundColor !== 'rgb(0, 0, 0)') {
        console.log('hhhh')
        document.getElementById("Contrast" + j).style.backgroundColor = "rgb(204, 0, 0)"
      }
    }
  }
};
document.getElementById('Contrast2').onclick = function (event) {
  if (document.getElementById("Contrast2").style.backgroundColor === 'rgb(204, 0, 0)' && pailieNum <= 2) {
    pailieNum++;
    document.getElementById("Contrast2").style.backgroundColor = "rgb(0, 0, 0)";
    for (let i = 1; i <= 5; i++) {
      if (pailieNum === 3 && document.getElementById("Contrast" + i).style.backgroundColor === 'rgb(204, 0, 0)') {
        document.getElementById("Contrast" + i).style.backgroundColor = "#ddd"
      }
    }
  }
  else if (document.getElementById("Contrast2").style.backgroundColor === 'rgb(0, 0, 0)' && pailieNum <= 3) {
    pailieNum--;
    document.getElementById("Contrast2").style.backgroundColor = "rgb(204, 0, 0)";
    for (let j = 1; j <= 5; j++) {
      if (document.getElementById("Contrast" + j).style.backgroundColor !== 'rgb(204, 0, 0)' && document.getElementById("Contrast" + j).style.backgroundColor !== 'rgb(0, 0, 0)') {
        console.log('hhhh')
        document.getElementById("Contrast" + j).style.backgroundColor = "rgb(204, 0, 0)"
      }
    }
  }
};
document.getElementById('Contrast3').onclick = function (event) {
  if (document.getElementById("Contrast3").style.backgroundColor === 'rgb(204, 0, 0)' && pailieNum <= 2) {
    pailieNum++;
    document.getElementById("Contrast3").style.backgroundColor = "rgb(0, 0, 0)";
    for (let i = 1; i <= 5; i++) {
      if (pailieNum === 3 && document.getElementById("Contrast" + i).style.backgroundColor === 'rgb(204, 0, 0)') {
        document.getElementById("Contrast" + i).style.backgroundColor = "#ddd"
      }
    }
  }
  else if (document.getElementById("Contrast3").style.backgroundColor === 'rgb(0, 0, 0)' && pailieNum <= 3) {
    pailieNum--;
    document.getElementById("Contrast3").style.backgroundColor = "rgb(204, 0, 0)";
    for (let j = 1; j <= 5; j++) {
      if (document.getElementById("Contrast" + j).style.backgroundColor !== 'rgb(204, 0, 0)' && document.getElementById("Contrast" + j).style.backgroundColor !== 'rgb(0, 0, 0)') {
        console.log('hhhh')
        document.getElementById("Contrast" + j).style.backgroundColor = "rgb(204, 0, 0)"
      }
    }
  }
};
document.getElementById('Contrast4').onclick = function (event) {
  if (document.getElementById("Contrast4").style.backgroundColor === 'rgb(204, 0, 0)' && pailieNum <= 2) {
    pailieNum++;
    document.getElementById("Contrast4").style.backgroundColor = "rgb(0, 0, 0)";
    for (let i = 1; i <= 5; i++) {
      if (pailieNum === 3 && document.getElementById("Contrast" + i).style.backgroundColor === 'rgb(204, 0, 0)') {
        document.getElementById("Contrast" + i).style.backgroundColor = "#ddd"
      }
    }
  }
  else if (document.getElementById("Contrast4").style.backgroundColor === 'rgb(0, 0, 0)' && pailieNum <= 3) {
    pailieNum--;
    document.getElementById("Contrast4").style.backgroundColor = "rgb(204, 0, 0)";
    for (let j = 1; j <= 5; j++) {
      if (document.getElementById("Contrast" + j).style.backgroundColor !== 'rgb(204, 0, 0)' && document.getElementById("Contrast" + j).style.backgroundColor !== 'rgb(0, 0, 0)') {
        console.log('hhhh')
        document.getElementById("Contrast" + j).style.backgroundColor = "rgb(204, 0, 0)"
      }
    }
  }
};
document.getElementById('Contrast5').onclick = function (event) {
  if (document.getElementById("Contrast5").style.backgroundColor === 'rgb(204, 0, 0)' && pailieNum <= 2) {
    pailieNum++;
    document.getElementById("Contrast5").style.backgroundColor = "rgb(0, 0, 0)";
    for (let i = 1; i <= 5; i++) {
      if (pailieNum === 3 && document.getElementById("Contrast" + i).style.backgroundColor === 'rgb(204, 0, 0)') {
        document.getElementById("Contrast" + i).style.backgroundColor = "#ddd"
      }
    }
  }
  else if (document.getElementById("Contrast5").style.backgroundColor === 'rgb(0, 0, 0)' && pailieNum <= 3) {
    pailieNum--;
    document.getElementById("Contrast5").style.backgroundColor = "rgb(204, 0, 0)";
    for (let j = 1; j <= 5; j++) {
      if (document.getElementById("Contrast" + j).style.backgroundColor !== 'rgb(204, 0, 0)' && document.getElementById("Contrast" + j).style.backgroundColor !== 'rgb(0, 0, 0)') {
        console.log('hhhh')
        document.getElementById("Contrast" + j).style.backgroundColor = "rgb(204, 0, 0)"
      }
    }
  }
};