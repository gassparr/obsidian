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

Tambien como el volumen no se modifica ( ya que no hay ingreso ni egreso de liquido). Volumen = constante

**Ec. 2**
dV / dt = F1 - F2 = 0

Reemplazando para biomasa en **Ec. 1** me da
(dX/dt) = rx
(se removieron los volumenes)

donde:
rx → Velocidad volumetrica de formacion de biomasa (Cmol / L * H) o (g / L * H)
 rx = rf - rc

# b) ¿Qué tipo de muestras se tomaron para obtener los puntos mostrados en el gráfico y cómo se procesaron?

Para medir el peso seco:
1. Se extrajo 1mL del cultivo y fue centrifuga a 8000 rpm durante 10 minutos.
2. Despues de la centrifugacion los pellets fueron lavados dos veces con agua destilada y fueron secados a 90C hasta obtener un peso constante.
3. Por ultimo se los enfrio en disecantes hasta tambien obtener un peso constante

Para los PHAs:
1. El medio fue centrifugado a 8000 rpm durante 10 minutos.
2. Los pellets se resuspenden en NaClO (cloro comercial) en el mismo volumen original de medio (250ml) y se mezcla.
3. Se incuba la mezcla a 37C durante 1h.
4. Mezcla se centrifuga y se lava 2 veces con agua destilada para remover el cloro (el cual contiene a los componentes celulares).
5. Los pellets blancos se lavan con acetona y etanol para remover el producto lipidico.
6. Los PHAs se extraen con cloroformo
7. Se transfiere al cloroformo a un tubo y se evapora.
8. Se agrega 10ml de H2SO4 y se calienta a 100C por 10 minutos y despues se lo enfria a Temperatura ambiente.
9. Se determina el producto por espectrofotometro a 235 nm

# c) Escribí la ecuación estequiométrica de crecimiento para este microorganismo creciendo en estas condiciones incluyendo todos los valores de los coeficientes correspondientes y sus unidades. Enunciá las suposiciones que hacés.

CH2O + a NH3 + b O2 → Yx/s CH1.8O0.5N0.2 + Yp/s P + Yco2/s CO2 + w H2O

- supongo biomasa estandar
- utilizo modelo de la caja negra
- supongo mezclado perfecto del reactor

Yx/s = 0.19 cmolx/cmols
Yp/s = 0.15 cmolp/cmols
Yco2/s = 0.66 molco2/cmols
a = 0.038 mol nh3/ cmols
b = 0.632 mol O2/ cmols
w = 0.774 molH2O/cmols

# d) ¿La fuente de carbono y energía (glucosa) fue el sustrato limitante de crecimiento en este cultivo? Enunciá las suposiciones que hacés.

Observando el grafico, se puede decir que la fuente de nitrogeno es el sustrato limitante, ya que la FCE nunca alcanza 0 en el proceso

# e) Calcula la cantidad de (NH4)2SO4 mínima necesaria para obtener la biomasa final alcanzada. Enunciá las suposiciones que hacés.

biomasa
25.8 g → 1 cmol x
3 g (x final) → 0.12 cmol x

NH3
0.038 mol NH3 → 0.19 cmolx (sacado de la ecuacion)
0.024 mol NH3 → 0.12 cmol x

Como yo uso (NH4)2SO4, divido por 2 ya que cada mol de sulfato me brinda 2 de NH3

0.024 mol NH3 / 2 = 0.012 mol (NH4)2SO4
0.012 mol (NH4)2SO4 * 132 g/mol = 1.584g

# f) Explicá cómo realizarías el cálculo de las velocidades volumétricas de crecimiento, de consumo de sustrato y de producción de producto a las 10 hs de cultivo.

## Velocidad volumetrica de crecimiento

La definicion de velocidad volumetrica es:
**dx/dt = rx = u * x**

Tomando valido el modelo de monod
**dx/dt = umax * (S / Ks + S) * X**

Segun el modelo de monod, si nos encontramos en la fase exponencial
**dx/dt = umax . X**
e integrando esta obtenemos
**ln X = ln X0 + umax . t**.
La forma exponencial sera
**X = X0 . e^(umax . t)**
Reemplazando el valor de X en la primera ecuacion de rx nos da
**rx = umax * X0 * e^(umax * t)**
Esto nos permite conocer la velocidad volumetrica rx en cualquier tiempo

## Velocidad de consumo de sustrato
sabemos que 
**Yx/s = rx/rs**
y que **rx = u * x**
Utilizamos la ecuacion de monod y reemplazamos
**dx/dt = umax * (S / Ks + S) * X** 
 # g) Agregá sobre el gráfico la curva que muestra el comportamiento de qO2 y CL durante el cultivo hasta que se detiene el crecimiento. Justifica con ecuaciones.

# h) Evaluá si con un biorreactor con un Kla= 800 h-1 se hubiera podido llevar a cabo el cultivo tal como se muestra en la gráfica. Enunciá las suposiciones que haces.

# i) Calculá la cantidad total de calor liberado. Enunciá las suposiciones que haces.

# j) Definí matemáticamente y explicá el significado de la función disipación. Calculá la energía libre total disipada al ambiente durante el cultivo
