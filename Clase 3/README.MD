#### Tarea de hoy

---

Implementar un programa que descargue datos desde diferentes endpoints de la api http://jsonplaceholder.typicode.com.

El programa debe ejcutarse de la siguiente forma:

```bash
$ node tarea3.js "Ervin Howell"
```

El programa debe generar un archivo de salida con el `username` del nombre ingresado como argumento del programa de la forma: *Antonette.json*

- Usando el nombre ingresado por consola, se debe buscar en la api los datos del usuario (id, name, username, email). *(/users)*
- Cada usuario tiene un id, a partir de este id se obtienen los albums de ese usuario. *(/albums)*
- Para cada album se obtienen las fotos de dicho album *(/photos)*

El archivo debe contener la siguiente estructura:

```json
{
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    albums: [
        {
            id: 11
            title: "quam nostrum impedit mollitia quod et dolor",
            photos: [
                {
                    albumId: 11,
                    id: 501,
                    title: "asperiores exercitationem voluptates qui amet quae necessitatibus facere",
                    url: "http://placehold.it/600/cda4c0",
                    thumbnailUrl: "http://placehold.it/150/cca74"
                },
                {
                    albumId: 11,
                    id: 502,
                    title: "omnis qui sit et",
                    url: "http://placehold.it/600/74e371",
                    thumbnailUrl: "http://placehold.it/150/e9faf2"
                },
                ...
            ]
        },
        {
            id: 12
            title: "quam nostrum impedit mollitia quod et dolor",
            photos: [
                ...
            ]
        }
        ...
    ]
}
```




