# Estrategia

1. Eleccion del vector
2. Preparacion
   - Del vector → Corte con ER/ Desfosforilacion/purificacion
   - Del inserto de DNA → plasmido/PCR/corte con ER/Purificacion
3. Clonado del inserto dentro del vector → Ligacion/transformacion en huesped/ identificacion de clones positivos/ verificacion del producto clonado (*Secuenciacion*)
4. Transformacion dentro del huespued para expresion
5. Induccion y optimizacion de la expresion de la proteina de interes → Analisis cuantitativos de niveles de expresion y actividad biologica
6. Scale up
7. Purificacion de la proteina y analisas funcional

## Eleccion de vector

Tener en cuenta:
- Capacidad de expresion del sistema
- Modificaciones post traduccionales
- Plegamiento de proteina

**Expresion de la proteina heterologa**
1. Seleccion de cepa
   - Bajos niveles de proteasas endogenas
   - Supresion de la sintesis de proteinas endogenas
2. Cultivo en medio de seleccion
   - Induccion
3. Seguimiento de la proteina de interes
   - SDS-Page
   - Western blot

**Sistema de expresion en bacterias**
Desventajas:
- Algunas proteinas producidas en bacterias se tornan inestables o carecen de actividad biologica
- Presencia de pirogenos en proteinas de uso terapeutica
- Formacion de cuerpos inclusion
	  - (Proteinas inactivas insolubles que se forman debido a la sobreexpresion)
	  - Ventajas: protegen de accion de proteasas citoplasmaticas
	  - Favorece su formacion: Aumento de velocidad de formado, Disminucion en velocidad de plegado, Aumento de velocidad de agregacion

### Vector de expresion en E.Coli

Que debe tener:
- Promotor eficiente
- Secuencia de union a ribosoma optimizada (Shine-dalgarno)
- A 6-10bp downstream de shine-dalgarno, debe situarse el codon ATG que senala el comienzo de la traduccion del ARN,
- En el extremo 3’ de lo anterior, una secuencia que funcione como terminado de la transcripcion

**Promotores regulables**
- lac
- trp
- Hibrido artificial tac
- fage lambda
- fago t7

**Eleccion del sistema de expresion**
1. Tamano de la proteina
   .< 100 AA: estables como proteinas de fusion
   .> 100 AA: probablamente inestables (cuerpos de inclusion)
2. Cantidad de proteina
   - Poca cantidad: Plasmidos de expresion standard
   - Grandes cantidades: Explorar varios sistema huesped y esquemas de purificacion
3. Proteinas Activas
   Considerar la formacion de cuerpos de inclusion

# Proteina de fusion

Una proteina de interes fusionada con una proteina o peptido conocido, denominado *Tag*, pueden estar en cualquier extremo (NH3 o COO)

*Tag*-proteina // proteina-*Tag*

Beneficios:
- purificacion
- protege de proteolisis a la proteina de interes
- mejora solubilidad de la proteina
- estabiliza la proteina de interes

**Fusiones permiten**
- Facil y rapida purificacion de la proteina expresada en bacterias, basada en las propiedades del Tag (cromatografia de afinidad, anticuerpos)
- Direccionar la localizacion de proteinas de fusion en bacterias
	  - Periplasma → facil purificacion, pocas proteinas contaminantes, ambiente favorable para el buen plegamiento y formacion de puentes disulfuro
	  - Segregacion al medio → pocas proteinas contaminantes, facil purificacion
- Aumentar la solubilidad de las proteinas de fusion
- Caracterizacion de proteinas (Ensayo doble hibrido, GST-pulldown, co-inmunoprecipitacion)
- Localizacion de proteinas en celulas eucariotas por fusion a proteinas o Tags fluorescentes (microscopia de flurorescencia) o Tag contra los que hay anticuerpos comerciales (inmunofluorescencia)

**Crear proteina de fusion**
Codon de inicio: ATG (Met)
Codones STOP: TAG, TGA, TAA

Esquema generico:

Promotor → ATG // A // B // MCS

A → Secuencia Tag
B → Secuencia concenso (corte de proteasa)
MCS → Sitio clonado multiple

**Clasificacion de Tags**
- De purificacion
	 - Por afinidad a un ligando (GST)
	   Muy facil purificacion, Aumenta solubilidad de la proteina
	 - Por caracteristicas quimicas del Tag (His-Tag)
	   Tag lineal (4, 6 o 10) His consecutivas.
	   Muy pequeno (<1 KDa).
	   Purifica en condiciones desnaturalizantes (Urea 8M).
	   Buen rendimiento de purificacion, Unico paso de purificacion.
	   Tag no interfiere con el plegamiento ni con funcion de la proteina.
	 - Por anticuerpos comerciales (T7, FLAG, HA, C-Myc, Etc)
- De localizacion en bacterios
	  - Secuencias de localizacion periplasmica (mejora plegamiento para favorecer formacion de S-S)
	  - Secuencias que permiten la secrecion al medio de cultivo (facil purificacion)
- De aumento de solubilidad → NusA.
- Localizacion de proteinas → GFP, DsRed. Anticuerpos comerciales contra Tags por inmunofluorescencia

## Localizacion de proteinas

GFP (Proteina verde fluorescente)
DsRed (proteina roja fluorescente)

**Epitope Tagging**
- Epitope de secuencia conocida, tiene anticuerpos especificos
- Ejerce minimos efectos sobre estructura y funcion de proteina
- Altamente espefcifica y con minima cross-reactividad
- Los mas utilizados
  HA
  Myc
  FLAG

Diseno del epitope tagging
- Criterios de eleccion → Disponibilidad de AcMo anti-Tag
- Localizacion del Tag → C o N terminal
- Inmunoprecipitacion → Anti-Tag sepharosa
- Deteccion → Western blot

Metodo de purificacion
- Carga → IEX, IEF, Cromatofocus
- Tamano → SEC/GF
- Hidrofobicidad → HIC
- Cromatografia de afinidad

## Sistema de expresion His-Tag

### Objetivo

- Purificar la proteina de interes, por fusion con una cola de His (6-12 residuos) que diferencia de demas proteinas del huesped
- His se unen con alta afinidad a ciertos iones metalicos (Ni) inmovilizados en una columna de afinidad

**Ventajas**
- Facilidad en purificacion, inclusive en condiciones desnaturalizantes
- Aumento de la solubilidad
- Facilidad en la deteccion
- Util para obtener proteinas que se encuentran en baja concentracion o carente de anticuerpos para su deteccion

**Desventajas**
- Alteracion de la activdad proteica
- Problemas en el plegamiento

Para minimizar los problemas, se inserta Tag en los extremos de la proteina donde sea menos probable que afecte su funcion.
Ademas agrega un sitio proteolitico para su posterior eliminacion

### Caracteristicas del vector

- Promotor T7
- Iniciador de transcripcion T7
- Terminador T7
- His-Tag
- S-Tag
- MCS (Ncol-Xhol)
- LacI
- Resistencia a Km
- Origen pBR322 y f1

## Construccion de una proteina de fusion

Tag a Fusionar // Gen de interes

MET…………..LEU ARG THR
ATG…………..GTG CGA A*CC ATG G*
                                       *NcoI*

- El stop de traduccion del gen del tag de fusion debe eliminarse
- El marco de lectura de la proteina de fusion debe ser contiguo

### Preparacion del inserto
![500](https://i.imgur.com/IgB612a.png)

### Preparacion del vector 

1. Miniprep
2. Electroforesis en gel de agarosa 
3. Digestion con NcoI y XhoI
4. Electroforesis en gel de agarosa (para ver si digirio)
5. Cortar banda (espacio donde entra inserto), Inactivar enzimas por calor

### Clonado

Ligacion con T4 DNA ligasa

![500](https://i.imgur.com/825p6bX.png)

**Cepas de clonado**

- recA
- Deficiente en RNA polimerasa T7 
- Kanamicina sensible

Produce gran cantidad de plasmidos que se usan para chequear la secuencia obtenida y verificar la obtencion del marco de lectura adecuado

**Antes de purificar**

Ensayo Preliminar
1. Cultivo de cepa de expresion con y sin inductor (IPTG)
2. Lisado de celular
3. Centrifugacion 
4. Analisis de la presencia de la proteina en el sobrenadante y en el pellet en SDS-PAGE

### Purificacion
- Se utiliza una columna de afinidad que contiene la resina unida al complejo Acido Nitriloacetico - Ni (+2)
- Pasos
  1. Lisis celular
  2. Union a la matriz
  3. Lavado
  4. Elucion
- Lavado y elucion
  - concentracion creciente de imidazol 
  - Disminuir el pH del buffer de elucion 
  - Agregado de Nal 0.5M para que no se una Ni(+2

**His-Tag**
- Esquema de purificacion
- Resinas reusables
- Alto rendimiento

![400](https://i.imgur.com/IgxojvF.png)
