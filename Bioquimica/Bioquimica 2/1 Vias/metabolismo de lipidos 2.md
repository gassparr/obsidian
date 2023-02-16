![](https://i.imgur.com/uNrDlVG.png)

# Catabolismo de Ac Grasos

Oxidacion de AG cadena larga → AcCoA

**objetivos**
Animales:

- Energia metabolica (Higado y Corazon de Mamifero)(Beta Oxidacion)
- Transferencia en otros intermediarios (cuerpos cetonicos)
    Plantas:
- Precursor biosintetico

Porque TAG son almacenamiento energetico eficiente:

- Reducidos
- Hidrofobicos: Debido a esto, para la hidrolisis se necesitan emulsionar y por otro lado, para ser transportados, deben asociarse con proteinas
- Poco Reactivos: Para activarse deben reaccionar con AcCoA

## Fuente de AG

Vertebrados:

- Dietarios
- Almacenados
- Sintesis

Protistas:

- Organismos inferiores
- Alamcenamiento

Plantas:

- Almacenamiento

### Transporte

Una vez que pasa el estomago, se secretan sales biliares las cuales emulsionan los AG para que las _lipasas intestinales_ [^1] formen TAG y DAG, lo cual permite el pasaje hacia los enterositos, en donde se asocian con lipoproteinas (ApoC-II). Los TAG al asociarse forman **Chylomicrones** [^2] las cuales son gotas de lipidos que sirven para el transporte, los tejidos tienen una _lipoprotein lipasa_ la cual rompera este chylomicron para asi poder integrar los TAG en el tejido.

[^1]: _Lipasa pancreatica_; _Estearasa_; _Fosfolipasa_
[^2]: Lipoproteinas formadas por una capa de fosfolipidos con su cabeza polar hacia afuera y hacia adentro donde se encuentran los TAG su porcion hidrofobica

## Oxidacion

El AG tiene que ser activado con CoA utilizando _AcilCoA Sintetasa_, formando un Tioester lo cual disminuye drasticamente su Delta G (activandolo).
La ecuacion global sera:

> Ag + CoA + ATP → AcilCoA + AMP + 2Pi

La reaccion ocurre en pasos, en la membrana externa de la [[mitocondria]]:

En primer lugar el AG reacciona con ATP para formar AG-Adenilato utilizando la _AcilCoA sintetasa_

> ATP + AG -(_Acil CoA sintetasa_)→ AG-Adenilata

Siguiente a esto, el AG-Adenilato reaccionara con el CoASH utilizando _AcilCoA sintetasa_ para formar AcilCoA. Esta reaccion esta acoplada a la ruptura del pirofosfato.

> AG-Adenilato + CoASH –(_AcilCoA Sintetasa_)→ AcilCoA + AMP
>
> PPi → 2Pi

En su forma de AcilCoA se encuentra a dispocision dentro del [[citosol]], y tiene 2 destinos posible:

### Beta oxidacion:

Ocurre dentro de la [[mitocondria]] para eso los AG deben ingresar a la misma, cuando los AG<12C entran a la mitocondria sin transportador, en el caso que los AG>14C necesitaran del transporte con la lanzadera de **carnitina**.
El acido graso utiliza _Carnitina aciltransferasa 1_ la cual retira el grupo CoA y en su lugar posiciona una **carnitina** formando un Acil-Carnitina, la cual utiliza una [[transportador]] antiporter el cual saca **carnitina** de a matriz mitocondrial e ingresa un Acil-Carnitina.
La Acil-carnitina sera sustrato de la _Carnitina aciltransferasa 2_ la cual remueve la carnitina, el AG resultante reacciona con CoASH para forma un AcilCoA (forma activada).

Una vez ocurrido la transporte, la Betaoxidacion consta de 4 pasos en donde los productos seran AcCoA y el AG (C-2). Este AG(C-2) tendra sucesivos pasos de oxidacion:

1. En un primer paso la _AcilCoA DH_ oxida el AGCoA en los carbonos alpha y beta con cofactor FAD para formar FADH2, los FADH2 iran a la [[cadena transportadora de electrones]].

    > AGCoA + FAD –(_AcilCoA DH_)→ RC=C**(CO)CoA** + FADH2

2. En un segundo paso como el doble enlace es mas reactivo, con el uso de _EnolCoA Hidratasa_ ocurre una hidratracion

    > RC=C**CCoA** + H2O –(_EnolCoA Hidratasa_)→ R(COH)C**(CO)CoA**

3. El AG oxidado (-OH) reaccionara con NAD para formar NADH2 conn el uso de _beta hidroxiacilCoA DH_

    > R(COH)C**CCoA** + NAD(+) –(_beta hidroxiacilCoA DH_)→ R(CO)C**(CO)CoA** + NADH2

4. La B cetoacilCoA sera sustrata de la _thiolasa_ la cual rompera el enlace Beta (CO)-C cuando reacciona con CoASH

    > R(CO)C**CCoA** + CoASH –(_thiolasa_)→ R(CO)CoAS + **CH3(CO)CoA**

**las enzimas de la beta oxidacion solo actuan en dobles enlaces trans, por lo que en AG insaturados (Cis), se necesitara el accionar de una enzima _isomerasa_, para oider continuar con la oxidacion**

### Regulacion

la regulacion es dependiente del ingreso de AG a la mitocondria, donde actua el _malonil CoA_, el cual proviene de la glucolisis y es un intermediario de la AcCoA. el _malonil CoA_ inhibe la _carnitina Acil transferasa 1_.

Glucosa –(glucolisis)→ AcCoA –(_ACC activa_)→ Malonil CoA

Activacion (glucosa alta):
La insulina activa la _proteina fosfatasa_ la cual activa la _AcCoA carboxilasa_ (ACC) desfosforilandola.

> _ACC_ inactiva –(_protein fosfatasa_)→ _ACC_ activada + Pi

La _ACC_ activa es la que permite la formacion de Malonil CoA a partir de AcCoA

Inhibicion (glucosa baja):
El glucagon activa la _PKA_ la cual fosforila el _ACC_ asi inactivandolo

### En [[Plantas]]

Ocurre en sistema peroxisomal / glioxisomal, por lo tanto es diferente al sistema mitocondrial:

- 1a ox. e- directamente a O2 → H2O2
- NADH no reoxida, se exporta a mitocondria
- AcCoA exportado para:
    - precursores biosinteticos
    - Oxidacion en [[mitocondria]]

El AcCoA procedente no se utiliza para energia, sino que exclusivamente como precursor biosintetico

# Triacilglicerol

## movilizacion

mecanismo simil a [[Transduccion de señal]] excepto que cAMP activa la PKA,
la PKA tendra 2 destinos:

- activa la _lipasa_ (actua sobre gota de lipidos).
- Fosforila Perilipina (Lipoproteinas en la superficie de la gota) para asi permitir el accionar de la _lipasa_.

La _lipasa_ hidroliza el TAG hacia AG los cuales pasan al torrente sanguineo, donde para su transporte se asocia con _albumina serica_.

# Cuerpos Cetonicos
En mamiferos el Acetil Coa formado en higado tiene 2 destinos
- [[Ciclo de Acido Citrico]]
- Cuerpos Cetonicos

Los cuerpos cetonicos se forman en la matriz mitocondrial hepatica, su funcion es de fuente de energia quimica
![](https://i.imgur.com/L4aJ959.png)

