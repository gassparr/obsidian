# Manipulacion Genetica

## Herramientas Basicas

- Aislamiento de material genetico
	- Metodos de analisis y caracterizacion
- Manipulacion in vitro del material genetico
- Introduccion del material modificado en la especia blanco
- Transgenesis
- Intercambio de marcadores (recombinacion homologa)
- Edicion genomica (CRISPR)
- Seleccion fenotipica de las variantes alelicas
- Condiciones para la estabilidad/heredabilidad de los nuevos caracteres

## Estrategias de Mutagenesis

- Mutagenesis generalizada
	- Mutagenesis quimica
	- Mutagenesis fisica
	- [[Ingenieria Genetica/Miscellaneous/Mutagenesis#Mutagenesis por transposicion|Mutagenesis por transposicion]]
- Mutagenesis dirigida
	- [[Ingenieria Genetica/Miscellaneous/Mutagenesis#Mutagenesis puntual sitio especifica|Mutagenesis puntual sitio-especifica]]
	- [[Ingenieria Genetica/Miscellaneous/Mutagenesis#Mutagenesis insercional|Mutagenesis Insercional]]
		- integracion de vectores
		- integracion de cassettes de DNA
	- [[Ingenieria Genetica/Miscellaneous/Mutagenesis#Mutagenesis delecional|Mutagenesis delecional]]

# Mutagenesis por Transposicion

## Transposicion en Bacterias

Dos grupos principales:
- Secuencias de insercion (*IS*)
  Tienen repeticiones terminales invertidas y el gen flanqueado por estas.
  ![](https://i.imgur.com/92GzXX6.png)

  > IR-Gen-IR
- Transposones (*Tn*) **Compuestos**
  Tienen genes de resistencia a antibioticos flanqueados por dos IS, las cuales pueden estar orientadas directa o invertida.
  ![](https://i.imgur.com/dIhwlHq.png)
	- Tienen region central con marcadores, flanqueados por *IS*
	- Modulos *IS* pueden estar como repeticiones directas o invertidas
	- Tienen genes auxiliares ajenos a la transposicion
- Tn **No compuestos**
  Tienen genes de resistencia a antibioticos pero no estan flanqueados por *IS*. Terminan en IR.
  ![](https://i.imgur.com/xWPOc3c.png)

## Mecanismos de Transposicion

- Transposicion no replicativa (*directa*)
  Tn se pierde de su ubicacion original cuando se transpone a un nuevo sitio
- Transposicion replicativa
  Queda una copia del Tn cuando se inserta otra copia en el sitio blanco

Los transposones pueden tener auto apariamiento, lo cual genera hairpins

### Especificidad de Insercion

- Algunos transposones se van a insertar preferentemente en ciertos sitios, otros van a evitar regiones especificas del genoma y otros no tendran preferencia.
- Luego de la integracion en el sitio blanco, los transposones y la IS afecta la transcipcion de genes localizados en la vecindad de la insercion

1. tasa de transposicion
   = 10^-3 - 10^-4 (por generacion)
2. Tasa de mutacion espontanea
   = 10^-5 - 10^-7 (por generacion)
3. Tasa de reversion
   = 10^-6 - 10^-10 (por generacion)

## Sistemas de Entrega

- Bacteriofagos
- Plasmidos suicidas
	- Incapaces de replicar en celulas blanco
	- Mas versatiles que bacteriofagos

## Tn Como Herramienta de Mutagenesis

- Mutagenesis *in vivo*
	- Ventaja: Organismo blanco no necesita ser naturalmente competente
	- Desventaja: Tn debe ser inducido via un vector suicida; Transposasa debe expresarse en la celula blanco resultando en inestabilidad de inserciones
- Mutagenesis *in vitro*
	- Ventaja: Alcanza altas capacidades de saturacion
	- Desventaja: Debe tenerse informacion preliminar sobre los sitios de transposicion en la molecula blanco

Ventajas de mutagenesis por transposicion:
- Integra DNA nuevo, en un DNA blanco. La frecuencia de reversion es mas baja que la tasa de mutacion por base simple
- Las funciones relacionadas con la transposicion son provistas por una transposasa localizada en el vector suicida dador del Tn, y sera perdido luego de la transposicion dando asi estabilidad al elemento movil
- Marcador de seleccion del Tn puede ser utilizado para identificar el fragmento de DNA genomico al que se ha incorporado el elemento movil

### Transposomas

Combinan ventaja de los sistemas de transposicion *in vivo* e *in vitro*

- Ventaja: Puede emplearse en bacterias donde no se expresa transposasa del Tn5
- Desventaja: Dependiente de la disponibilidad de un sistema de transformacion eficiente

## Estrategias de STM (signatured Tagged mutagenesis)

STM es un diseno experimental que utiliza Tn con secuencias unicas de DNA "Etiquetas", lo cual permite la facil identificacion y cuantificacion (por *hibridacion y secuenciacion*)

1. Generar biblioteca de mutante "etiquetado"
2. Desafio con el hospedador y screening posterior de la biblioteca para evaluar cambios en la abundacia final de cada mutante respecto de su proporcion en el inoculo inicial

Consideracion a tener para ensayo **STM**:

- Generacion de biblioteca mutante:
	- Construidas por mutagenesis por transposicion (Tn)
	- Cada Tn incorpora firma unica (20-30 b), lo cual permite identificacion individual
- Identificacion - Cuantificacion:
	- Hibridacion en microarray, previa PCR de un fragmento que contenga las firmas usando la mezcla inicial y final de bacterias mutantes
	- Recuento de las firmas previo secuenciamiento de alta penetracion de los productos de PCR
- Complejidad de mezclas (pools):
	- Definido por el numero de mutantes que se inoculan en cada mezcla(pool) (usualmente 100 - 500 mutantes)
- Tamano de inoculo
	- Debe contener un numero de bacterias que asegure la adecuada representatividad de todas las firmas
- Duracion del desafio de la mezcla de mutantes con el medio a analizar
	- Variable segun ensayo


1. Mutagenesis de Tn (construccion de biblioteca mutante)
2. Experimentos de inoculacion, colecta de muestras input y output
3. Extraccion total de DNA
4. Digestion de DNA

# Mutagenesis Puntual Sitio Especifica

# Mutagenesis Insercional

Mutagenesis dirigida por integracion de vectores o por intercambio aleliico

Vectores por intercambio alelico

**Propiedades del vector**
- Ser suicida en la bacterias blanco
- Tener orgien de replicacion condicional bajo condiciones especificas de modo de seleccionar solo aquellas bacterisa que han integrado el vector / Realizado un doble crossing-over
- Poseer marcador de seleccion
- Ser transferible por transformacion / conjugacion

**Suicide vector systems**
- Estrategia simple implica el uso de vectores de rango estrecho de hospedadores
- Vectores para mutagenesis dirigida basados en Ori Repliacion de plasmido R6K, requiere de proteina pi en la celula hospedadora
- Incorporacion de marcadores de seleccion positiva cuando se ppierde el vector facilita la seleccion de dobles recombinantes

## Integracion de Vectores por Simple Recombinacion

- Desventaja:
	- Polaridad de la insercion y promotor interno alteran la expresion genica
	- Formacion de dos copias mutantes del gen blanco afectan la estabilidad de insercion y causa excision del plasmido
	- Presion selectiva puede afectar la viabilidad celular y resulta en fenotipos no relacionados a la mutacion

# Mutagenesis Delecional

## Construccion de Deleciones Sin Marca

Se utiliza un marcador de seleccion positiva para la perdida del vector suicida.

Seleccion positiva de mutantes a partir de un ensayo en dos etapas utilizando un marcador de seleccion positiva para la perdida del vector.
1. Selecciona para la integracion del vector suicida (recombinacion intermolecular) que porta el alelo mutado/delecionado
2. Seleccion el evento de escision del vector por recombinacion intramolecular

## Elementos Transponibles en Eucariotas

- Elementos Clase 1: Retrotransposones
	- Con *LTR*: Simil retrovirus
	  > *LTR*—{gag}—{pol}—{env}—*LTR*
	  > *LTR*—{gag}—{pol}—*LTR*
	- Sin LTR: Simil LINE
	  > {gag}—{pol}—Poli A

- Elementos clase 2: Transposasa
  LTR—LTR

- LTR → repeticiones terminales largas
- gag; pol → genes similares, codifican proteinas para transposicion
- env → gen que codifica proteina de cubierta
- Transposasa → Proteina necesaria para transposicion para elementos que se movilizan via DNA

## Mecanismo

1. Fusion de Retrotransposon
2. Transcripcion reversa (genera DNA viral)
3. Transporte al nucleo e integracion (formacion de provirus)
4. Transcripcion (formacion de proteinas virales)
5. Formacion de capside (ssRNA genomico + Transcriptasa reversa)