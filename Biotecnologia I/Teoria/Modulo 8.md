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

## Batch alimentado con flujo constante

F es constante, entonces si se integra la ecuacion 2, entre t0 y tf donde t0 = 0 y tf = t

8. V = V0 + F * t

## Batch alimentado con F constante limitado en N

Se controla el crecimiento de microorganismos, controlando el suministro del sustrato N. Utilizando la ecuacion 6:

9. dNV / dt = F * Nr - (u * X / yx/n) * V = 0
   despejando
   F * Nr = (u * X / yx/n) * V

la ecuacion indica que la produccion de X, se acomodo a la velocidad de suministro de sustrato y se puede controlar, modificando F y/o Nr.
Por otro lado, se puede ver la variacion de X en relacion al tiempo. *En cultvo batch, al ser V = cte, X * V es proporcional a X*. En un BA V ≠ cte por lo cual **X * V**es variable. Combinando la ecuacion 6 con la ecuacion 9:

10. dXV / dt = F * Nr * yx/n

Esta ecuacion indica que la velocidad de acumulacion de masa depende de la velocidad de alimentacion de sustrato. integrando entre t0 = 0 y tf = t:

11. XV = X0 * V0 + F * Nr * yx/n * t

Describre la variacion de XV en funcion de tiempo. XV aumenta linealmente cuando F; Nr e yx/n sean constantes
![](https://i.imgur.com/L75bOUw.png)

La curva de CL vs t se puede ver que el batch previo al BA no se limito en O2, por lo que el BA con F cte no va a ser limitato tampoco.
Despejando yx/n de la ecuacion 11 y considerando que **F * tr** es (**Vf - V0**):

12. yx/n = (Xf * Vf - X0 * V0*) / Nr * (Vf - V0)

esta ecuacion es valida si N es limitante al crecimiento. Si en la ecuacion 9 despejamos u y reemplazamos XV de acuerdo a 11:

13. u = (F * Nr * yx/n) / (V0 * X0 + F * Nr * yx/n * t)

esta ecuacion nos muestra que u es funcion de (**A / A + t**) (A siendo valores constantes), mostrandonos que a medida que el cultivo crece, la velocidad de crecimiento ira disminuyendo

![](https://i.imgur.com/VgEJ4c0.png)

## Batch alimentado con F constante limitado en FCE

14. F * S = u * X * V / yx/s

si se mantiene yx/s constante, podemos describir XV con el tiempo de cultivo de la siguiente manera:

15. XV = X0 * V0 + F * Sr * yx/s * t

despejando yx/s y considerando que *F * Tr = Vf - V0*

16. yx/s = (Xf * Vf - X0 * V0 ) / Sr * (Vf - V0)

Ecuacion solo valida si es el sustrato limitante.
Despejamos u y reemplazmamos XV de acuerdo a ecuacion 15

17. u = (F * Sr * yx/s) / (V0* X0 + F * S * ryx/s * t)

# Diseño de un cultivo BA con F constante limitado en N

Disenar el *BA* incluye:
1. Disenar el batch previo, para determinar cuanta biomasa se obtiene, en que tiempo y concentracion de C y n
2. Disenar batch alimentado de F = cte, se hace encontrado el valor de F y las concentracion de C y N necesarias para satisfacer las ecuacionde diseno.
   Para el caso del diseno de un BA F=cte limitado en N:

   > Balance de materia para N:
   > - ( F * Nr ) = ( u * X * V) / yx/s
   > - F = (u0 * X0 * V0) / (yx/n * Nr)
   >
   > A partir del rendimiento:
   > - yx/n = (Xf * Vf - X0 * V0) / Nr (Vf - V0)
   > - Nr = (Xf * Vf - X0 * V0) / yx/n (Vf - V0)
