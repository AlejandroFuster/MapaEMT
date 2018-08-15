# Autobuses EMT de Málaga

Ejemplo de como visualizar mediante Leaflet la ubicación de los distintos autobuses, con los datos proporcionados por el Excmo. Ayto. de Málaga.


## ¿Cómo usarlo?

Puedes abrir el "index.html" que se encuentra en la carpeta "src" para poder visualizar en cualquier navegador el mapa.

### Datos utilizados

Se han usado los datos del [Excmo. Ayto. de Málaga](https://datosabiertos.malaga.eu/dataset/ubicaciones-de-autobuses-emt-en-tiempo-real/resource/9bc05288-1c11-4eec-8792-d74b679c8fcf/). En la API, se da el siguiente ejemplo (de gran utilidad) de uso en JavaScript con jQuery

```
  var data = {
    resource_id: '9bc05288-1c11-4eec-8792-d74b679c8fcf', //ID del recurso
  };
  $.ajax({
    url: 'http://datosabiertos.malaga.eu/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
      alert('Total results found: ' + data.result.total)
    }
  });
```

En el código de este ejemplo, se puede ver una manera tratar los datos para poder implementarse de manera óptima en Leaflet.

## Colaborar

¡Siéntete libre de abrir cualquier issue o colaborar con el proyecto de cualquier manera! Cualquier aportación será bienvenida. 

## Autor

* **Alejandro Fuster** - [AlejandroFuster](https://github.com/AlejandroFuster)

## Reconocimientos

* [Datos abiertos Ayto. Málaga](https://datosabiertos.malaga.eu/)

