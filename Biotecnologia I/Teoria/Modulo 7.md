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