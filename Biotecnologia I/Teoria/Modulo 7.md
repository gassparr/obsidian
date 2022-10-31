# Sistema de cultivo continuo
F = Caudal (L * h-1)
X = Concentracion de biomasa ( g * L-1)
S = Concentracion de sustrato ( g * L-1)
P = Concentracion de producto ( g * L-1)
p = Densidad ( g * L-1)

Subindices 1 y 2 son de entrada y salida

**Hipotesis de mezclado perfecto se toma valida**, por lo que el valor de las variables X; S; P y p sera igual en todo el sistema.
 El balance de acumulacion del sistema queda:

Velocidad de acumulacion = Velocidad de entrada - velocidad de salida + velocidad de formacion - velocidad de consumo

Para un componente C

**Ecuacion 1**
dCV / dt = (F1 * C1) - (F2 * C2) + (V * rf) - (V * rc)

como el volumen de cultivo varia en el tempo, los valores de F1 y F2 nos da

**Ecuacion 2**
dV / dt = F1 - F2

En el cultivo continuo, los flujos F1 = F2 ≠ 0, por lo que reemplazando nos da
dV / dt = 0

En el modelo de Monod, hay dependencia de la velocidad especifica de crecimiento con la concentracion de sustrato limitante

**Ecuacion 3**
u = umax * (S / Ks + S)

Graficando esta ecuacion 
![](https://i.imgur.com/WIsOxKB.png)

Se observan 2 zonas:
1. Sustrato limitante se encuentra en exceso ( S » Ks), u es maximo y cte, por lo que u = umax en este momento el sustrato esta en *Concentracion saturante* y no es limitante del crecimiento. El cultivo se encuentra en la zona de *cultivo irrestricto* (cultivos saturantes de sustrato)
2.  Concentracion del sustrato limitante en el medio de cultivo (S), esta en el orden de Ks, u depende de la concentracion externa de ese sustrato, por lo tanto *u ≠ um*  y el cultivo pasa a ser un *cultivo restricto*

## Operacion del biorreactor

**Ecuacion 3**
D = F / V

D = Velocidad de dilucion 
F = Caudal de alimentacion  (L * h-1)
V = Volumen de cultivo (L) 

Otro parametro de interes es el timepo de retencion (tr), el cual es la inversa de la velocidad de dilucion (D)

**Ecuacion 4**
1 / D = tr

Otra variable operativo importante es la composicion del medio de alimentacion, que es formulada de acuerdo a X y P que se espera lograr dentro del reactor.
El medio de alimentacion esta contenido en un recipiente denominado reservorio, la concentracion de sustrato limitante en el reservorio (Sr) sera quien determine los parametros experimental de acuerdo a la estequiometria para un dado D.
Por ejemplo: Al disminuir Sr, disminuira X

Los cultivos continuos se van a tratar con exceso de oxigeno de tal forma que el unico limitante sea el sustrato, las variables que estan bajo control son *Sustrato limitante (Sr)* y *Caudal de Alimentacion (F)* 

## Balance de materia
Para la biomasa no hay entrada ni consumo de microorganismos, *solo se forma V * rx y sale F * X* Reemplazando en la ecuacion 1:

**Ecuacion 5**
V * dX/dt = V * rx - F * X

Esta ecuacion nos describe la diferencia entre lo que se forma y lo que sale del reactor.
*El sustrato* ingresa en la alimentacion ( F * Sr ), se consume ( V * rs ) y sale del reactor en el efluente ( F * S )

**Ecuacion 6**
V * dS/dt = V * Sr - F * S - rs * V

Para producto:

**Ecuacion 7**
V * dP/dt = -F * P + rp * V

Dividiendo las ecuaciones 5, 6 y 7 por V y reemplazando por D segun la ecuacion 3 obetenemos:

**Ecuacion 8**
Dx/dt = rx * -D * X

**Ecuacion 9**
DS/dt = D * Sr -D * S - rs

**Ecuacion 10**
DP/dt = rp * -D * P

El cultivo continuo se encuentra en *estado estacionario (EE)*, donde no varia X, S y P, lo cual equivale a igualar ecuacion 8, 9 y 10 a 0.
Las concentraciones en EE se escriben como X~ , S~ o P~. Despejando rx. 

Para la biomasa:
**Ecuacion 11**
rx = D * X~

Para el sustrato
**Ecuacion 12**
rs = D * (Sr - S~)

Para el producto
**Ecuacion 13**
rp = D * P~

La ecuacion 12 es calida para cualquier nutriente del medio de cultivo, sea limitante o no.
Por la relacion entre las velocidad volumetricas y especificas, se define:

**Ecuacion 14**
u = D

Esta ecuacion nos indica que el operador puede impornerle externamente el valor de u a los microorganismos para crecer, ya que D es una variable controlable.
Aun asi el microorganismo no es capaz de crecer a u > umax por lo que un cultivo continuo alcanzara el EE siempre que D = u < umax. El microorganismo no puede crecer mas rapido que la velocidad de dilucion, por lo que cuando D es muy alto se produce lavado de cultivo.
El valor de D en que ocurre el lavado se denomina *Velocidad de dilucion critica (Dc)*, no hay consumo de sustrato limitante, por lo que su concentracion es igual a Sr y la concentracion de biomasa se hace 0

**Ecuacion 15**

D = u = umax * S~ / Ks + S~ 

Y despejando S~

**Ecuacion 16**

S~ = D * Ks / um - D

En esta ecuacion la variable D determina S~, por lo que a diferencia de cultivo batch, los microorganismos adaptan u dependiendo de S~ (la cual se controla a travez de D

**Ecuacion 17**

Dc = um * Sr / Ks + Sr

Si en un cultivo se trabaja a D > umax. las celulas seran arrastradas y se lavara el cultivo

## Estado estacionario
Cuanto demora el sistema en alcanzar este estado ? en terminos general *4 * tr* (4 tiempos de retension)

## Determinacion de otros parametros estequiometricos y cineticos
Rendimiento en estado estacionario
**Ecuacion 18**

Yx/s = X~ / Sr - S~

velocidad especifica de consumo de sustrato
**Ecuacion 19**

qs = rs / X = D * (Sr - S~) / X~

## Aplicacion del cultivo continuo

Permite controlar el proceso a un valor de velocidad especifica de crecimiento prefija de manera simple. Esto es importante ya que los microorganismos se comportan de manera distinta a distinas u.
Es posible estudiar el efecto sobre el proceso de cambios de pH, temperatura, concentracion de nutrientes, etc. Manteniedo constante u, por lo que permite separar y analizar los efectos de distintas condiciones.
Tambien es posible utilizarlos para determinaciones de parametros fisiologicos como um, Ks, parametros de Pirt para consumo de FCE, los de Luedeking y piret para formacion de productos asociados a la obtencion de energios, estudios de inhibicion, etc.