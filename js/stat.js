'use strict';

function drawRectangle(ctx, x, y, width, height) {
  var borderRadius = 20;
  ctx.beginPath();
  ctx.moveTo(x + borderRadius, y);
  ctx.lineTo(x + width - borderRadius, y);
  ctx.quadraticCurveTo(
      x + width,
      y,
      x + width,
      y + borderRadius
  );
  ctx.lineTo(x + width, y + height - borderRadius);
  ctx.quadraticCurveTo(
      x + width,
      y + height,
      x + width - borderRadius,
      y + height
  );
  ctx.lineTo(x + borderRadius, y + height);
  ctx.quadraticCurveTo(
      x,
      y + height,
      x,
      y + height - borderRadius
  );
  ctx.lineTo(x, y + borderRadius);
  ctx.stroke();
  ctx.fill();
}

function renderHistogram(ctx, names, times) {
  var maxTtime = Math.max.apply(Math, times);

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    var name = names[i];
    var histogramHeight = 150;
    var histogramWidth = 40;
    var histogramX = 155;
    var columnIndent = 50;
    var height = histogramHeight / maxTtime * time;

    ctx.fillText(
        time.toFixed(0),
        histogramX + i * (histogramWidth + columnIndent),
        histogramHeight + 90 - height
    );

    if (name === 'Вы') {
      ctx.fillStyle = '#f00';
    } else {
      ctx.fillStyle = 'rgba(0, 0,'
       + (Math.random() * 5).toFixed(0) * 50
       + ',' + Math.random()
       + ')';
    }

    ctx.fillRect(
        histogramX + i * (histogramWidth + columnIndent),
        100 + histogramHeight,
        histogramWidth,
        -height
    );

    ctx.fillStyle = '#000';

    ctx.fillText(
        name,
        histogramX + i * (histogramWidth + columnIndent),
        100 + histogramHeight + 20
    );
  }
}

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeStyle = 'transparent';
  drawRectangle(ctx, 110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';
  drawRectangle(ctx, 100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  renderHistogram(ctx, names, times);
};
