Coeficiente respiratorio (rco2 / ro2) debe mantenerse debajo de 1.1, ya que valores superiores indican formacion de etanol, disminuyendo el rendimiento celular

**Consumo de O2**
Para calcular:

**Ecuacion 1**
![](https://i.imgur.com/eBSwYgR.png)


ro2 → Velocidad de consumo del o2 (mol / L . h)
F → Caudal gaseoso (L/h o L/min)
Vl → Volumen de cultivo (L)
Cgo2 → Concentracion de O2 en el gas (mol/L)
subindice s → salida
subindice e → entrada

Por la ley de Dalton
Cgi = (Pt . Xi) / (R . T)

**Ecuacion 2**
Reemplazamos en (1) Cgo con dalton

![](https://i.imgur.com/tME0vOs.png)

Esta expresión puede ser utilizada cuando se miden experimentalmente los caudales de entrada y salida de
gases o cuando se mide sólo uno de ellos pero el cociente respiratorio es 1 o cercano a 1 y por tanto
los caudales son iguales.
Si esto no ocurre, hay expresar uno de los caudales en función del otro y esto se realiza en función del balance de nitrógeno. Debido a que no es consumido ni generado por el metabolismo, la cantidad total de N2 por unidad de tiempo que ingresa al reactor es igual a la que sale del mismo (dentro del balance se incluye al Ar pero , por sencillez, sólo se indica al N2).

![](https://i.imgur.com/5v2eyb7.png)

Expresando las concentraciones en base a Dalton

![](https://i.imgur.com/QFXaqDX.png)

Queda el caudal de ingreso y egreso en funcion del otro. Si se determina experimentalmente el flujo de ingreso F1 (conocemos su valor)

**Ecuacion 3**

![](https://i.imgur.com/bY3dYNv.png)

**Ecuacion 4**

Introducimos (3) en (2)
![](https://i.imgur.com/ZsP3cx9.png)

multiplicando y dividiendo por (Xn2)1

![](https://i.imgur.com/vRJuHzL.png)

y como la fraccion molar esta definida como:
Xn2 = 1 - (Xo2 + Xco2 + Xh2o)
reemplazamos

![](https://i.imgur.com/FioNmbH.png)

Como el aire que ingresa esta deshumidificado, la fraccion de H2O se desprecia, quedando:

**Ecuacion 5**
![](https://i.imgur.com/sr4t0Lt.png)

Expresa velocidad de consumo de O2 en funcion de variables medibles. El factor 60 es para convertir de minutos a horas

Para CO2
![](https://i.imgur.com/6rnL1S9.png)

El gas del biorreactor sale saturado de H2O (vapor).
Si aproximamos que Pt = Patm resulta que:
(Xh2o)2 = 0.03
Lo cual en el caso de que el coeficiente respiratorio 
(Cr = rco2 / ro2) es cercano a 1, permite simplificar.\

**Ecuacion 6**
![](https://i.imgur.com/m0bEKOm.png)

Para averiguar si CR es cercano a 1, sumar (Xo2)2 con (Xco2)2 y si -+ 0.21. CR es cercano a 1


# Transferencia de materia Gas-Liquido

**Ecuacion 1**
Coeficiente de transferencia de materia (este caso es con O2)

K = No2 / dC

No2 → Flujo de O2 mol/ (area . t)
dC → Diferencia de concentracion entre dos puntos  de la misma fase

Para gases de baja solubilidad Po2 y Ci estan en equilibrio y relacionados a la ley de henry

**Ecuacion 2**
Po2 = H . Ci

Independiente de cual sea el gradiente se puede definir Kg (transferencia de la fase gaseosa) y Kl (transferencia de la fase liquida)

**Ecuacion 3**
Kg = No2 / (Po2 - Po2i)

**Ecuacion 4**
Kl = No2 / (Ci - Cl)

Como en estado casi estacionario los moles de O2 que atraviesan la interfase son iguales despejamos No2 e igualamos (3)=(4)

**Ecuacion 5**

No2 = Kg . (Po2 - Po2i) = Kl . (Ci - Cl)

**Ecuacion 6**

Como (5) no nos da a conocer Po2 o Ci, definimos un nuevo coeficiente

Kl = No2 / (C* - Cl)

C* → Concentracion O2 disuelto en equilibrio con Po2

**Ecuacion 7**

Reemplaza C* por Ci en (2)

Po2 = H . C*

Reordena (4):
![](https://i.imgur.com/gJyVjEd.png)

**Ecuacion 8**
Reemplaza C* y Ci por (7) y (2)

![](https://i.imgur.com/L9VqDgw.png)

**Ecuacion 9**
Kl =~ kl

Para compuestos de baja solubilidad en agua, El valor de H es grande, dando que la resistencia esta dada por la transferencia del liquido