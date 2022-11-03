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

*mientras u sea constante Yx/s sera constante*, cuanto mayor es u, Yx/s se acerca a Y”x/s, pero nunca Yx/s = Y”x/s