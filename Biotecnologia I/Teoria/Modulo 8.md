# Sistema de cultivo Batch Alimentado

![](https://i.imgur.com/tEkuscz.png)

- F = Caudal (L * h-1)
- X = Concentracion de biomasa ( g * L-1)
- S = Concentracion de sustrato ( g * L-1)
- P = Concentracion de producto ( g * L-1)
- p = Densidad ( g * L-1)

subindices 1 y 2 de entrada y salida respectivamente

1. dCV / dt = F1 * C1 - F2 * C2 + V * rf - V * rc

El volumen de cultivo varia en el tiempo

2. dV / dt = F1 - F2

El cultivo es **BA** cuando F1 ≠ 0 y F2 ≠ 0, lo cual o hace un sistema abierto para la fase liquida. Reemplazando en ecuacion 2

3. dV / dt = F1

El volumen va a variar dependiendo del flujo de alimentacion **F1 = F** al cual se lo llama *alimentacion*.
El **BA** se lo puede clasificar de acuerdo al modo de operacion.
- **BA controlado por alimentacion** → El cultivo sigue el curso que le dicta la alimentacion: **F(t) o Sr - Nr (t)**
- **BA con alimentacion controlada** → estado de cultivo captado por sensores y controla la alimentacion

## Batch alimentado controlado por alimentacion

![](https://i.imgur.com/bG1xdtu.png)

- F: caudal de alimentación que puede ser constante o variable (l/h)
- SR-NR: concentración de FCE u otros sustratos distintos a la FCE en la alimentación (g/l)
- Vf: volumen al final de la alimentación (l)
- Vo: volumen al inicio de la alimentación (l)
- Xo: concentración de biomasa al inicio de la alimentación (g/l)
- So-No: concentración de FCE u otros sustratos al inicio de la alimentación (g/l)


Al igual que cultivo continuo, se controla u. Considerando la ecuacion de monod, *Ks ~ S* (Concentracion de S muy bajas) u va a depender de la concentracion externa de sustrato dando que u ≠ umax y el cultivo sera *cineticamente restricto* dando un perfil:
![](https://i.imgur.com/z5gfpdu.png)

## Balance de materia

ya que en V cambia con el tiempo, no estudiamos X, sino que el producto XV y tambien SV, NV, PV.
Para cualquier sustrato, ingresa al reactor con velocidad **F * Sr** y se consume a velocidad **V * rs**, rs es velocidad volumetrica de consumo de sustrato (se puede expresar como **u * X / yx/s**). Reemplazando en ecuacion 1.

4. dSV / dt = F * Sr - rs * V = F * Sr - (u * X / yx/s) * V

para cualquier otro sustrato que no sea FCE

5. dNV / dt = F * Nr - rn * V = F * Nr - (u * X / yx/s) * V

A diferencia de *Batch* o *continuo* el cual el volumen es cte. En el sistema *BA* no podemos sacar el volumen del diferencial.
Para la biomasa no hay entrada ni consumo de X, se forma **V * rx** y no sale nada del reactor, rx se puede expresar como **u * X** y reemplazando en ecuacion 1

6. dXV / dt = rx * V = u * X * V

la acumulacion de masa sera proporcional a la velocidad de produccion y del volumen V. Para otros productos:

7. dPV / dt = rp * V
