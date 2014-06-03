# imageMagick


首先得安装 GraphicsMagick 或者 ImageMagick。

`apt-get install imagemagick `



```
var fs = require('fs'),
	gm = require('gm'),
	async = require('async'),
	im = gm.subClass({ imageMagick: true });
function cropImage(path, targetWidth, targetHeight, w, h, x, y, callback) {
	im(path).crop(w, h, x, y).resize(targetWidth, targetHeight).autoOrient().write(path, function (err, result) {
		callback(err, result);
	});
}

```




```

<!DOCTYPE html>
<html>
<head>
	<title>DeepLiquid &raquo; Jcrop Image Cropping Demos</title>
	<script src="/js/jquery.min.js" type="text/javascript"></script>
	<script src="/js/jquery.Jcrop.js"></script>
	<script src="/js/jquery.color.js"></script>
	<link rel="stylesheet" href="/css/jquery.Jcrop.min.css" type="text/css"/>
</head>
<body>
<div id="pbody">
	<table cellpadding="0" cellspacing="0" border="0">
		<tr>
			<td>
				<img src="pool.jpg" id="target"/>
			</td>
			<td>
				<div style="overflow:hidden;margin-left:5px;" id="previewContainer">
					<img src="pool.jpg" id="preview"/>
				</div>
			</td>
		</tr>
	</table>
</div>

<script language="Javascript">

	$(function () {
		var targetHeight = 100;
		var targetWidth = 200;
		var maxWidth = 300;
		renderCropImage('#target','#preview', targetWidth, targetHeight, maxWidth);
	});

	function renderCropImage(targetID, previewID,targetWidth, targetHeight, maxWidth) {
		$('#previewContainer').css({width: targetWidth + 'px', height: targetHeight + 'px'})
		var jcrop_api;
		var natureHeight, natureWidth;
		$(targetID).Jcrop({
			boxWidth: maxWidth,
			onChange: showPreview,
			onSelect: showPreview,
			allowSelect: false,
			aspectRatio: targetWidth/targetHeight
		}, function () {
			jcrop_api = this;
			var bounds= this.getBounds();
			jcrop_api.setSelect([0, 0, targetWidth, targetHeight]);
			natureWidth=bounds[0];
			natureHeight=bounds[1];
		});

		function showPreview(coords) {
			var rx = targetWidth / coords.w;
			var ry = targetHeight / coords.h;
			//Set Input Value here
			console.log('natureWidth', natureWidth, 'natureHeight', natureHeight, 'x', coords.x, 'y', coords.y, 'x2', coords.x2, 'y2', coords.y2, 'w', coords.w, 'h', coords.h, 'rx', rx, 'ry', ry);
			$(previewID).css({
				width: Math.round(rx * natureWidth) + 'px',
				height: Math.round(ry * natureHeight) + 'px',
				marginLeft: '-' + Math.round(rx * coords.x) + 'px',
				marginTop: '-' + Math.round(ry * coords.y) + 'px'
			});
		}
	}
</script>
</body>
</html>


```