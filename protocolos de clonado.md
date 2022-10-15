# Enzimas de restriccion

1. **[[miniprep]]** : Extraccion de DNA plasmidico de un cultivo bacteriano

	Como el inserto no tiene sitio de corte para BamHI ni NcoI y no hay sitio de corte para BclII antes del ATG, tenemos que construir primers con sitio de corta para NcoI y BamHI
	
	**Vector**
	
	- CCA TTA GGC TAC GGT AC|C ATG GGA G|GA TCC AGA TCT 
	- GGT AAT CCG ATG CCA TGG TAC |CCT CCT AG|G TCT AGA 
	
	NcoI 
	C | CATG G  
	G GTAC | C
	
	BamHi
	G | GATC C
	C CTAG | G
	
	- 5’ CCA TTA GGC TAC GGT AC                 GA TCC AGA TCT 3’ 
	- 3’ GGT AAT CCG ATG CCA TGG TAC                 G TCT AGA  5’
	
	Inserto → No tiene sitio de corte para NcoI y BamHI, tenemos que agregarlos usando primers
	
	Las secuencias siempre se agregan en 5’ y como el vector ya tiene un STOP y un ATG no le tenemos que agregar los del inserto

2. **Primers**
	
	Forward
	5’ AAA AC|C ATG GNN GGTG CCC GAG 3’
	   
	Reverse
	5’ G|GA TCC GCG CAC GTC GAA 3’
	
	**Secuencias del inserto**
	
	5’ GTG CCC GAG CAA … AGG TTC GAG GTG CGC 3’
	--------------------------------AAG CTG CAC GCG CCT AGG 5’
	
	5’ ATG GNN GTG CCC CAG 3’
	5’ -----------CAC  GGG CTC GTT … TCC AAG CTG CAC GCG 5’
	
	despues de muchos ciclos el inserto queda
	
	5’ AAA AC|*C ATG GNN GTG CCC GAG … AGG TTC GAC GTG CGC G*|GA TCC 3’
	3’ TTT TGG TAC | *CNN CAC GGG CTC … TCC AAG CTG CAC GCG CCT AG*|G 5’


3. Digerimos el vector y el plasmido con NcoI y BamHI
4. Verificar los cortes por electroforesis
5. Inactivar las enzimas
6. Ligar con T4 ligasa
7. Transformacion 
8. Seleccion con atibioticos y colonias blancas/azules
9. Checkear por PCR o enzimas de restriccion

# Golden gate
Utiliza enzimas que reconoces un sitio pero cortan por fuera del sitio

BsaI

5’ GGT CTC N|NNNN 3’
3’ CCA GAG N NNNN| 5’

hay que insertar este sitio de corte en el inserto y el plasmido, para eso construimos primers

**Vector**

5’ CCA TTA GGC TAC GGT ACC ATG GGA GGA TCC AGA TCT CAC CAC CAC 3’
3’ GGT AAT CCG ATG CCA TGG TAC CCT CCT AGG TCT AGA GTG GTG GTG 5’

**Inserto**

5’ GTG CCC GAG CAA … AGG TTC GAG GTG CGC 3’
3’ CAC  GGG CTC GTT … TCC AAG CTG CAC GCG 5’

**Mi objetivo**

En negrita mi inserto

5’ CCA TTA GGC TAC GGT ACC ATG **GTG CCC GAG CAA …** GTG CGC CAC CAC CAC 3’
3’ GGT AAT CCG ATG CCA TGG TAC CAC GGG CTC GTT …   CAC GCG GTG GTG  GTG

**Primers**

Forward del vector 
5’ NNN GGT CTC N GCG C CAC CAC CAC CAC 3’

Reverse del vector
5’ NNN GGT CTC N CCA T GGT AGC GTA GCC TAA TGG 3’

Forward del inserto
5’ NNN GGT CTC N ATG GTG CCC 3’

Reverse del inserto
5’ NNN GGT CTC N GCG C NCG TCG AAC CTG TCG 3’

El primer directo del inserto comienza con la secuencia de la enzima, luego 4N que van a ser los 3 del vector y el 1ero del inserto y sigo copiando la hebra de arriba
El primer reverso del inserto comienza con la secuencia de la enzima luego 4N complementarias y reversas a las 4 del inserto

**Secuencia del vector despues de la  pcr**