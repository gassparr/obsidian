# Destinos de la FCE en el manteniemiento celular

- Componentes y otros productos FC
- Energia requerida para el microorganismo FE

## Para que necesitan la FC

- Producir biomasa → Yx/s es la fraccion de FCE utilizada como FC para biomasa
- Producir producto no asociado al metabolismo energetico → Yp/s es la fraccion de FCE utilizada como FC para producto
- Producir producto asociado al metabolismo energetico → Yp/s representa la fraccion de FCE utilizada como FC y como FE ya que el producto final es ATP

## Para que necesitan la FE

- Producir biomasa → Fraccion de FCE utilizada como FE para biomasa
- Producir producto no asociado al metabolismo energetico → Fraccion de FCE utilizada como FE para producir producto
- Funciones de mantenimiento celular → Yco2/s; Yp/s sera fraccion de FCE utilizada como FE para produccion de energia

Como hacemos para conocer las fracciones destinadas al productos no asociadas al crecimiento y al mantenimiento. Utilizando el modelo de *Pirt*, donde verifica el consumo de FCE cuando el crecimiento celular es 0 ( *rx = 0* ).
**Metabolismo aerobico**
![](https://i.imgur.com/u0kd80P.png)

**Metabolismo anaerobico**
![](https://i.imgur.com/4bOAmU8.png)

## Consumo de sustratos en metabolismo aerobico sin formacion de producto

1. rn = rx / yx/n

## Consumo de FCE

*Pirt* nos dice que no toda la energia de FCE se utiliza para la biomasa, una parte se usa en el **Mantenimiento celular**. La ecuacion de velocidad de consumo tomando en cuenta el mantenimiento celular es:

2. rs = (rx / y”x/s) + ms * X

- X = concentracion de biomasa
- ms = coeficiente de mantenimiento celular (Cmol FCE / Cmol biomasa * h) o ( g substrato / g biomasa * h ). ms aumenta cuando se aleja de la temperatura optima, con el aumento de la presion osmotica y con la fuerza ionica. Se desea trabajar con ms bajo
- y”x/s = rendimiento celular verdadero. Es el rendimiento que se obtiene si no hubiese consumo de FCE para mantenimiento

3. rs = ms * X = cte = dS / dt

![](https://i.imgur.com/WFsBDHP.png)
perfiles de FCE durante el crecimiento exponencial. La ecuacion que representa el consumo de FCE sera:

4. S = S0 - ms * X * t

- S0 = concentracion de FCE al timepo en que microorganismo deja de crecer
- X = concentracion de biomasa final obtenida, condicionada por el sustrato limitante del crecimiento
- t = tiempo a partir del que el microorganismo dejo de crecer

Si se divide ambos miembros de la ecuacion 2 por rx y sabiendo que **Yx/s = dX / dS**

5. 1 / Yx/s = ( 1 / Y”x/s ) + ms / u

los rendimientos experimentales seran siempre menores a los verdades y bajan a medida que u baja, porque la proporcion de FCE destinada para mantenimiento es mayor

**Yx/s < Y”x/s**

A bajos valores de u, el segundo termino de la ecuacion se hace mas grande. *Yx/s se aleja de Y”x/s* ya que se destina una fraccion menor de FCE a la formacion de biomasa y una mayor al mantenimiento. Despejando Yx/s:

6. ![](https://i.imgur.com/hzHldS4.png)

*mientras u sea constante Yx/s sera constante*, cuanto mayor es u, Yx/s se acerca a Y”x/s, pero nunca Yx/s = Y”x/s.
- En cultivo batch u=max y cte en el crecimiento exponencial, entonces utilizando **1 / Yx/s = ( 1 / Y”x/s ) + ms / u** se puede ver que el rendimiento no cambia
- En cualquier otro cultivo (cultivo continuo, BA) u no es constante, por lo que segun la ecuacion el rendimiento varia

 *En resumen*:
▪ Si u aumenta, Yx/s se acerca más al valor de Y´x/s
▪ Si u disminuye, Yx/s se aleja más del valor de Y´x/s
▪ Si deseo obtener un Yx/s elevado, trabajaré en lo posible a valores de u elevados

Para evaluar la velocidad especifica de consumo de FCE

7. qs = ( u / Y’ x/s) + ms

- Primer termino = Consumo de FCE para crecimiento
- Segundo termino = Consumo de FCE para mantenimiento
- ms = coeficiente de mantenimiento celular
Para evaluar la fraccion de FCE destinada a mantenimiento se divide todo por qs

8. 1 = ( u / qs * Y’ x/s) + ms / qs

en la ecuacion 8 si los rendimientos se expresan como el cociente de las velocidades especificas

9. 1 = (Yx/s / Y”x/s) + ms /qs

## Consumo de oxigeno y otros sustratos ligados a la produccion de energia

como el consumo de O2 es proporcional a la fraccion de FCE que se utiliza para producir energia, se puede plantear una ecuacion para el consumo de oxigeno

10. qo2 = (u / Y’ x/o) + mo

- Primer termino = Consumo de FCE para crecimiento
- Segundo termino = Consumo de FCE para mantenimiento
- ms = coeficiente de mantenimiento celular

11. 
    - rs = / Y’ x/s + ms * X
    - ro2 = rx / Y’ x/o + mo * X
    - ratp = rx / Y’ x/atp + matp * X
    - rnadh = rx / Y’ x/nadh + mnadh * X

Estas ecuaciones no son independientes, es posible obtener ms en funcion de mo

12. mo = ms * ys / 4

## Consumo de FCE en metabolismo aerobico con prodducion de producto no asociado al metabolismo energetico

13. 
    - rs = rx / Y’ x/s + rp / Y’ p/s + ms * X
      o
    - 1 = Yx/s / Y’x/s + Yp/s / Y’p/s + ms / qs

- Y’ p/s = rendimiento verdadero de la formacion de producto

en anaerobiosis, se produce un producto organico ligado al metabolismo energetico, que retiene energia de la FCE dandonos

14. rs = (rx / Y’ x/s) + ms * S

## Efecto del mantenimiento celular en cultivo continuo
aplicando el modelo de pirt (ecuacion 5) a un cultivo continuo en EE y recordando que u = D

15. 1 / Yx/s = ( 1 / Y’ x/s) + ms / D

A menored valores de D, el segundo termino va adquieriendo mayor importancia relativa

![](https://i.imgur.com/UHwWeDN.png)

a valores bajos de D la proporcion de FCE que va al mantenimiento es mayor que en cultivos realizados a mayores D (aumenta rendimiento a mayores D)

### Cuales son las consecuencias del descenso del rendimiento celular al disminuir D ?

En cultivos continuos limitados en FCE operados a F y Sr constante, se disminuye la biomasa formada en EE a bajos valores de D.
Si esta limitado por 