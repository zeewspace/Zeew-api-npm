![npm](https://i.imgur.com/MP2bABn.png)

# Zeew Api


- [Zeew Api](#zeew-api)
  - [Informacion](#informacion)
  - [Instalacion & Uso](#instalacion--uso)
  - [Contenido](#contenido)
    - [SFW](#sfw)
    - [NSFW](#nsfw)
    - [IMG](#img)
    - [CARDS](#cards)
  - [Ayuda & Soporte](#ayuda--soporte)
    - [Soporte](#soporte)
    - [Staff](#staff)
    - [Proyectos](#proyectos)
    - [Donaciones](#donaciones)
  - [DISCORD](#discord)
    - [Enviando cards de bienvenidas.](#enviando-cards-de-bienvenidas)
    - [Enviar la imagen](#enviar-la-imagen)
      - [Ejemplos y que hacer](#ejemplos-y-que-hacer)
      - [Comando triggered](#comando-triggered)
      - [Usando Card de Bienvenida](#usando-card-de-bienvenida)
- [GRACIAS ♥](#gracias-)

## Informacion

🙋‍♂️ As tu proyecto mas unico y especial con esta api hermosa

ZeewApi es una api que te ayudara a tener imagenes personalizadas, cards de bienvenida, niveles, gif de interaccion y mucho mas.

A si que olvidate de estar sufriendo por aprender canvas, jimp u otros modulos parecidos, usar otros modulos que hacen lo mismo y que pensan demaciado o no funcionan correctamente.

No olvides que puedes [`apoyar 💰`](#DONACIONES) y obtener grandes beneficios. Y asi ayudas que seamos el mejor !!!

> Te recomiendo leer la documentacion y ver los ejemplos

> #TeamZeewApi


## Instalacion & Uso

Para poder usar la api necesitas un `token` lo cual puedes obtenerlo en el servidor de discord.

Cada categoria tiene su propio contructor para tener todo mas ordenado y separada de cada contenido.

Tienes un ejemplo del contructor, como usarlo y su contenido para que no estes tan perdido, pero si necesitas ayuda lee la [documentacion](#SOPORTE)

Todas las funciones son promesas, a si que no olvides usar el `async/await` o el `then/catch`

## Contenido


<a name="SFW"></a>

### SFW

- **Como usarlo**

```javascript
const Zeew = require("zeew");
const sfw = new Zeew.sfw("TOKEN");

// -= Sin valor =-
sfw.kiss();
```

- **Contenido SFW**

| Funcion | Descripcion |
| ------- | :---------: |
| neko    | Chicas gato |
| kiss    |    beso     |
| slap    |  bofetada   |
| wink    |    giño     |
| run     |   correr    |
| dance   |   bailar    |
| hug     |   abrazo    |
| cry     |   llorar    |
| punch   |    golpe    |
| wasted  |   wasted    |


<a name="NSFW"></a>

### NSFW

- **Como usarlo**

```javascript
const Zeew = require("zeew");
const nsfw = new Zeew.nsfw("TOKEN");

// -= Sin valor =-
nsfw.oppais();
```

- **Contenido NSFW**

| Funcion | Descripcion |
| ------- | :---------: |
| Proxima |   version   |

<a name="IMG"></a>

### IMG

- **Como usar el constructor**

```javascript
const Zeew = require("zeew");
const img = new Zeew.img("TOKEN");

// -= Valor =-
img.triggered("https://i.imgur.com/eb2fGQj.jpg");

// -= valor doble=-
img.pixel("https://i.imgur.com/eb2fGQj.jpg", 10);

// -= valor triple=-
img.shipeo(
  "https://i.imgur.com/eb2fGQj.jpg",
  "https://i.imgur.com/eb2fGQj.jpg",
  "https://i.imgur.com/eb2fGQj.jpg"
);
```

- **Contenido IMG**

| Funcion    |            Descripcion             |                  Valor |
| ---------- | :--------------------------------: | ---------------------: |
| triggered  |             triggered              |                 imagen |
| sepia      | tonos naranjas con poco saturacion |                 imagen |
| invertir   | Invierte los colores de la imagen  |                 imagen |
| gris       |      converte a tonos grises       |                 imagen |
| desenfoque |        desenfoca una imagen        |      imagen & cantidad |
| pixel      |         Pixelea una imagen         |      imagen & cantidad |
| gay        |       coloca la bandera gay        |                 imagen |
| circulo    |  convierte una imagen en circulo   |                 imagen |
| shipeo     |          un hermoso ship           | imagen, imagen, imagen |


<a name="CARDS"></a>

### CARDS

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

---

## Ayuda & Soporte

<a name="SOPORTE"></a>

### Soporte

Si tienes errores, bugs o quieres contactarnos.

- **Discord**
  - [Servidor del Creador](https://discord.gg/ybAN7w8)
  - [Servidor del Soporte](https://discord.gg/6tCdxshm9w)
- **Redes Sociales**
  - Creador: `@KamerrEzz`
  - COO: [`@mrbugexe`](https://twitter.com/mrbugexe)

---

<a name="STAFF"></a>

### Staff

- **Kamerr Ezz**

```
* ROL: Founder
* ID Discord: 403695999941345280
* Redes Sociales: @KamerrEzz
* Pagina Web: KamerrEzz.com
```

- **Mr.Bug**

```
* ROL: Dev and TEAM
* ID Discord: 409769315357687809
* Twitter: @MrBugexe
* Proyecto: https://discord.gg/3x5nWkKAzr
```

---

<a name="PROYECTOS"></a>

### Proyectos

| Proyecto                                           |         Descripcion |
| :------------------------------------------------- | ------------------: |
| [Zeew-Eco](https://www.npmjs.com/package/zeew-eco) | Sistema de economia |
| [Zeew-Level](https://www.npmjs.com/)               |  Sistema de niveles |

---

<a name="DONACIONES"></a>

### Donaciones


| Donacion                                         |                 Descripcion |
| :----------------------------------------------- | --------------------------: |
| [paypal](https://www.paypal.me/kamerrezzoficial) | Apoya a kamerr desde paypal |
| [patreon](https://paypal.me/Bug0001)             |     Apoya a bug con un cafe |

---

<a name="DISCORD"></a>

## DISCORD

Las personas no le gusta leer la documentacion, pero ni modos, tienen que leerlo para saber como funciona, pero aun asi, soy muy buena persona que te ayudare un poquito

Si no sabes leer la documentacion te dejo este hermoso video de [Como leer la documentacion de discord por ksgrapin](https://www.youtube.com/watch?v=FnN2OP5S6s8)

> Actualizacion: 11/agosto/2020 > discord.js v12

### Enviando cards de bienvenidas.

- Evento para las Bienvenidas
  - [guildMemberAdd](https://discord.js.org/#/docs/main/v12/class/Client?scrollTo=e-guildMemberAdd)
  - [guildMemberRemove](https://discord.js.org/#/docs/main/v12/class/Client?scrollTo=e-guildMemberRemove)

### Enviar la imagen

Podemos enviar la Bienvenidas, targetas (cards) o imagenes, de diferente formas.

A qui te mostrare como hacerlas.

Mas ayuda y ejemplos en nuestro servidor de discord o en la pagina.

#### Ejemplos y que hacer

```js
/* Como debes colocar cuando usas avatarURL */
let avatar = message.author.avatarURL({ format: "jpg" });

/* Como debes colocar cuando mandas gif usando attcment*/
let attchment = new MessageAttachment(img , "zeewapi-img.gif");
```

<a name="mensajes"></a>

#### Comando triggered

```javascript
const Zeew = require("zeew"); //NPM
const img = new Zeew.img("Token"); //CARGAR las funciones de IMG

let avatar = message.author.avatarURL({ format: "jpg" }); //Avatar

let triggered = img.triggered(avatar); //Funcion

let attchment = new MessageAttachment(img, "zeewapi-img.gif"); //Mandar la imgen en gif

message.channel.send(attchment); //Enviando el gif de triggered
```

#### Usando Card de Bienvenida

```js
const Zeew = require("zeew");

client.on("guildMemberAdd", async (member) => {
  let wel = new Zeew.Bienvenida()
    .token("TOKEN") // pide tu token
    .estilo("classic")
    .avatar(member.user.displayAvatarURL({ format: "png" }))
    .fondo("LINK DE LA IMÁGEN")
    .colorTit("#FF3DB0")
    .titulo("Bienvenido")
    .colorDesc("#fff")
    .descripcion("Tenemos un nuevo usuario");

  let img = await Zeew.WelcomeZeew(wel);
  let attachment = new MessageAttachment(img, "zeewapi-img.gif");

  client.channels.resolve("ID DEL CANAL").send(attachment);
});
```

# GRACIAS ♥
