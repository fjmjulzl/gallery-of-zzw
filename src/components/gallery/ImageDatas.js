// 获取图片相关的数据
var ImageDatas = require('../../data/imageDatas.json');

// 利用自执行函数， 将图片名信息转成图片URL路径信息
ImageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('../../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(ImageDatas);

//exports.ImageDatas = imageDatas;
export {ImageDatas}
