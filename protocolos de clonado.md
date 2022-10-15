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

5’ NNNGGTCTCA | ATGGTGCCCGAG … GT | GCGCTGAGACCTTT 3’
3’ TTTCCAGAG T    TACC | ACGGGCTC … CACGCG | ACTCTGGAAA 5’

**Cuando corto los dos por separado y luego los ligo**:

5’ CCA TTA GGC TAC GCT ACC | ATG GTG CC GAG … GTG CGC CAC 3’
3’ GGT AAT CCG ATG CGA TTG TAC CAC GGG CTC … CAC GCG | GTG 5’

1. Escribir como quiero que me quede la secuencia 
2. De la hebra de arriba elijo los 3 ultimos del vector y el primero del inserto, los 4 ultimos del inserto (que habra querido decir ?)
3. El primer directo del vector empieza con la secuencia de la enzima y luego los 4N finales del inserto seguido de lo que siga en la secuencia de la hebra de arriba

El primer reverse del vector empieza con la secuencia de la enzima y luego los 4N complementarios a los 4N que esta formado por los 4 del vector y el 1ero del inserto, ademas de complementarios e inversos

# Gibson
sin enzimas de restriccion, hacemos que el vector y el amplicon de pcr tengan extremos compatibles

**Secuencias que quiero**

5’ CCA TTA GGC TAC GCT ACC ATG *GTG CCC GAG … GTG GGC* CAC CAC CAC 3’
3’ GGT AAT CCG ATG CGA TGG TAC *CAC GGG CTC … CAC GCG* GGTG GTG GTG 5’

**Primers**
**Vector**
Primer forward:

5’ CAC CAC CAC CAC CAC CAC CAC 3’

Primer reverse:

5’ GGT AGC GTA GCC TAA TGG 3’

Para el primer forward del inserto copiar los N mas cercanos del inserto y luego los del inserto (hebra de arriba)

**Para el inserto**
agregamos en el extremo 5’ nucleotidos complementarios a los extremos del vector

Primer forward:

5’ CCA TTA GGC TAC GCT ACC ATG GTG CCC GAG 3’

Primer reverse:

5’ GTG GTG GTG GCG CAC  3’

**Vector despues de PCR**

5’ CCA TTA GGC TAC GCT ACC ATG … CAC CAC CAC 3’

**Inserto en PCR**

5’ GTG CCC GAG … GTG CGC 3’
3’ …………………………CAC GCG GTG GTG GTG 5’

5’ ATG GTG CCC GAG 3’
3’ ……..CAC GGG CTC … CAC GCG 5’

****