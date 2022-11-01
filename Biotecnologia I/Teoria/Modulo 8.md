# Sistema de cultivo Batch Alimentado

![](https://i.imgur.com/tEkuscz.png)

F = Caudal (L * h-1)
X = Concentracion de biomasa ( g * L-1)
S = Concentracion de sustrato ( g * L-1)
P = Concentracion de producto ( g * L-1)
p = Densidad ( g * L-1)

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


