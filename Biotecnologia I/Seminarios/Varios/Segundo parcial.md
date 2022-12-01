# La siguiente figura (extraída de DOI 10.1099/mic.0.27481‐0) representa la concentración de biomasa (cuadrado negro), glucosa (triángulo negro), acetato (triángulo blanco) y velocidad volumétrica de formación de CO2 (CTR‐círculo blanco) en función de la velocidad de dilución D para el cultivo continuo limitado en glucosa de *E. coli* TG1. En la publicación se mencionan las siguientes condiciones de cultivo:

- biorreactor de 2L (volumen de trabajo).
- equipado con control de temperatura (28°C).
- pH (6.0).
- oxígeno disuelto (>20% de saturación).
- velocidad del agitador (800rpm).
- aireación (1.3VVM).

![](https://i.imgur.com/RERlydT.png)

Con la información aportada respondé las siguientes consignas:

## 1. Representa de manera esquemática dos sistemas de cultivo que te permitan obtener biomasa microbiana sin producir acetato. Justificá las elecciones que realizaste.

**Batch alimentado**
   ![](https://i.imgur.com/kWWnFtF.png)

- El batch alimentado permite controlar el crecimiento dentro del reactor a traves del control de la alimentacion.
- Es un cultivo restricto cineticamente ya que en velocidad de crecimiento esta restringida por la velocidad a la que ingresa el sustrato limitante. Con el control de la velocidad de crecimiento se va a poder optimizar al sistema para obtener producto o biomasa

**Cultivo continuo**
![](https://i.imgur.com/rySWgR9.png)
- En el cultivo continuo se puede controlar u, a travez del control de ingreso de sustrato limitante

## 2. Escribí el balance de acumulación para el sustrato limitante y la biomasa, y obtené las ecuaciones que te permitan visualizar si los microorganismos crecen a velocidad específica controlada por el operador en los dos sistemas de cultivo que elegiste en el punto 1. Justifica tu respuesta.

![](https://i.imgur.com/FJF01r1.png)

## 3. Explicá cómo procederías para obtener los valores que representan a cualquier punto de la gráfica X en Estado Estacionario (EE) de la figura.

para graficar debo tomar entre 4 y 6 muestras cada tr, asi llegare a estar a los 4tr o incluso a pasarlos. Cada punto de la curva es un EE diferente donde trabajamos a un D determinado

## 4. Explicá cómo sería el comportamiento de la biomasa en EE a bajos valores de D bajo las condiciones de cultivo de la figura y comparalo con lo que ocurriría si el cultivo fuera limitado en Nitrógeno. Justificá con ecuaciones.

![](https://i.imgur.com/kYLHfbD.jpg)

## 5. Considerando la información de la figura, elegí una condición del cultivo continuo que te permita obtener 100 gr de biomasa de *E. coli* TG1. Detallá el flujo de medio de cultivo y el tiempo durante el que deberías cosechar el cultivo.

## 6. Respecto al TP de producción de levadura de panificación en sistema batch alimentado: escribí las ecuaciones que se utilizaron para el diseño de la alimentación y nombrá las condiciones de diseño de alimentación necesarias para que se cumpla el objetivo de obtener una determinada cantidad de biomasa sin producción de etanol.

Si estamos en la situación del tp donde se quiere evitar que se forme etanol, podría calcular el coeficiente respiratorio. Es facil de medir porque durante el cultivo se miden gases, pudiendo calcular ro2 y rco2; y el cociente es la relación rco2/ro2.

- El cociente respiratorio podía tomar valores mayores a 1 → implica que podría haber formación de etanol.
- En el batch alimentado espero que el cociente sea menor a 1 porque no quiero que forme etanol.

cR>1 produce etanol → porque tiene el metabolismo fermentativo-oxidativo; en esa formación de etanol se libera un CO2 extra. A la relación 1:1 de cadena de electrones se le suma la formación de CO2 por descarboxilación del piruvato a etanol.

Para evitar la formación de etanol, es necesario controlar 
- la velocidad específica de crecimiento 
- la velocidad de consumo de glucosa (qs) → a partir de la restriccion de la FCE. 

- Yx/s = Xf . Vf - X0 . V0 / Sr . dV
  dV = F . t

- Sr = Xf . Vf - X0 . V0 / Yx/s . ( Vf - V0)
- F . Sr = u0 . X0 . V0 / Yx/s
- Vf - V0 = F . t
- CR = rCO2 / rO2

## 7. Nombrá 3 maneras diferentes de verificar que la etapa de alimentación del cultivo realizado en el TP se ajustó a las condiciones de diseño. Explicá de manera esquemática qué tipo de muestras tomaste, cómo las procesaste, que determinaste en ellas y cuáles fueron los cálculos que te permitieron realizar esa verificación.

**Medidas experimentales de la fase liquida**:
- **CL**
1. Calibrar el electrodo para medir O2 disuelto 
2. pasa una corriente de N2(g) y ajusta la lectura a 0% de saturación (cero)
3. despues se pasa aire a un caudal de 2 l/min, ajustando con la perilla de calibración a 100% de saturación. 

En ambos casos, antes de realizar los ajustes, se debe dejar transcurrir 10 a 15 minutos.

- **Sustrato**
	Se mide a partir de la DO del sobrenadante que se guarda, se utilizo una cubeta de 1mL


**Medidas experimentales de la fase gaseosa**
- **CR**
	1. conecta manguera a salida de gases del bioreactor y se determina el consumo de O2 y la produccion CO2
	2. regula caudal de entrada para comparar a valor estandarizado
	3. registra O2 y CO2 cuando se estabilizan las medidas

