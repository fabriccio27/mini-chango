## Refactorizacion
Los siguientes cambios fueron implementados:

* Conversion de class-based components a functional components
* Renombramiento de algunas variables (para mejorar lectura de codigo y refactorizacion, aunque no baja su reusabilidad puede quedar raras en algunas situaciones).
* Uso de hooks para definir estado en componente principal
* Uso de hooks para definir un contexto, y reducir el uso de acceso a metodos y objetos por medio de props en componentes inferiores.

Los componentes inferiores previos fueron comentados en el mismo archivo, para referencia.

## Requerimientos
Es necesario instalar `bootstrap@4.1.1` e importar en `AppRe.js` (Componente principal refactorizado) la libreria mediante :
```
import 'bootstrap/dist/css/bootstrap.min.css';
```