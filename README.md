![npm](https://i.imgur.com/MP2bABn.png)

# Zeew Api

## Informacion

soy una api de imagenes de interaccion, pero mi fuerte son las cards para bienvenidas o presentacion.

Soy una api creada para los creadores de bots crear cards de bienvenidas.

y lo mejor que estoy completamente en español ♥

> No olvides que si apoyas el proyecto con una pequeña [dontacion](#DONACIONES) , obtendras benefios grandes y cards personalizadas.

> Recuerda que las donaciones ayudan a que #VivaZeewApi.

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
  - [Ejemplos con Discord.js](#Discord)

## Instalacion & Uso

Para usar debes tener un token. puedes optenerlo desde el servidor de soporte en discord.

El `valor` son los parametros o valores que necesita la api o la funcion.

te ayudamos con un ejemplos [para usar con tu bot](#Discord).

Las funciones retornan una promesa, a si que recuerda usar el async/await, para evitar un callback enorme.

<a name="SFW"></a>

### Constructor SFW

- **Como usar el constructor**

```javascript
const Zeew = require("zeew");
const sfw = new Zeew.sfw("Token");
```

- **Contenido SFW**

| Funcion | Descripcion |         Valor |
| ------- | :---------: | ------------: |
| kiss    |    beso     |
| punch   |    golpe    |
| neko    |    gatio    |
| wink    |    giño     |
| slap    |  bogetada   |
| run     |   correr    |
| hug     |   abrazo    | anime o human |
| cry     |   llorar    | anime o human |
| cookie  |  galletas   | anime o human |
| dance   |    baile    | anime o human |

- **Ejemplo**

```javascript
const Zeew = require("zeew");
const sfw = new Zeew.sfw("TOKEN");

// -= Valor =-
sfw.hug("anime");

// -= Sin valor =-
sfw.kiss();
```

<a name="SFW"></a>

### Constructor IMG

- **Como usar el constructor**

```javascript
const Zeew = require("zeew");
const img = new Zeew.img("Token");
```

- **Contenido IMG**

| Funcion    |            Descripcion             |             Valor |
| ---------- | :--------------------------------: | ----------------: |
| triggered  |             triggered              |            imagen |
| sepia      | tonos naranjas con poco saturacion |            imagen |
| invertir   | Invierte los colores de la imagen  |            imagen |
| gris       |      converte a tonos grises       |            imagen |
| desenfoque |        desenfoca una imagen        | imagen & cantidad |
| pixel      |         Pixelea una imagen         | imagen & cantidad |
| gay        |       coloca la bandera gay        |            imagen |
| circulo    |  convierte una imagen en circulo   |            imagen |


- **Ejemplo**

```javascript
const Zeew = require("zeew");
const img = new Zeew.img("TOKEN");

// -= Valor =-
img.pixel("https://i.imgur.com/eb2fGQj.jpg");

// -= valor doble=-
img.pixel("https://i.imgur.com/eb2fGQj.jpg", 10);
```

<a name="BW"></a>

### Constructor Bienvenida

- **Contenido Card Bienvenida**

| Funcion     |          Descripcion |
| :---------- | -------------------: |
| token       |      clave de acceso |
| estilo      |    Estilo de la card |
| avatar      |    imagen del perfil |
| fondo       |      Imagen de fondo |
| colorTit    |     color del titulo |
| titulo      |    titulo de la card |
| colorDesc   |     color de la desc |
| descripcion | texto de descripcion |

- **Estilos**

  - [classic](https://i.imgur.com/XqOGyel.png)
  - [anime](https://i.imgur.com/ZEt9X63.png)

- **Modo de Uso**

```javascript
const Zeew = require("zeew");

let wel = new Zeew.Bienvenida()
  .token("TOKEN")
  .estilo("classic")
  .avatar("https://i.imgur.com/09RRYve.jpg")
  .fondo("https://i.imgur.com/0YrfJgx.jpg")
  .colorTit("#FF3DB0")
  .titulo("Bienvenido")
  .colorDesc("#fff")
  .descripcion("Tenemos un nuevo usuario");

/*Esto sirve para crear la imagen con los dato proporcionados*/
let img = await Zeew.WelcomeZeew(wel);
```

## Informacion & Soporte

<a name="SOPORTE"></a>

### Soporte

Si tienes errores, bugs o quieres contactarnos.

- **Discord**
  - [Servidor del Creador](https://discord.gg/ybAN7w8)
  - [Servidor del Soporte](https://discord.gg/ZqvqUyx)
- **Redes Sociales**
  - Creador: `@KamerrEzz`
- **Web**
  - [Solo Informacion](https://kamerrezz.github.io/za-web/)

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

| Proyecto                                           |       Descripcion |
| :------------------------------------------------- | ----------------: |
| [Zeew-eco](https://www.npmjs.com/package/zeew-eco) | Crea una economia |

### Donaciones

<a name="DONACIONES"></a>
Donacion | Descripcion
:--- | ---:
[ko-fi](https://ko-fi.com/kamerrezz) | Apoya desde cofi
[paypal](https://www.paypal.me/kamerr) | Apoya desde paypal

<a name="Discord"></a>

## Usalo para discord

La mayoria de la gente es demaciadamente floja para leer la documentaicon para usar bien el NPM.

Hay personas que son nuevas y hay que ayudarles en algunas cosas.

> Actualizacion: 11/agosto/2020 > discord.js v12

### Enviando cards de bienvenidas.

- Evento para las Bienvenidas
  - [guildMemberAdd](https://discord.js.org/#/docs/main/v12/class/Client?scrollTo=e-guildMemberAdd)
  - [guildMemberRemove](https://discord.js.org/#/docs/main/v12/class/Client?scrollTo=e-guildMemberRemove)

### Enviar la imagen

Podemos enviar la Bienvenidas, targetas (cards) o imagenes, de diferente formas.

A qui te mostrare como hacerlas.

#### Indice
* [Mensajes](#mensajes)
* [Attachment](#embed)


```js

/* Como debes colocar cuando usas avatarURL */
let avatar = message.author.avatarURL({format: 'jpg'})

/* Como debes colocar cuando mandas gif usando attcment*/
let attchment = new MessageAttachment(img, "zeewapi-img.gif")
```


<a name="mensajes"></a>

```javascript
/*

    --== CODE DE LA CARD DE BIENVENIDA ==--

*/
      // VARIABLE YA MOSTRADO
let img = await Zeew.WelcomeZeew(wel);

// --== OPCION 1 ==--
.send({files: [img]})

// --== OPCION 2 ==--
let {MessageAttachment} = require('discord.js')
let attchment = new MessageAttachment(img)

.send(attchment)


/*
Mas Informacion

--== OPCION 2 ==--
https://discord.js.org/#/docs/main/stable/examples/attachments

--== OPCION 1 ==--
https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=send
*/



```

<a name="embed"></a>

```javascript
/*

        --== CODE DE LA BIENVENIDA / CARD ==--

*/

let img = await Zeew.WelcomeZeew(wel);

// ATTACHMENT
let ImgEmbed = new Discord.MessageAttachment(img, "welcome-ZeewApi.png");

let embed = new Discord.MessageEmbed()
  .attachFiles(ImgEmbed)
  .setImage("attachment://welcome-ZeewApi.png");
member.guild.channels.cache.get("Id del canal").send(embed);

/*
  // --== MessageEmbed > attachFiles ==--
  > https://discord.js.org/#/docs/main/v12/class/MessageEmbed
*/
```



## GRACIAS ♥
