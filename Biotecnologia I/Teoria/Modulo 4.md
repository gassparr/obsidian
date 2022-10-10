![](https://i.imgur.com/EYLcNm5.png)

- F es el caudal (L h -1 )
- X la concentración de biomasa (g L -1 )
- S la concentración del sustrato considerado (g L -1 )
- P la de producto (g L -1 ) y  la densidad (g L -1 )

Los subíndices 1 y 2 refieren a entrada y salida respectivamente.

**Acumulación de materia** = entrada de materia – salida de materia + materia que se forma - materia que se consume
**Velocidad de acumulación** = Velocidad de entrada-velocidad de salida + velocidad de formación –velocidad de consumo

# Ecuación general de balance de masa

**Ecuacion 1**

𝑑𝐶𝑉 / 𝑑𝑡 = (𝐹1 . 𝐶1) − (𝐹2 . 𝐶2) + 𝑉𝑟𝑓 − 𝑉𝑟c

- F1 es el flujo de entrada (también llamado flujo de alimentación)
- F2 el flujo de salida del reactor
- V es el volumen al tiempo t
- rf la velocidad volumétrica de formación de C
- rc la velocidad volumétrica de consumo del componente C.

**Ecuacion 2**
𝑑𝑉 𝑑𝑡 = 𝐹1 − 𝐹2

- F1 = F2 = 0 → Sistema batch
- F1 ≠ 0 y F2 ≠ 0 → Sistema continuo
- F1 ≠ 0 y F2 = 0 → Sistema Batch alimentado

## Cultivo batch

sistema cerrado para la fase liquida
F1 = F2 = 0

**Ecuacion 3**
𝑑𝐶𝑉 / 𝑑𝑡 = 𝑉𝑟𝑓 − 𝑉𝑟c

Como F1 = F2 = 0, si volvemos a la **Ec 2**, V = cte

**Ecuacion 4** → Velocidad volumetrica de formacion de biomasa
dX / dt = rx

**Ecuacion 5** → Velocidad volumetrica de consumo de sustrato
dS / dt = rs

**Ecuacion 6** → Velocidad volumetrica de formacion de producto
dP / dt = rp

tambien se debe caracterizar a las velocidades relativas relacionadas con la concentracion de biomasa (X)

**Ecuacion 7**

u = rx / X

- u → velocidad especifica de crecimiento
- rx → velocidad volumetrica de formacion de biomasa
- X → Concentracion de biomasa

Lo mismo se hace para rs y rp

**Ecuacion 8**

qs = rs / X

qs → velocidad especifica de consumo de sustrato
rs → velocidad volumetrica de consumo de sustrato
X → concentracion de biomasa

# Curva de crecimiento

Se separan en cuatro fases:
1. Lag
2. Exponencial
3. Estacionaria
4. Decaimiento

**Ecuacion 9**

dx/dt = rx = u . X

u → Velocidad especifica de crecimiento
X → Concentracion de biomasa

**Ecuacion 10**

u = u(max) . (S/ (Ks + S))

Ks → Constante del microorganismo
umax → velocidad especifica maxima
S → Nutriente limitante

**Ecuacion 11**
Si suponemos valido el modelo de monod

dx/dt = u(max) . (S / (Ks + S)) . x

## Fase exponencial

**Ecuacion 12**
Al principio del cultivo batch (Durante fase exponencial) S » Ks, por lo que se desprecia Ks frente a S

dx/dt = u(m) . X

**Ecuacion 13**
Integrando Ecuacion 12

ln X = ln X0 + ( u(m)+t )

**Ecuacion 14**
en forma exponencial

x = x0 . e^( u(m) . t )

**Ecuacion 15**

Para calcular la fase de lag tl

ln X = ln X0 + um . ( t - tl)

**Ecuacion 16**
calcular rx (velocidad volumetrica foramcion de biomasa)

rx = um . x0 . e ^ ( um . t )

> ( rx = u . x ) reemplaza X por ( x = x0 . e^( u(m) . t ) )

Durante fase exponencial rx crece exponencialmente y velocidad especifica se mantiene cte y maxima u(max)

A medida que pasa el tiempo S disminuye hasta que no es mucho mayor que Ks, por lo que se tiene que volver a apreciar Ks

En fase estacionaria rx = 0 y u = 0