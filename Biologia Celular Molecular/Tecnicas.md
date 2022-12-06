# [[microscopia]]

- microscopia [[confocal]]
- microscopia de [[contraste de fases]]
- [[microscopia de fluorescencia]]
- [[microscopia electronica]]

# Preparacion de muestras

- Microdiseccion laser
  Permite la separacion de celulas unicas de manera selectiva, permitiendo estudiar:
  - cantidad de [[DNA]]
  - cantidad de [[RNA]]
  - cantidad de proteinas

# Clasificacion 

- [[citometria de flujo]]
- [[PCR]]
- [[dot blot]]
- [[western blot]]
- [[ELISA]]
- [[gradiente de sacarosa]]
- [[gradiente de CsCl]]
- [[microarrays]]
- [[inmunolocalizacion]]
- [[FRET]] → interacciones moleculares in vivo
- [[BIFC]] → interaccion de proteinas in vivo
- [[fotoblanqueo]] → dinamicas moleculares
- [[Y1H]]  → Interaccion entre proteinas
- [[inmunoprecipitacion]] → Observar interacciones proteinas - proteinas o proteinas - DNA
- 

# Ingenieria genetica
- [[transfer DNA]]
- [[silenciamiento por mRNA]]
- [[TRAP]]
- [[mRNA tagging]] 

**Método de marcado de las integrinas utilizado en paper 3 (no sé el nombre):**

Se marcan las integrinas y se dejan internalizar en la célula de manera que las que internalicen quedarán marcadas mientras que las que se encuentren en superficie quedarán sin marcar. Para que se internalicen debo permeabilizar, y si no realizo este paso entonces sólo estaré visualizando las integrinas en superficie.

Para diferenciar las que no se internalizaron de las que lo hicieron y volvieron a salir: primero marco con ácido las de afuera, espero un tiempo para que las que internalizaron vuelvan a salir y debo tener en cuenta que éstas tienen adherido un anticuerpo primario cuya fluorescencia se suele perder, por lo que les adicionaré un anticuerpo secundario (que tiene el fluoróforo que servirá para luego poder cuantificar al momento del revelado). Las que estaban afuera (y nunca entraron) no fluorescen debido al agregado de ácido previo a la salida de las que habían entrado al interior celular.

Control: 

Se adiciona únicamente el anticuerpo secundario
 y se mide la fluorescencia para ver si éste se pegaba a otra cosa distinta de la proteína con anticuerpo primario a la que queremos que se una (en el control no estará presente).
Hay anticuerpos que reconocen específicamente la conformación activa de una proteína.

**Antibiótico nocodazol**:

Antibiótico que ejerce su efecto en las células al interferir con la polimerización de los microtúbulos. Su efecto es reversible.

**Ensayo de raspado**: 

Se realiza para ver cuántas células (en condiciones de cultivo) vuelven a colonizar el espacio de la herida. Se ensaya a tiempos cortos para confirmar que se trate de una consecuencia de la movilidad celular y no de proliferación. Además, al cultivo no se le agrega suero para evitar que las células se encuentren en condiciones óptimas para dividirse (más allá de que no tengan tiempo de dividirse debido a que el ensayo se realiza a tiempos cortos como se dijo anteriormente).

**Construcción de GFP + proteína**:

Se utiliza en uno de los ensayos para que, al introducirse en las células mutantes, se pueda comparar si llegan a tener el mismo nivel de propagación/expansión que las células normales (wt). En este paper, la definición de “propagación” no se evalúa en términos de la división celular sino que se hace referencia a la capacidad que tienen las células de aplastarse sobre el sustrato y expandirse.

**Combinación de técnicas Frap-Flip (paper 4):**

La pérdida de fluorescencia en el blanqueamiento fotográfico es una técnica de microscopía de fluorescencia utilizada para examinar el movimiento de las moléculas dentro de las células y las membranas. Una membrana celular se marca típicamente con un tinte fluorescente para permitir la observación.

Cuando un fluoróforo se blanquea, no vuelve a recuperar la fluorescencia (esa proteína no vuelve a fluorescer). El blanqueamiento se da por incidencia de un láser direccionado a un sitio específico, el cual se quema.

Si se observa “recuperación” de la fluorescencia en dicho sitio, esto se debe a otras proteínas que migraron desde una región en la cual había fluorescencia (donde no incidía el láser). Esto no significa que las proteínas sean atraídas hacia el sitio blanqueado, simplemente que llegan porque su difusión es dinámica.

Al combinar las técnicas:

→ Por un lado, estoy quemando constantemente en un sitio, de manera que allí jamás se observará fluorescencia (el blanqueamiento se regenera).

→ Por otra parte, se procede a observar la presencia o ausencia de fluorescencia en otros sitios (donde no incide el láser). En caso de que se encuentren proteínas que no fluorescen → se debe a que antes tienen que haber pasado por el sitio de incidencia del láser, donde se blanquearon permanentemente.

**Transwell: Ensayo de invasión.**

Se colocan células (debajo) y colágeno (arriba), separados por una membrana porosa, de forma que las células puedan migrar, atravesando los poros. Pero, como en este caso las células necesitan degradar colágeno para moverse, si las mismas atraviesan los poros significará que son invasivas y degradan matriz celular (colágeno). Es decir, migraron pero no sin antes invadir (dado que de otra forma no podrían migrar). Lo que se obtendrá será el porcentaje de invasión.

Niveles de expresión de proteínas: Se miden a través de un Western, utilizando células en distintas condiciones. En este caso se busca observar silenciamiento, y se sabe que, para que se produzca el mismo, será necesario atravesar un estadío de RNA doble cadena (horquilla autocomplementaria).

El porcentaje de silenciamiento se obtiene indirectamente a través del porcentaje de expresión, que refiere a cuánto baja la señal con respecto a un control (100% de expresión).

**Ensayo de pull-down GST:**
La afinidad entre la enzima glutatión-S-transferasa y su sustrato, el glutatión (GSH), se puede utilizar para semipurificar cualquier proteína X que se fusiona con GST, y para estudiar interaccion proteina-proteina.

![](https://i.imgur.com/H8Mmqnx.png)
![](https://i.imgur.com/vnsxAtK.png)


Protocolo → Se fusiona una proteína que queramos estudiar a la enzima GST mediante una construcción en vectores de expresión. Una vez tengamos el vector de expresión lo transformamos en la bacteria así se expresa y obtenemos masa.

Luego, lisamos la bacteria y  se incuba con glutatión-sefarosa (GSH-) durante un tiempo, así el glutatión (sustrato) interaccionan con GST (enzima), centrifugamos y  precipitara el complejo proteína-GST:GSH. (HASTA ACÁ SE SERIA SEMIPURIFICACION)

Una vez que obtenemos el complejo proteína-GST:GSH lo mezclamos con la muestra de interés, centrifugamos y tomamos el pellet.

En el pellet se encontrará el complejo de proteína-GST:GSH y además cualquier otra proteína que interacciona con la que fusionamos a GST. }

**Inmunoprecipitación:**

![](https://i.imgur.com/0LY9SHm.png)

La inmunoprecipitación es el aislamiento de una proteína específica utilizando un anticuerpo acoplado a un soporte sólido (partículas magnéticas, agarosa o resina), tal que logre precipitar.

Pasos:    
- Lisis celular
- incubación con el anticuerpo.
- Precipitación. (magneto o centrifugación)

Luego se realiza un WB, para corroborar que haya precipitado mi proteína de interes.

Es importante un control (INPUT), el cual consiste en realizar un Western-blot al lisado celular, para revelar la proteína a inmunoprecipitar. Si el control da +, pero el resultado de la inmunoprecipitación no, no puede atribuirse este resultado - a que no estaba presente la proteína en la célula.

**Co-Inmunoprecipitación:**

Es una poderosa herramienta utilizada para analizar las interacciones proteína-proteína.

 El objetivo principal de Co-IP es la identificación de socios de interacción con la proteína de interés, como ligandos, receptores, cofactores.

El protocolo Co-IP básico es el mismo que se describe para IP pero hay que tener algunos cuidados de más, ej: el lavado se deben considerar las interacciones proteína-proteína. 
![](https://i.imgur.com/P8d75Oo.png)


**Inmunofluorescencia:**

![](https://i.imgur.com/vyEobNn.png)

Es una técnica de inmunomarcación que hace uso de anticuerpos unidos químicamente a una sustancia fluorescente para demostrar la presencia de una determinada molécula.

Existen dos tipos de técnicas de inmunofluorescencia:

Primaria o directa : hace uso de un único anticuerpo que se encuentra químicamente unido a un fluorocromo. El anticuerpo reconoce la molécula diana y se une a ella directamente.

Secundaria o indirecta: hace uso de dos anticuerpos; el anticuerpo primario es el que reconoce y se une a la molécula diana, mientras que el secundario que es el que se encuentra marcado con el fluoróforo, reconoce al primario y se une a él. Esta técnica es posible, debido a que los anticuerpos constan de dos partes, una región variable (que es la que reconoce al antígeno) y una región constante (que es la reconocida por el anticuerpo secundario)

Pasos: Fijación- Permeabilización - Bloqueo- Inmunodetección (1° o 2°)

**Western Blot:**

es una técnica de laboratorio utilizada para detectar una proteína específica en una muestra. El método implica el uso de electroforesis en gel para separar las proteínas de la muestra. Las proteínas separadas se transfieren del gel a la superficie de una membrana. La membrana se expone a un anticuerpo específico de la proteína diana. La unión del anticuerpo se detecta utilizando una etiqueta radiactiva o química.

Pasos:

- Electroforesis en gel de poliacrilamida
- Transferir
- Tinción de proteínas totales. (permite visualizar la proteína total que se ha transferido con éxito a la membrana)
- Bloqueo (dado que la membrana se ha elegido por su capacidad para unir proteínas y como tanto los anticuerpos como la diana son proteínas, se deben tomar medidas para evitar las interacciones entre la membrana y el anticuerpo utilizado para la detección de la proteína diana. El bloqueo de la unión no específica se logra colocando la membrana en una solución diluida de proteína, generalmente albúmina de suero bovino (BSA))
- Incubación con anticuerpo
- Lavado de sonda no unida.
- Detección y visualización

Se suele repetir el proceso para una proteína estructural, como la actina o la tubulina, que no debería cambiar entre muestras. La cantidad de proteína diana se normaliza a la proteína estructural para controlar entre grupos.

**Microinyección:**

- La microinyección es un proceso que consiste en utilizar microagujas para insertar sustancias a un nivel microscópico o en el límite de lo macroscópico dentro de una célula viva.
- Es un simple proceso mecánico en el cual una aguja extremadamente fina penetra la membrana celular y a veces la envoltura nuclear para lanzar su contenido.

**FACS:**

La clasificación de células activadas por fluorescencia (FACS) es una técnica para purificar poblaciones de células específicas en función de los fenotipos detectados por citometría de flujo. Este método permite a los investigadores comprender mejor las características de una sola población celular sin la influencia de otras células. En comparación con otros métodos de enriquecimiento celular, como la clasificación celular activada magnéticamente (MCS), FACS es más flexible y preciso para la separación celular debido a la capacidad de detección de fenotipos mediante citometría de flujo. Además, FACS suele ser capaz de separar múltiples poblaciones de células simultáneamente, lo que mejora la eficiencia y la diversidad de los experimentos. Aunque FACS tiene algunas limitaciones, se ha utilizado ampliamente para purificar células para estudios funcionales tanto en entornos in vitro como in vivo.

**FUCCI:**

Sistema indicador de ciclo celular basado en la ubiquitinización fluorescente es un grupo codificado genéticamente de dos sensores fluorescentes para monitorización del ciclo celular en tiempo real. Con conocimiento de qué proteínas se acumulan en cada etapa del ciclo se marcan y cuando sale de ese ciclo de ubiquitin a las proteínas y pierden la fluorescencia (Ejemplo en G1 es Cdt1 que se tiñe roja) y de empieza a ver la fluorescencia de la proteína del ciclo siguiente (Pasa a S donde se acumula Geminina que se tiñe verde)

Fucci marca el núcleo con mCherry (rojo) o mVenus (azul) siguiendo un patrón que depende del ciclo celular.  Fucci (CA) proporciona una expresión abundante de mCherry durante la fase G1 con una reducción acusada en la fluorescencia roja al final de la fase G1. Fucci (CA) puede usarse para detectar con fiabilidad una fase G1 corta y distinguir las fases S y G2, lo que anteriormente era difícil de conseguir.

**Medida de la actividad relativa de la Luciferasa:**

Se genera en un plásmido, como vimos en bioqui 3, un inserto de la sección del promotor del gen de interés y se analiza la actividad de un gen reportero, en este caso es la luciferasa que genera luz entonces la medimos la actividad relativa de la Luciferasa pero en verdad estamos viendo la actividad que debería tener nuestra proteína de interés porque esta usando su promotor

![](https://i.imgur.com/ZUPbjlf.png)
