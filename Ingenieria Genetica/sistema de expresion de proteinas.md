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

### Proteina de fusion

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