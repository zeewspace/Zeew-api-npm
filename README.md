
![npm](https://i.imgur.com/MP2bABn.png)


# Bienvenido a Zeew Api

## Informacion

Zeew api soy una api de imagenes de interaccion, pero mi mi fuerte es la manipulacion y mis bienvenidas.

Soy una api creada para los creadores de bots, ayudandoles y facilitandoles crear codigos complejos para manipular o crear bienvenidas.

y lo mejor que estoy completamente en ingles ♥

- **Constructores**
  - [SFW](#SFW)
  - [IMG](#IMG)
  - [BIENVENIDAS](#BW)
- **Zeew Api**
  - [Soporte](#SOPORTE)
  - [Staff](#STAFF)
  - [Mas Proyectos](#PROYECTOS)
  - [Donaciones](#DONACIONES)
- **Extra**
  - [Usalo con Discord.js](#Discord)



## Instalacion & Uso

Para usar la mayoria de las funciones, debes tener un token.
ese token tiene registrado, el nombre del usuario al cual se le ha otorgado el token.

Y puedes optenerlo desde el servidor de soporte en discord.

El `valor` son los parametros que pide, para hacer la funcion, ya que puedes obtener 2 resultados diferentes.

El `null` significa que no necesita ningun parametro

Estas funciones, regresan una gif de una imagen aleatoria segun su funcion.

Si usas Discord y tu vercion la V12. esta estas [opciones](#Discord)


 Las funciones retornan una promesa, a si que recuerda usar el async/await

<a name="SFW"></a>

### Constructor SFW

- **Como usar el constructor**

```javascript
const Zeew = require('zeew');
const sfw = new Zeew.sfw("Token")
```

- **Contenido SFW**

Funcion | Descripcion | Valor
--- | :---: | ---:
kiss | beso | 
punch | golpe | 
neko | gatio | 
wink | giño | 
slap | bogetada | 
run | correr | 
hug | abrazo | anime o human
cry | llorar | anime o human
cookie | galletas | anime o human
dance | baile | anime o human

- **Ejemplo**

```javascript
const Zeew = require('zeew');
const sfw = new Zeew.sfw("TOKEN");

// -= Valor =-
sfw.hug("anime");

// -= Sin valor =-
sfw.kiss();

// Ejemplo usando Discord.js
let kiss = await sfw.kiss()
message.channel.send({files: [kiss]})

```

<a name="IMG"></a>

### Constructor IMG
> En un futuro sera usara igual que el constructor sfw
> por el momento funciona de esta menera

- **Como usar el constructor**
- Forma
  - Actual » Como funciona actualmente
```javascript
const Zeew = require('zeew');
const sfw = new Zeew.img.<funcion>(valor)
```

- Forma
  - Futuro » Asi es como funcionara proximamente
```javascript
const Zeew = require('zeew');
const sfw = new Zeew.img("Token")
```

- **Contenido IMG**

Funcion | Descripcion | Valor
--- | :---: | ---:
blur | imagen borrosa | imagen
sepia | imagen a escala de grises | imagen
distort | Distorsiona  la imagne | imagen & Amplitud
invert | invierte los colores | imagen

- **Ejemplo**

```javascript
const Zeew = require('zeew');

// -= Un valor =-
let img = "https://i.imgur.com/09RRYve.jpg";
let blur = await Zeew.img.blur(img)

// -= Dos Valores =-
let img = "https://i.imgur.com/09RRYve.jpg";
let blur = await Zeew.img.distort(img, 5);

```

<a name="BW"></a>

### Constructor Bienvenida

- **Contenido IMG**

Funcion | Descripcion 
:--- | ---: 
token | clave de acceso
estilo | Estilo de la card 
avatar | imagen del perfil 
fondo | Imagen de fondo 
colorTit | color del titulo 
titulo | titulo de la card 
colorDesc | color de la desc 
descripcion | texto de descripcion

- **Estilos**
  - [classic](https://i.imgur.com/XqOGyel.png)
  - [anime](https://i.imgur.com/ZEt9X63.png)

- **Modo de Uso**

```javascript
const Zeew = require('zeew');

let wel = new Zeew.Bienvenida()
.token("TOKEN")
.estilo("classic")
.avatar("https://i.imgur.com/09RRYve.jpg")
.fondo("https://i.imgur.com/0YrfJgx.jpg")
.colorTit("#FF3DB0")
.titulo("Bienvenido")
.colorDesc("#fff")
.descripcion("Tenemos un nuevo usuario")

let img = await Zeew.WelcomeZeew(wel);
```

## Informacion & Soporte

<a name="SOPORTE"></a>

### Soporte

Si tienes errores, bugs o quieres contactarnos.

- **Discord**
  - [Servidor del Creador](https://discord.gg/3K8pdmf)
  - [Servidor del Soporte](https://discord.gg/3K8pdmf)
- **Redes Sociales**
  - Creador: `@KamerrEzz`

<a name="STAFF"></a>

### Staff

- **Kamerr Ezz**
```
* ROL: Founder
* ID Discord: 403695999941345280
* Redes Sociales: @KamerrEzz
* Pagina Web: KamerrEzz.com
```

- **ValerynR (Ex-Staff)**
```
* ROL: Co-Owner
* ID Discord: 393603334847856650
```

<a name="PROYECTOS"></a>

### Proyectos

Proyecto | Descripcion 
:--- | ---: 
[Zeew-eco](https://www.npmjs.com/package/zeew-eco) | Crea una economia


### Donaciones

<a name="DONACIONES"></a>
Donacion | Descripcion 
:--- | ---: 
[ko-fi](https://ko-fi.com/kamerroficial) | Apoya desde cofi
[paypal](https://www.paypal.me/kamerrezz) | Apoya desde paypal


<a name="Discord"></a>

## Usalo para discord

Mayormete en NPM lo usan para discord, asi que les ayudare un poquito

primero discord a cambiado y ha echo cambios, pero aun asi hay muchos que usan una vercion inferior a los cambios. pero aun asi, te las mostrare en las dos verciones.


- **Discord V11**
  - `displayAvatarURL`
  - `avatarURL`
  - `new Discord.RichEmbed()`
- **Discord V12**
  - `displayAvatarURL({formart: "png"})`
  - `avatarURL({formart: "png"})`
  - `new  Discord.MessageEmbed()`

Lo mas usado son las bienvenidas, a si que mostrare como hacerlas.

- Embed
```javascript
/*

        --== CODE DE LA BIENVENIDA / CARD ==--

*/

let img = await Zeew.WelcomeZeew(wel);

// --== DISCORD V11 ==--

let ImgEmbed = new Discord.Attachment(img, "welcome-ZeewApi.png")
let embed = new Discord.RichEmbed()
.attachFile(ImgEmbed)
.setImage('attachment://welcome-ZeewApi.png')
member.guild.channels.get("Id del canal").send(embed)

// --== DISCORD V12 ==--

let ImgEmbed = new Discord.MessageAttachment(img, "welcome-ZeewApi.png")
let embed =  new  Discord.MessageEmbed()
.attachFile(ImgEmbed)
.setImage('attachment://welcome-ZeewApi.png')
member.guild.channels.cache.get("Id del canal").send({ embed: embed });
 ```