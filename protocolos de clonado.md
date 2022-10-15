# Enzimas de restriccion

1. [[miniprep]] : Extraccion de DNA plasmidico de un cultivo bacteriano

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

- CCA TTA GGC TAC GGT AC                 GA TCC AGA TCT 
- GGT AAT CCG ATG CCA TGG TAC                 G TCT AGA 

Inserto → No tiene sitio de corte para NcoI y BamHI, tenemos que agregarlos usando primers

Las secuencias siempre se agregan en 5’ y como el vector ya tiene un STOP y un ATG no le tenemos que agregar los del inserto

**Primers**
Forward
   5’ AAA AC|C ATG GNN GGTG CCC GAG 3’
   
Reverse
   5’ G|GA TCC GCG CAC GTC GAA 3’

**Secuencias del inserto**

5’ GTG CCC GAG CAA … AGG TTC GAG GTG CGC 3’
--------------------------------AAG CTG CAC GCG CCT AGG 5’

5’ ATG GNN GAG CC CAG 3’
5’ -----------C