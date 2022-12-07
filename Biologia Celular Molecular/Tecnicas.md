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
- [[microinyeccion]]
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
- [[fotoblanqueo]] → dinamicas moleculares FRAP y FLIP
- [[Y1H]]  → Interaccion entre proteinas
- [[inmunoprecipitacion]] → Observar interacciones proteinas - proteinas o proteinas - DNA
- [[ensayo de migracion e invasion]]
- [[TUNEL]]
- [[FUCCI]]


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




**Inmunofluorescencia:**

![](https://i.imgur.com/vyEobNn.png)

Es una técnica de inmunomarcación que hace uso de anticuerpos unidos químicamente a una sustancia fluorescente para demostrar la presencia de una determinada molécula.

Existen dos tipos de técnicas de inmunofluorescencia:

Primaria o directa : hace uso de un único anticuerpo que se encuentra químicamente unido a un fluorocromo. El anticuerpo reconoce la molécula diana y se une a ella directamente.

Secundaria o indirecta: hace uso de dos anticuerpos; el anticuerpo primario es el que reconoce y se une a la molécula diana, mientras que el secundario que es el que se encuentra marcado con el fluoróforo, reconoce al primario y se une a él. Esta técnica es posible, debido a que los anticuerpos constan de dos partes, una región variable (que es la que reconoce al antígeno) y una región constante (que es la reconocida por el anticuerpo secundario)

Pasos: Fijación- Permeabilización - Bloqueo- Inmunodetección (1° o 2°)





**Medida de la actividad relativa de la Luciferasa:**

Se genera en un plásmido, como vimos en bioqui 3, un inserto de la sección del promotor del gen de interés y se analiza la actividad de un gen reportero, en este caso es la luciferasa que genera luz entonces la medimos la actividad relativa de la Luciferasa pero en verdad estamos viendo la actividad que debería tener nuestra proteína de interés porque esta usando su promotor

![](https://i.imgur.com/ZUPbjlf.png)
