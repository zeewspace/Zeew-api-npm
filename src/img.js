const Canvas = require('canvas');
const Jimp = require('jimp');
const GIFEncoder = require('gifencoder');
const circle = require('@jimp/plugin-circle');
const config = require('@jimp/custom');

const {
  ZeewError
} = require("../utils/ZeewError")

config({plugins: [circle]}, Jimp);

class Img {
    /**
     * trigger
     * @param {img} img URL de una imagen
     * @returns {img} <Buffer>
     */
    async triggered(img) {
        if(!img) throw new Error('Coloca una imagen');
        const base = await Canvas.loadImage(__dirname + '/assets/triggered.png');
        const image = await Canvas.loadImage(img);
        const GIF = new GIFEncoder(256, 310);
        
        GIF.start();
        GIF.setRepeat(0);
        GIF.setDelay(15);
        
        const canvas = Canvas.createCanvas(256, 310);
        const ctx = canvas.getContext('2d');
        
        const x = 20;
        const y = 10;
        let n = 0;
        while (n < 9) {
            ctx.clearRect(0,0, 256, 256);
            ctx.fillStyle = '#FF000033';
            ctx.fillRect(0, 0, 256, 310);
            ctx.drawImage(image, Math.floor(Math.random() * x) - x, Math.floor(Math.random() * x) - x, 256 + x, 310 - 54 + x)
            ctx.drawImage(base, Math.floor(Math.random() * y) - y, 310 - 54 + Math.floor(Math.random() * y) - y, 256 + y, 54 + y);
            GIF.addFrame(ctx);
            n++
        }

        GIF.finish();
        return GIF.out.getData();
        //return canvas.toBuffer();
    }
    /**
     * 
     * @param {img} img URL | URI de una imagen
     */
    async sepia(img){
      if(!img) throw new ZeewError('Debes Colocar una imagen')
      img = await Jimp.read(img);
      img.sepia();
      return await img.getBufferAsync("image/png");
    }
    /**
     * 
     * @param {img} img URL | URI de una imagen
     */
    async invertir(img){
      if (!img) throw new ZeewError('Debes Colocar una imagen');
      img = await Jimp.read(img)
      img.invert()
      return img.getBufferAsync("image/png");
    }

    /**
     * 
     * @param {img} img URL | URI de una imagen
     */
    async gris(img){
      if(!img) throw new ZeewError('Debes colocar una imagen');
      img = await Jimp.read(img);
      img.greyscale()
      return img.getBufferAsync("image/png")
    }

    /**
     * 
     * @param {img} img URL | URI de una imagen
     * @param {pixels} pixels Cantidad de desenfoque
     */
    async desenfoque(img, pixels = 5){
      if(!img) throw new ZeewError('Debes colocar una imagen');
      img = await Jimp.read(img);
      img.blur(pixels)
      return img.getBufferAsync("image/png")
    }

    /**
     * 
     * @param {img} img URL | URI de una imagen
     * @param {size} size Tamaño del pixel
     */
    async pixel(img,size = 5){
      if(!img) throw new ZeewError('Debes colocar una imagen')
      img = await Jimp.read(img);
      img.pixelate(size)
      return img.getBufferAsync("image/png")
    }

    /**
     * 
     * @param {img} img URL | URI de una imagen
     */
    async gay(img){
      if(!img) throw new ZeewError('Debes colocar una Imagen');
      const base = await Canvas.loadImage(__dirname + '/assets/gay.png');
      const image = await Canvas.loadImage(img);
      const canvas = Canvas.createCanvas(500, 500);
      const ctx = canvas.getContext('2d');

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(base, 0,0 , canvas.width, canvas.height)
      return canvas.toBuffer();
    }

    /**
     * 
     * @param {img} img URL | URL de una imagen
     */
    async circulo(img){
      if(!img) throw new ZeewError('Debes color una imagen');
      img = await Jimp.read(img);
      img.circle();
      return img.getBufferAsync("image/png")
    }
}

module.exports = Img