# 1. Realiza Esquemas de Dos Sistemas de Cultivo que Te Permitan Obtener Biomasa de Levadura Evitando la Producción de Etanol Teniendo en Cuenta los Datos que Se Muestran en la Imagen. Justificá las Elecciones que Realizaste. Nombrá Ventajas y Desventajas de Usar Esos Sistemas de Cultivo Con Ese Propósito.

**Batch alimentado**
   ![](https://i.imgur.com/kWWnFtF.png)

- El batch alimentado permite controlar el crecimiento dentro del reactor a traves del control de la alimentacion.
- Es un cultivo restricto cineticamente ya que en velocidad de crecimiento esta restringida por la velocidad a la que ingresa el sustrato limitante. Con el control de la velocidad de crecimiento se va a poder optimizar al sistema para obtener producto o biomasa
- control de u manipulando Sr o Nr

**Cultivo continuo**
![](https://i.imgur.com/rySWgR9.png)
- En el cultivo continuo se puede controlar u, a través del control de ingreso de sustrato limitante
- control de u manipulando Sr y D

Los microorganismos a altos valores de um forman productos, mientras que a bajos valores de u, no los forman. Para evitar la formacion de productos vamos a tener que utilizar sistemas de cultivo que nos permitan poder mantener u en valores bajos, los sistemas de cultivo que nos permiten esto son:
- Cultivo continuo
- Batch alimentado
Ambos son cultivos restrictos que le permiten al operador controlar u, controlando la velocidad a la que ingresa el sustrato limitante.

# 2. Escribí El Balance de Acumulación Para la Biomasa y El Sustrato Limitante en Sistema de Cultivo Continuo. Enumerá los Datos Experimentales que Necesitas y Cómo los Utilizas Para Calcular las Velocidades Volumétricas de Crecimiento y de Consumo de Sustrato en Este Sistema de Cultivo.

F1 = F2 = F

V1 = cte

(dVA / dt) = (F1 . A1) - (F2 . A2) +- V . ra

V . (dA/dt) = (F1 . A1) - (F2 . A2) +- V . ra

(dA/dt) = (F . A1 / V) - (F . A2 / V) +- V . ra

(F / V) = D

> En estado estacionario → dA/dt = 0

# 3. ¿Cómo Explicas El Comportamiento Mostrado en la Figura Para las Curvas de Velocidad Específica de Consumo de O2 y de Producción de CO2? ¿Cómo Varía El Valor Del Cociente Respiratorio a Diferentes Valores de D? Justificá.

rO2 = qO2 . X → qO2 = rO2 / X

rCO2 = qCO2 . X → qCO2 = rO2 / X

Hasta el valor de D = 0.4 el consumo de O2 y produccion de CO2 van en una relacion cercana a 1, cuando llega a D = 0.4, la concentracion de S aumenta y la concentracion de X disminuye casi instantaneamente de 8 g/L a 4 g/L. Por otro lado, la produccion de P (etanol) aumenta en ese instante, lo cual nos es indicativo que nuestro microorganismo esta cambiando su metabolismo de uno oxidativo a uno fermentativo.
Como el microorganismo esta utilizando ineficientemente al O2, la velocidad de consumo de O2 se detiene en 10mmol / g. L.
Mientras que la formacion de producto tambien nos genera CO2, lo cual se refleja en ese aumento de la velocidad de produccion.

El valor del coeficiente respiratorio (CR) aumenta a medida que aumenta D, ya que CR = rCO2 / rO2

# 4. Explicá la Metodología que Se Utilizó en El Trabajo Práctico Para Realizar las Determinaciones Experimentales y Cálculos Necesarios Para Conocer El Consumo Global de O2 y la Producción Global de CO2

1. registra los datos de la temperatura ambienta.
2. Conecta la salida de gases del reactor a un caudalimetro de burbuja y registra el tiempo que tarda la burbuja en pasar los aforos.
3. Conecta salida de gases del reactor al equipo de determinacion de O2 y CO2 y regular el caudal de entrada al equipo, utilizando valores estandarizados.
4. Esperar estabilizacion de medidas y registrar los porcentajes de O2 y CO2 a la salida del reactor.
5. Medir porcentaje de O2 en el aire de entrada al reactor

ahora, el consumo global de O2 y produccion global de CO2 esta definido como:
- Consumo global de O2 = Integral { V(i) . rO2 . dt }
- Produccion global de CO2 = Integral { V(i) . rCO2 . dt }

rO2 y rCO2 se calculan a partir de:
![](https://i.imgur.com/nd7US1w.jpg)

V (i) seran los volumentes extraidos

# 5. Considerando la información de la imagen y la disponibilidad de un biorreactor de volúmenes de trabajo entre 5-10 litros, diseñá un cultivo que te permita obtener 500g de levadura de panificación evitando la formación de etanol. Realizá un dibujo esquemático del sistema de cultivo a emplear y señalá el equipamiento que necesitas.
![](https://i.imgur.com/H3fMTNt.jpg)


Utilizo un BA
![](https://i.imgur.com/rySWgR9.png)

# 6. Respecto a un cultivo en sistema batch alimentado a caudal de alimentación y concentración de sustrato limitante (fuente de nitrógeno) constantes, mostrá en un gráfico como varía XV en función del tiempo. ¿Qué comportamiento tiene la velocidad específica de crecimiento en el tiempo? ¿Se observan cambios en esos comportamientos si el limitante es la fuente de carbono? Justifica con ecuaciones.

![](https://i.imgur.com/q71Gnox.jpg)

●	X.V aumenta a medida que pasa el tiempo
●	mu irá disminuyendo→ es controlado por el operador. CONTROL CINÉTICO, controlamos la velocidad a la que el MO crece.
●	El flujo es constante

En un BA 

F . Nr = u . X . V / y(x/n)

X . V = X0 . V0 + F . Nr . y(x/n) . t

y(x/n) = (Xf . Vf - X0 . V0) / Nr . (Vf - V0)

**Si el limitante se cambia por a ser el FCE**

F . Sr = u . X . V / y(x/s)

X . V = X0 . V0 + F . Sr . y(x/s) . t

y(x/n) = (Xf . Vf - X0 . V0) / Nr . (Vf - V0)

Si u disminuye, la fraccion de FCE destinada a manteniemiento va a aumentar, a mayor tiempo de cultivo, mayor gasto de FCE para mantenimiento y menor rendimiento (*y x/s*).
Los efectos del mantenimiento se describen por:

XV = (F . Sr / ms) + { (X0 . V0) - (F . Sr / ms) } . e ^ (- ms . y x/s . t)

- a tiempos cortos, XV caria linealmente con el tiempo igual que para el cultivo con FN limitante
- A tiempos largos XV = cte y es igual (F . Sr / ms) → biomasa final a obtener sera menor que la que se obtendria si el rendimiento hubiese sido constante

# 7. Realizá el esquema de un experimento que te permita conocer las constantes de Pirt respecto al efecto del mantenimiento sobre el crecimiento

- Construye un cultivo continuo limitado en FCE
- En cada Estado estacionario (EE) determino X y S
- Lo grafico y obtengo recta
- *Ordenada de origen = ms* y *pendiente = 1/y’x/s*

Esto proviene de la ecuacion:

qs = (D / y’x/s) + ms

En la grafica se utiliza

qs = (D / X) . ( Sr - S )