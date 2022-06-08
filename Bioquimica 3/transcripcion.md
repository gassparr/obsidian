[[Intrones]]

Mecanismos y Métodos de Estudio. 
Enzimología
Regulación
Aplicaciones en Ingeniería Genética

## Mecanismos y Métodos de Estudio 
ADN cromosomal –(Transcripcion)→ m[[RNA]] –([[Traduccion]])→ [[Sintesis de proteinas]]

El inicio de la sintesis de [[RNA]] se incio con un NTP, este se introduce en el extremo 3’ de la cadena molde (**sintesis 5’ → 3’**). La [[RNA]] polimerasa se mueve **3’ → 5’**

**Estructura de gen procarionte**
![500](https://i.imgur.com/n3kQpSl.png)
**Unidad transcripcional**
![279](https://i.imgur.com/Y6bFlto.png)  


## Mecanismo y Enzimología
**Operones**: 
- Grupo de genes funcionalmente relacionados que se encuentran contiguos en el [[DNA]] con 1 solo promotor
- Lleva la sintesis coordinada de proteinas funcionalmente relacionadas (estan co-regulados)
- Un solo mRNA se transcribe a partir del operon y luego se traduce en proteinas diferentes

**Etapas**:
1. Iniciacion
	  - [[RNA]] pol, se une a secuencia promotora en dsDNA (complejo cerrado)
	  - [[RNA]] pol fusiona dsDNA cerca del sito de inicio de transcripcion. Genera burbuja de transcipcion (complejo abierto)
	  - [[RNA]] pol cataliza union fosfodiester de los dos rNTPs iniciales.
2. Elongacion
	  - [[RNA]] pol avanza 3’ → 5’ por la cadena, fusionando [[DNA]] y agregando rNTPs a la cadena de [[RNA]]
3. Terminacion
	  - En el sitio stop de la transcipcion, la [[RNA]] pol libera al [[RNA]] complementario y despues se disocia

Durante todo el proceso se requiere el *melting* del [[DNA]], esto es que separa las hebras de [[DNA]] en el extremo 5’ y las vuelve a unir en el extremo 3’. Esto genera superenrollamientos positivos en la direccion de avanza de la [[RNA]] pol

**Secuencias promotoras**:
- Promotor es una secuencia de [[DNA]] que marca el incio de la transcripcion (sitio de union de [[RNA]] pol).
- Upstream al inicio de replicacion
- Tiene porciones relevantes (core, region distal y proximal).

**Ciclo de Sigma**:
- Sigma es una subunidad de la [[RNA]] pol
1. Sigma ayuda a [[RNA]] pol ubicar la zona promotora. Forma el complejo cerrado
2. [[RNA]] pol fusiona [[DNA]] formando el complejo abierto, [[RNA]] pol disminuye la secuencia promotora iniciando elongacion, esto disocia a Sigma.
3. [[RNA]] pol al tener baja afinidad con la secuencia promotora, se aleja de la misma, generando la elongacion
4. Sigma queda libre para unirse a otras [[RNA]] pol

**Union de [[RNA]] pol modulada por proteinas activadoras y represoras**

**Terminacion de la transcipcion**
*Rho Independiente*
[[DNA]] tiene secuencia con simetria, la cual se transcribe como secuencia complementeria de [[RNA]] (forma estructura 2da), formando asi un hairpin el cual desestabiliza la interaccion entre el [[RNA]] y [[DNA]] molde

*Rho dependiente*
Rho es una proteina la cual forma se aparea con [[RNA]] formando hairpin, asi disminuye la interaccion entre [[RNA]] y [[DNA]] molde


## Técnicas de estudio

### Niveles estacionarios de [[RNA]]

- Base pare reconocer el nivel de un mRNA particulas entre muchos [[RNA]]
	  - Hibridacion:
		1. Preparacion de [[RNA]] total marcado (mezcla de sondas; la correspondiente al gen target debe ser atrapada)
		2. [[RNA]] no marcado → cDNA marcados → sondas
		3. [[RNA]] no marcado → Sonda de gen target

 **Tecnicas**
 - [[northern blot ]]
- [[dot blot]]
- [[microarrays]] 
- Hibridacion in situ → Preguntar
- RT PCR →Permite medir la velocidad de trancipcion in vivo


### Identifiacion del inicio de la transcipcion

- [[Primer Extension]]
- [[Genes reporteros]]

### Transcriptoma
Conjunto de [[RNA]]s transcriptos en un tipo de celula para un estadio especifico del desarrolo o condicion fisiologica

Las celulas de un mismo organismo tienen el mismo genoma ([[DNA]]), aun asi se expresan distintas partes del mismo (mRNA)

*herramientas de estudio*:

- [[microarrays]]
- Secuenciacion masiva (NGS)

### Interacciones [[DNA]]-proteina

- [[Union a filtros de nitrocelulosa]]
- [[EMSA]]
- [[Footprinting]] 
- [[Y1H|Yeast one hybrid]]





# En [[eucariota]]

![400](https://i.imgur.com/6aiv9GY.png)

En el [[nucleo]], poseen 3 tipos de [[RNA]] Polimerasas:
- [[RNA]] pol I → pre [[RNA]]
- [[RNA]] pol II → mRNA
- [[RNA]] pol III → tRNA, rRNA, small [[RNA]]

## [[RNA]] pol II

Formado por 12 subunidades, donde la más grande se denomina CTD ( C terminal domain) tiene un importante rol  regulatorio.

**Core promoter**
Zona más pequeña suficiente para que ocurra transcripción por RNApol II *in vitro*. Está conformada por:

- TATA box → Localizado aprox. 30 bp upstream del sitio de inicio de transcripción  
- Initiator element (Inr) → Localizado en el sitio de inicio de la transcripcion, es una secuencia de 17bp
- Islas CpG → Zona rica en CG (20-50 n) dentro de las 100 bp upstream del inicio de la transcripcion

**Elementos proximales del promotor de [[RNA]] pol II**

Generalmente upstream del core.
Generalmente unen factores de transcripción gen específico.


## Inicio de la transcripcion

[[RNA]] pol no se unen directamente al promotor, requieren de ***factores generales de transcripcion (GTF*)**.
[[RNA]] pol se unen a zonas del promotor a traves de interacciones proteina-proteina con GTF

> Algunos GTF se unen al [[DNA]] a traves de interacciones especificas de secuencia, otros deben interactuar previamente con factores de ensamblado

La transcripcion por [[RNA]] pol II requiere de la union de un gran numero de GTFs al sitio de inicio, otros factores de transcripcion se unen upstream del gen y controlan la velocidad de inicio de la transcripcion, ***formando asi el complejo de pre-iniciacion (PIC)***.
Una vez formado, este complejo es activado por la fosforilacion de la [[RNA]] pol II

![400](https://i.imgur.com/2Q7I7iY.png)
![400](https://i.imgur.com/jBJcodA.png)




## Procesamiento de RNAs
**mRNA**:
1. ***Capping y adicion de poly A***
   - 5’ CAP → Adicion de GMP y metilacion de los primeros nucleotidos
   - 3’ Poly A → Adicion de As repetitivos en extremo 3’ 10 a 30 nucleotidos downstream del sitio AAUAAA (consenso), aproximadamente 200 residuos A
   > Poly A y CAP son necesarios para la estabilidad de los mRNA, sin estos son degradados rapidamente

2.  ***[[Splicing]]*** 


## Terminacion y poliadenilacion

- Cambio conformacional en [[RNA]] pol II 
- Exo-ribonucleasa que interacciona con [[RNA]] pol II
- Alteracion de sitio activo de [[RNA]] pol II (complejo [[RNA]]-[[DNA]]) por helicasa

## Degradacion de mensajeros

3 mecanismos no excluyentes
![400](https://i.imgur.com/0qkdI2H.png)

- Ruta de decapping
- Ruta de deadenilacion
- Ruta endonucleolitica

## [[RNA]] pol I
## [[RNA]] pol III
