Problema 1
**A.**
Protocolo para obtener el clon deseado

Partimos de dos placas de petri que contengan células que tengan nuestros dos plásmidos. A partir de estos cultivos vamos a tomar las bacterias y vamos a realizar una miniprep, la cual es una técnica de concentración y purificación de ADN plasmídico. Puedo separar al ADN plásmidico del cromosomal por su capacidad de renaturalizar. Voy a obtener dos tubos, en uno vamos a tener el pGemT con el inserto, y en el otro el pUC18.

El siguiente paso seria corroborar si tengo los plásmidos  en cada uno de los tubos, para eso voy a tomar una muestra y voy realizar una electroforesis sembrando la misma en un gel de agarosa 0,8%  con un buffer adecuado. En este gel voy a poder ver si aparecen distintas bandas que corresponden al grado de superenrrollamiento que tienen los plásmidos, por otra parte voy a poder observar la calidad de mi miniprep (si salió bien, que cantidad de DNA obtuve, etc).

La calidad de mi DNA la voy a poder comprobar una vez que obtuve bandas a través de un método espectrofotométrico midiendo a alguna de las bandas absorbancia a 230nm(DNA) y 260nm(proteinas), con estas medidas se hace una relación y si se obtiene un valor mayor a 1,8 se dice que el DNA tiene una buena calidad, mientras que si da por debajo de ese valor es porque tiene una contaminación importante con proteínas. 

Una vez que comprobamos la calidad de la miniprep, si es que salio todo OK, proseguimos realizando la digestión con las enzimas de restricción que se plantean. La digestión consiste en cortar a los plásmidos en sitios de corte específicos, para por un lado liberar el inserto y por el otro linealizar el plásmido.

Para digerir el pGemT voy a necesitar una mezcla de reacción que tenga: un buffer adecuado para la ER , H2O el plásmido que quiera tratar, termostatizar la mezcla a la temperatura óptima a la que trabaja la ER y por último agregar la enzima EcoRI.

En la otra mezcla de reacción voy a agregar buffer adecuado para la ER, H2O, el plásmido purificado y por último KpnI.


 Una vez que terminó el tiempo de la digestión hay que comprobar si la misma fue efectiva, esto lo vamos a comprobar usando un gel de agarosa. En este gel vamos a sembrar un patron de peso molecular, a un control del plásmido sin digerir, y a la muestra digerida.

Si salio todo bien, en la calle donde siembro el pGemT esperaría ver dos bandas, la que corre más se va a corresponder con el plásmido (2,6 kb), y la que corra menos al inserto (4kb).

En la calle donde sembré el pUC18 esperaría ver una banda a la altura del peso del plásmido.

Para continuar deberia purificar el inserto y el plásmido (por separado) de las calles donde los había sembrado, esto lo puedo hacer cortando con un bisturí el pedazo del gel donde supongo que está mi fragmento y de esta manera eliminó al pGemT. Al cortar también el plásmido pUC18 me libero un posibles plásmidos que no se hayan digerido en la mezcla de reacción, los cuales no voy a poder observar porque están en pequeña cantidad, y de esta manera obtener DNAs más puro. Una técnica que se podría usar es usar una agarosa de bajo punto de fusión para que en estos casos se pueda separar al DNA más fácilmente.

 Luego debería purificar el inserto para poder modificar sus extremos y hacerlos compatibles con el sitio de la otra enzima. Observando las secuencias que quedan luego del corte con las enzimas EcoRI y KpnI pensaría en llevar a los extremos, tanto del inserto como del vector, a romo y ligarlos con una ligasa. 

Para aumentar la eficacia de transformacion con plásmidos que contienen el inserto, antes de la ligacion deberia haber tratado al vector con una fosfatasa para desfosforilar el 5’.

Para la ligación requiero purificar los plasmidos e insertos romos y llevarlos a otra mezcla de ligación que contenga el buffer para la enzima que voy a utilizar, Mg++, ATPs y T4 ligasa. Se baja la temperatura a 16 grados para que baje la energia cinetica de las moléculas y aumenta la chance de que se dé la ligación. 

Luego de la ligación se procede a transformar bacterias con estos plásmidos en caldo LB y luego se selecciona con antibiótico. Con ampicilina identificamos bacterias que hayan obtenido plasmidos de las que no, ahora bien podrian haber captado solo el plásmido sin inserto. Para saber cual tiene el plásmido y cual no deberia agregar xgal y quedarme con las colonias blancas. 


**Responda además las siguientes preguntas:
a- Si tiene que transformar en romo los extremos 5’ protruyentes de un inserto que se libera al digerir un plásmido con la enzima EcoRI. ¿Qué enzima usaría como primera opción, y por qué? Qué componentes pondría en la mezcla de reacción.**



La digestion del plásmido + inserto con EcoRI deja el siguiente corte
G🔻AATTC    →  G-OH
CTTAA🔻G          CTTAA-5’

Para transformar el extremo a romo utilizaria el fragmento de Klenow que contiene la subunidad polimerasa de DNA pol de E Coli. Este fragmento utilizaria al extremo protruyente como molde y va a polimerizar agregando nucleótidos en el 3’-OH libre

G          → dNTPs+ Fragmento de Klenow→  GAATT
CTTAA                                                             CTTAA

En la mezcla de reacción pondria el inserto digerido, el buffer adecuado para el funcionamiento de la enzima, dNTPs y por ultimo la enzima. Debo tener en cuenta la temperatura de trabajo.



**b- Y si el inserto tuviera extremos 3’ protruyentes y quisiera obtener extremos romos, ¿Qué enzima usaría como primera opción, y por qué?**

 Si tuviera extremos 3’ protruyentes y los quisiera convertir en romo utilizaria la T4 DNA Pol, la cual tienen una actividad exonucleasa 3’ → 5’ más fuerte en el ADN simple hebra que en doble hebra y 200 veces más fuerte que la DNA polimerasa y el fragmento de Klenow.

En la mezcla de reacción debo poner buffer de la enzima, dNTPs, el pUC18 digerido y la la T4 pol, a la temperatura adecuada. El uso de dNTPS en esta mezcla es debido para que cuando la enzima degrade el DNA protruyente y se encuentre con un 3’OH y retome su actividad polimerasa y no degrade más DNA del deseado



C- ¿Cómo haría para marcar en una sola de las cadenas el fragmento EcoRI que obtiene por digestión en el punto a-de modo de obtener una sonda específica de cadena.

 Conoce la secuencia del inserto. Dispone de las enzimas que necesite, de cuba electroforética para ácidos nucleicos, agarosa, tampón TBE, y demás reactivos de uso corriente en un laboratorio de genética molecular.

Para marcar una sola de las cadenas del fragmento EcoRI podria hacer una digestión del plásmido con inserto y luego a esa digestion hacer un End filling, que consta de tratar a los fragmentos digeridos con los extremos 5’ protruyentes con el fragmento de Klenow en presencia de dNTPs marcados. Luego de este paso deberia tratar a la nueva cadena con otra enzima que corte al DNA grande para despues poder identificar donde estan las sondas.

**PROBLEMA 2.
Compare los resultados de ligar:**
- 1 [pUC19 + BamHI + CIAP] ligado a [pG18mob2 + inserto 2 kpb + BglII]
- 2 [pUC19 + BamHI] ligado a [pG18mob2 + inserto 2 kpb + BglII]
- 3 [pUC19 + BamHI + CIAP] ligado a [pG18mob2 + inserto 2 kpb + BglII+ CIAP]
Qué productos espera obtener si se plaquean las ligaciones en cajas con:
a) ampicilina, y b) gentamicina.

**1**
el plásmido pUC19 tienen resistencia a ampicilina y se lo trata con BamHI y con una fosfatasa alcalina.
 La otra digestion es de un pG18mob2 que contiene resistencia a gentamicina un inserto de 2kpb tratado con BgIII que supongo que me va a liberar el inserto .
Para ver si las enzimas son compatibles deberia ver que tipo de corte generan y ver si las secuencias de sus cortes van a ser complementarias.
BamHI G🔻GATCC  →  ----G
                  CCTAG🔻G        ----CCTAG


BgIII A🔻GATCT  →       GATCT----------
                  TCTAG🔻A A----------

Cuando estos extremos protruyentes se fusionan no se regenera ningun sitio de corte de las enzimas que estaba utilizando. Por lo que observando estos cortes llego a la conclusión de que estas enzimas son compatibles.

**PROBLEMA 3.
Acerca de las siguientes polimerasas: PolI, Klenow, Pfx, Taq. Indique similitudes, diferencias y usos.**
**Luego: indique si las siguientes afirmaciones son verdaderas (V) o falsas (F) (Justifique).
a) La DNA Pol T4 es más utilizada que el fragmento Klenow para rellenar cuando hay extremos 5´protruyentes por su mayor actividad exonucleasa 3´-5´.**
FALSO. Las DNA pol T4 son mas agresivas con su actividad exonucleasa, lo cual las hace menos utilizadas para rellenar extremos 5’
**b) La PFX Polimerasa tiene una taza de error más baja que la Taq Polimerasa.**
VERDADERO, es la polimerasa con menor taza de error
**c) La Polimerasa I de E. coli no puede ser utilizada para Nick translation porque carece de la actividad exonucleasa 5´-3´.**
FALSO. La Pol1 tiene actividad exonucleasa 5’→ 3’ por lo que se puede usar para nick translation
**d) Con la actividad exonucleasa 5´-3’(Nick translation) del fragmento Klenow y en presencia de dNTPs marcados se marcan las dos hebras de un fragmento de DNA, mientras que con fosfatasa alcalina sólo se marca una de las hebras en su extremo 5´P.**
VERDADERO

**PROBLEMA 4.
Para cada una de las siguientes enzimas utilizadas en clonados moleculares:**
**a- Transcriptasa reversa murina (MLV)**
Polimerasa RNA y DNA especifice. Permite convertir ssRNA en dsDNA
**b- T4 ADN Ligasa**
Fosforilasa, se puede utilizar para ligar extremos cohesivos o romos de DNA y puede ligar RNA a DNA. Requiere ATP
**c- ADN Ligasa del E. coli**
Fosforilasa, no puede ligar extremos romos y no puede unir RNA a DNA
Requiere NAD
**e- ADN polimerasa I**
Actividad 3’-5’ y 5’-3’ exonucleasa y procesamiento de fragmentos de okazaki
**f- Transferasa terminal**
Actividad transferasa, utilizada para marcar DNA o producir vectores. Agrega dNTPs en el extremo 3’ sin la necesidad de un primer
**g- Fosfatasa alcalina bacteriana (E. coli)**
Cataliza la transferencia de un P de un ATP a la terminal 5’ OH de DNA o RNA. Tambien puede hacerlo en la terminal 3’ P
**h- Bacteriofago T4 polinucleótido kinasa**
Solo cataliza la transferencia de un P de un ATP a la terminal 5’ OH de DNA o RNA
**i- Exonucleasa III**
Actividad exonucleasa 3’-5’, puede actuar sobre extremo romo, cohesivo 5’ o nicks. No degrada cohesivos 3’
**Especifique:
i) Actividad enzimática
ii) Requerimientos específicos cuando corresponda
iii) Al menos una posible aplicación**

**PROBLEMA 5
Usted desea montar un laboratorio de biología molecular. Con ese objetivo está realizando un relevamiento de las enzimas que necesitará para encargarlas a un proveedor local. Describa una posible enzima que utilizaría para cumplir con cada uno de los objetivos que se describen a continuación, indicando de modo conciso la actividad enzimática, cómo la utilizaría y los requerimientos específicos cuando corresponda.**

**a) Detección de secuencias específicas de ADN para el diagnóstico molecular de infecciones bacterianas (sólo se requiere informar resultados positivos/negativos).**
PCR con taq polimerasa

**b) Construcción de sondas de ADN específicas de hebra.**
T7 DNA polimerasa

**c) Detección de secuencias específicas de RNA para el diagnóstico molecular de infecciones por ARN-virus.**
Transcriptasa reversa 

**PROBLEMA 6
Usted se encuentra trabajando en la división de investigación y desarrollo de una reconocida empresa biotecnológica, específicamente en el área de aislamiento y caracterización de nuevas ADN polimerasas.
Recientemente ha aislado y caracterizado una novedosa polimerasa termoestable que presenta las siguientes actividades: actividad ADN polimerasa 5’->3’, fuerte actividad 3’->5’ exonucleasa, alta fidelidad y muy alta procesividad (hasta 30 Kpb). No posee las siguientes actividades: Transferasa terminal, 5’->3’ exonucleasa, desplazamiento de cadena.
Indique si la nueva polimerasa podrá utilizarse para los siguientes fines. Justifique y describa brevemente.
a) Diagnóstico molecular de infecciones causadas por ADN-virus.
b) Nick translation.
c) Degradación de extremos 3’ protruyentes.
d) Clonado de productos de PCR con extremos romos.**
