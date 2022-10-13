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

CH2O + a NH3 + b O2 → Yx/s CH1.8O0.5N0.2 + Yp/s CH1.5O0.5 + Yco2/s CO2 + w H2O

- supongo biomasa estandar
- utilizo modelo de la caja negra
- supongo cultivo axenico

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

## Obtener rx

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


para calcular umax saco la pendiente de una recta en fase exponencial
**3-0.5 / 18 - 3 = 0.166 h-1
umax = 0.166**

Calculo X a t=10h
X
por lo tanto 
## Obtener rs

**rs=qs * X**
**Yx/s=rx/-rs**
**qs=(-rx * X) / yx/s**

Con qs puedo obtener rs(10hs)

## Obtener rp

**rp=qp * X**
**Yp/s= rp/-rs**
**qp=(yp/s * -rs) / X**
Con qp puedo obtener rp(10hs) 



 # g) Agregá sobre el gráfico la curva que muestra el comportamiento de qO2 y CL durante el cultivo hasta que se detiene el crecimiento. Justifica con ecuaciones.

Para calcular qO2 (el cual se mantiene constante a traves del tiempo) usamos:
**rO2 = qO2 * X**
**qO2 = rO2 / X**

Para calcular CL, como el microorganismo crece de manera exponencial, podemos decir que OTR = rO2.
Tambien sabemos que
**OTR = rO2 = Kla * (C* - Cl)**
despenjando
**Cl = C* - rO2/Kla**
dato:
C* = 0.0072 g/L

![](https://i.imgur.com/bYmwH7T.png)


# h) Evaluá si con un biorreactor con un Kla= 800 h-1 se hubiera podido llevar a cabo el cultivo tal como se muestra en la gráfica. Enunciá las suposiciones que haces.

suposiciones:
- Kla se mantiene
- U = Umax y es constante
- El crecimiento es exponencial

**Kla = 800 / 1h**
**C* = 0.0075 g/L = 7.5 mg/L**
sabiendo que cuando la transferencia de oxigeno es maxima, la concentracion de oxigeno disuelto en el seno del liquido (CL) es cero, podemos calcular OTR

**OTR max = Kla * C* = 800/1h * 7.5 mg/L = 6000 mg / h.L**

Para calcular rO2 al momento en el que tenemos Xf
**rO2 = (umax * X * b )/ Yx/s**

Yo tengo el valor de Xf, b e Yx/s previamente calculados, u max lo calculo utilizando con t siendo 18
**ln X = ln X0 + umax . t**
donde
X sera 3
X0 sera 0.5
t sera 18h
**0.061 h-1 = umax**
**rO2 =
(0.061 h-1 * 3gx/L * 0.674 gO2/gS) / 0.167 gx/gs = 0.74 gO2/L.h**

Con este valor podemos comparar pero como esta en g paso a miligramos (multiplico por 1000)
740 mgO2/L.h

OTRmax = 6000mgO2/L.h
rO2 = 740 mgO2/L.h

Como el OTRmax es mayor que rO2 podemos decir que se puede llevar a cabo el cultivo, ya que no esta limitado por el oxigeno

# i) Calculá la cantidad total de calor liberado. Enunciá las suposiciones que haces.

Tomando como referencia a CO2, H2O y N2 y debido a que estoy en un cultivo aerobico puedo utilizar la correlacion de Roels para facilmente calcular el calor liberado

dHr = -115 * 4 * b

b = 0.632 molO2/cmols

**dHr = -290 k=KJ/mol**

-----
Para corroborar

CH2O + a NH3 + b O2 → Yx/s CH1.8O0.5N0.2 + Yp/s CH1.5O0.5 + Yco2/s CO2 + w H2O

ya que CO2, H2O y O2 son referencias y= 0
y ← Gamma
dejo la ecuacion de arriba expresada en grado de reduccion
**ys + a ynh3 → yx * Yx/s + yp * Yp/s + dHr**

- ys = 4
- ynh3 = 3
- yx = 4.8
- yp = 4.5
- a = 0.038
- Yx/s = 0.19
- Yp/s = 0.15

por la correlacion de Roels dHc = -115 * yn2
por lo que aplico a la ecuacion

**-115 kj/cmol(ys + a ynh3) → -115 kj/cmol (yx * Yx/s + yp * Yp/s) + dHr**
dHr = - 290.61 kj/ cmol

# j) Definí matemáticamente y explicá el significado de la función disipación. Calculá la energía libre total disipada al ambiente durante el cultivo

 **Dx = ∆Gr/ (yx/s)**
 La disipacion nos muestra la cantidad de energia libre de gibbs disipada por unidad de biomasa producida (kj/cmol), en otras palabras, nos dice la cantidad de energia que se necesita para producir un Cmol de biomasa

dGs + a * dGnh3 → Yx/s * dGx + Yp/s dGp + dGr

reemplazo por la correlacion de Roels dGc = -(94,4 yN2 + 86,6) (K.J./C-mol) en cada energia libre de gibs y opero

- ys = 4
- ynh3 = 3
- yx = 4.8
- yp = 4.5
- a = 0.038
- Yx/s = 0.19
- Yp/s = 0.15

dGs + a * dGnh3 = Yx/s * dGx + Yp/s dGp + dGr

dGr = -298.75 (KJ/cmol)


Dx = -298.75 / 0.19 =  -1572.4
