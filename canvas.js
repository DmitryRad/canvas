let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

let c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillRect(300, 200, 80, 100);
c.fillRect(981, 344, 80, 100);