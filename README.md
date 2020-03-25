
![npm](https://i.imgur.com/MP2bABn.png)


# Bienvenido a Zeew

 ## No Importante

> Queremos Protejer a Zeew de usuarios inactivos y problematicos.
> estamos MEJORANDOS A zeew, ahora tiene un sistema de TOKEN (beta)
> Es Beta, vamos a ver como funciona y despues aremos un `Client` Universal.
> recuerda apoyar a zeew para que siga existiendo, dando una [Donacion](discord.gg/PBDbHGq).

> estamos en epocas de mantenimiento y actualizaciones , si algo no funciona como deberia, no te preocupes , se solucionara lo mas rapido posible.
> si el problema no se ha solucionado, reportadolo al servidor de soporte
> discord.gg/PBDbHGq » Apoya A zeew para que siga existiendo

> Si tienes ideas para mejorar Zeew son bienvenidas

## Informacion
 Zeew es una api con gif's de Interacción, manipulacion de imagenes
 y mas apoyado por la comunidad de Creacion de bots de discord.js

* **Constructores**
  * [SFW](#sfw)
  * [IMG](#img)
  * [Bienvenidas](#bienvenidas)
* **Zeew**
  * [Staff](#staff)
  * [Mas Proyectos](#proyectos)

## Instalación & Uso

¿Tienes problemas? 
- [Soporte Discord](https://discord.gg/PBDbHGq)

### Instala el Modulo

```javascript
npm i zeew
```

* Llamar el módulo

```js
const zeew = require('zeew')
```

### Constructore

<a name="sfw" />

### SFW

```js
const Zeew = require('zeew')
const sfw = new Zeew.sfw("TOKEN")
```

> Obten tu token el servidor.

| Función | Descripción|
| --------|------------|
|cry| Regresa ungif de alguien llorando aleatoria|
|hug| Regresa un gif de un abrazo aleatoria|
|kiss| Regresa un gif de un beso aleatoria |
|punch| Regresa un gif de un golpe aleatoria|
|suicide| Regresa un gif de un suicidio aleatoria|
|kill| Regresa un gif de un asesinato aleatoria|
|wasted| Regresa un gif de un wasted aleatoria|
|neko| Regresa un gif de un gatito aleatoria|
|slap| Regresa un gif de una bofetada aleatoria|

* valores **(anime / human)** 

| Función | Descripción|
| --------|------------|
|hug | Regresa un gif de abrazo Anime/Humana random|
|cry | Regresa un gif llorando Anime/Humana random|
|cookie | Regresa un gif de galletas Anime/Humana random|
|dance | Regresa un gif bailando Anime/Humana random|


<a name="img" />

### IMG

|Función|Descripcion|Uso|
|-------|-----------|--|
|blur| Agrega blur a la imagen| blur(URL) |
|sepia| Entonece la imagen en escalas grises| sepia(URL) |
| distort | Distorsiona la imagen dependiendo de la amplitud | distort(URL, AMPLITUD) |
|invert| Invierte el color de la imagen| invert(URL) |

> Requerido el url del avatar



## Modo De Uso

### Obtener un resultado

```js
const Zeew = require('zeew')
// -= Token -=
const zw = new Zeew.sfw("TOKEN")

// Promesa
// -= con un Valor =-
zw.hug("anime").then(a => {
    console.log(a);
})
// -= sin Valor =-
zw.kiss().then(a => {
    console.log(a);
})

//Funcion
async function kiss(){
    let img = await zw.kiss()
    console.log(img);
}

kiss()

// -= ---------------------- =-
```


#### Manipulacion de imagenes | Categoría (img)

* Ejemplo básico

```js
let img = "https://i.imgur.com/09RRYve.jpg";
zeew.img.blur(img)
```

Resultado: 


![npm](https://media.discordapp.net/attachments/571035853111951371/602493002245603348/blur.png)


* Ejemplo básico con 2 valores


```js
let img = "https://i.imgur.com/09RRYve.jpg";
zeew.img.distort(img, 5)
```

> El primer valor siempre sera un URL de una pagina, el segundo valor siempre debe ser un numero

Resultado:

![distort](https://media.discordapp.net/attachments/571035853111951371/602496322532278273/distort.png)


#### Discord

  * RichEmbed

```js
const Zeew = require('zeew')
const zw = new Zeew.sfw("TOKEN")

let img = await zw.cry()
  
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`**${message.author.username}**  Está triste 😢`)
  .setImage(img)
  message.channel.send(embed)

```

  * Attachments

```js
const Zeew = require('zeew')
const zw = new Zeew.sfw("TOKEN")

let img = await zw.cry("anime")

const { Attachment } = require('discord.js');
const attachment = new Attachment(img);

message.channel.send(`${message.author} Esta llorando....,`, attachment);
```

<a name="bienvenidas" />

### Bienvenidas Discord

####  Valores

| Función | Valor
| --------|------------
|.avatar()| URL
|.fondo()| URL / tamaño indicado 1500x500
|.colorTit()| Color hexadecimal, si no se provee un valor, el color será blanco
|.titulo()| String / Texto
|.colorDesc()| Color hexadecimal, si no se provee un valor, el color será blanco
|.descripcion()| String / Texto
|.estilo()| Si se deja vacio el estilo por defecto será `classic`
> te ayudamos con los colores entra aqui https://htmlcolorcodes.com/es/ (No nos paga por hacerle promo)

#### Ejemplo usando el constructor de la bienvenida para Discord.

```js
const Zeew = require('zeew')
 
  let wel = new Zeew.Bienvenida()
  .token("TOKEN")
  .avatar(member.user.displayAvatarURL)
  .fondo("https://i.imgur.com/0YrfJgx.jpg")
  .colorTit("")
  .estilo("classic")
  .titulo(`Bienvenido  al servidor ${member.user.username}`)
  .colorDesc("")
  .descripcion("Disfruta tu estadia en el servidor")
  
let img = await Zeew.WelcomeZeew(wel)
 
member.guild.channels.get("Id del canal").send({files: [img]})


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// -= Quieres meterlo en un embed =-

let ImgEmbed = new Discord.Attachment(img, "welcome-ZeewApi.png")

let EmbedWelcome = new Discord.RichEmbed()
.attachFile(ImgEmbed)
.setImage('attachment://welcome-ZeewApi.png')

member.guild.channels.get("Id del canal").send(EmbedWelcome)
```


## Resultado Bienvenidas

* `.estilo("classic")`

![scoped](https://i.imgur.com/XqOGyel.png)


* `.estilo("anime")`

![scoped](https://i.imgur.com/ZEt9X63.png)



# ¡Nuevas Actualizaciones!

## 05/marzo/2020
  
```js

- tokens
 
```



<a name="staff" />

## Creadores:

  ### @KamerrOficial
  
  ```
    * ROL: Owner
    * ID Discord: 403695999941345280
    * Clan: ZeaterNight
    * Redes Sociales: @KamerrOficial
    * Portafolio: behance.net/kamerroficial
  ```
    
 ### @ValerynR  
 
```
  * ROL: Co-Owner
  * ID Discord: 393603334847856650
```
<a name="proyectos" />

#### Proyectos

| proyecto | descripcion |
| --- | --- |
| [Zeew-eco](https://www.npmjs.com/package/zeew) | Zeew Economia - Crea un economia con su propia tienda

#### Donaciones


* Apoya el creador De zeew » [Kamerr Ezz](https://ko-fi.com/kamerroficial) « y obten beneficios