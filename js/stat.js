'use strict';

var drowCloud = function (ctx, x, y, width, height) {
  ctx.beginPath ();
  ctx.moveTo (x + 20, y);
  ctx.lineTo ((x + width) - 20, y);
  ctx.quadraticCurveTo (x + width, y, x + width, y + 20);
  ctx.lineTo (x + width, (y + height) - 20);
  ctx.quadraticCurveTo (x + width, y + height, (x + width) - 20, y + height);
  ctx.lineTo (x + 20, y + height);
  ctx.quadraticCurveTo (x, y + height, x, (y + height) - 20);
  ctx.lineTo (x, y + 20);
  ctx.stroke ();
  ctx.fill ();
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeStyle = 'transparent';
  drowCloud (ctx, 110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';
  drowCloud (ctx, 100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText ('Ура вы победили!', 120, 40);
  ctx.fillText ('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    var name = names[i];
    var histoHeight = 150;
    var histoWidth = 40;
    var histoX = 155;
    var columnIndent = 50;

    if (time > max) {
      max = time;
    }

    var step = histoHeight / max;
    var height = step * time;

    ctx.fillText (time.toFixed(0), histoX + i * (histoWidth + columnIndent), (histoHeight + 90) - height);
    if (name === 'Вы') {
      ctx.fillStyle = '#f00';
    } else {
      ctx.fillStyle = 'rgba(0, 0,'  + (Math.random() * 5).toFixed(0) * 50 +  ',' + Math.random() + ')';
    }
    ctx.fillRect (histoX + i * (histoWidth + columnIndent), 100 + histoHeight, histoWidth, -height);
    ctx.fillStyle = '#000';
    ctx.fillText (name, histoX + i * (histoWidth + columnIndent), 100 + histoHeight + 20);
  }
};
