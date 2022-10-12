# a) Señala en el gráfico las etapas del cultivo que distinguís. Escribí el balance de acumulación para la biomasa en cada etapa.

![](https://i.imgur.com/g47kWG3.png)

- Hasta la hora 3, sera la fase lag.
- De la hora 3 hasta la 18 sera exponencial.
- 18 hasta en adelante sera fase estacionaria 
- Decaimiento no es visible en este grafico

Planteamos la ecuacion general de balance de masa:
donde C sera nuestra biomasa

(dC * V / dt) = (F1 * C1) - (F2 * C2) + Vrf - Vrc

Donde: 
- F → flujo 
- C → concentracion
- Vrf → Velocidad de formacion 
- Vrc → Velocidad de consumo
Los subindices 1 (entrada) y 2 (salida)

Como estamos en un cultivo batch, tenes que el Flujo de entrada y de salida al biorreactor seran 0 
F1 = F2 = 0. Por lo que mi ecuacion se reduce a 

**Ec. 1**
(dC * V / dt) = Vrf - Vrc

Tambien como el volumen no  se modifica ( ya que no hay ingreso ni egreso de liquido). Volumen = constante

**Ec. 2**
dV / dt = F1 - F2 = 0 

Reemplazando para biomasa en **Ec. 1** me da 
(dX/dt) = rx

donde:
rx → Velocidad volumetrica de formacion de biomasa (Cmol / L * H) o (g / L * H)
 
# b) ¿Qué tipo de muestras se tomaron para obtener los puntos mostrados en el gráfico y cómo se procesaron?

Para medir el peso seco:
se extrajo 1mL del cultivo y fue centrifuga a 8000 rpm durante 10 minutos.
Despues de la centrifugacion los pellets fueron lavados dos veces con agua destilada y fueron secados a 90C hasta obtener un peso constante.
Por ultimo se los enfrio en disecantes hasta tambien obtener un peso constante

Para los PHAs:
El medio fue centrifugado a 8000 rpm durante 10 minutos.


c) Escribí la ecuación estequiométrica de crecimiento para este microorganismo creciendo en estas condiciones incluyendo todos los valores de los coeficientes correspondientes y sus unidades. Enunciá las suposiciones que hacés.

d) ¿La fuente de carbono y energía (glucosa) fue el sustrato limitante de crecimiento en este cultivo? Enunciá las suposiciones que hacés.

e) Calcula la cantidad de (NH4)2SO4 mínima necesaria para obtener la biomasa final alcanzada. Enunciá las suposiciones que hacés.

f) Explicá cómo realizarías el cálculo de las velocidades volumétricas de crecimiento, de consumo de sustrato y de producción de producto a las 10 hs de cultivo.

g) Agregá sobre el gráfico la curva que muestra el comportamiento de qO2 y CL durante el cultivo hasta que se detiene el crecimiento. Justifica con ecuaciones.

h) Evaluá si con un biorreactor con un Kla= 800 h-1 se hubiera podido llevar a cabo el cultivo tal como se muestra en la gráfica. Enunciá las suposiciones que haces.

i) Calculá la cantidad total de calor liberado. Enunciá las suposiciones que haces.

j) Definí matemáticamente y explicá el significado de la función disipación. Calculá la energía libre total disipada al ambiente durante el cultivo
