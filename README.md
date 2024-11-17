# DI UNIDAD 2, ACTIVIDAD 10
## Ejercicio 1: Corregir las actualizaciones de estado incorrectas
Este formulario tiene algunos errores. Haz clic en el botón que aumenta la puntuación unas cuantas veces. Observa que no aumenta. A continuación, edita el nombre, y observa que la puntuación se ha «puesto al día» con sus cambios. Por último, edita el apellido y observa que la puntuación ha desaparecido por completo.

Tu tarea es arreglar todos estos errores. A medida que los vayas arreglando, explica por qué ocurre cada uno de ellos.

## Ejercicio 2: arreglar entradas de formulario atascadas
Cuando escribimos en los campos del formulario de Form.js, no obtenemos nada. Es como si los valores estuvieran «atascados» con cadenas vacías. El valor de la primera <entrada> está configurado para coincidir siempre con la variable firstName, y el valor de la segunda <entrada> está configurado para coincidir siempre con la variable lastName. Esto es correcto. Ambas entradas tienen controladores de eventos onChange, que intentan actualizar las variables en función de la última entrada del usuario (e.target.value). Sin embargo, las variables no parecen «recordar» sus valores entre renderizaciones. Solucionemos esto usando variables de estado en su lugar.

## Ejercicio 3: arregla un error
En FeedbackForm.js hay un pequeño formulario que se supone que permite al usuario dejar algunos comentarios. Cuando se envía el comentario, se supone que debe mostrar un mensaje de agradecimiento. Sin embargo, falla con un mensaje de error que dice «Se generaron menos Hooks de los esperados». ¿Puedes detectar el error y corregirlo?

## Ejercicio 4: eliminar estado innecesario
Cuando se hace clic en el botón de FeedbackForm2.js, este ejemplo debe solicitar el nombre del usuario y luego mostrar una alerta saludándolo. Intentaste usar el estado para mantener el nombre, pero por alguna razón siempre muestra «¡Hola!«.

Para corregir este código, elimina la variable de estado innecesaria. 

¿Puede explicar por qué esta variable de estado era innecesaria?