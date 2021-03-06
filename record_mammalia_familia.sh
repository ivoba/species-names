#!/bin/bash
declare -a arr=(
  "Cynodontia"
  "Canidae"
  "Nandiniidae"
  "Prionodontidae"
  "Felidae"
  "Herpestidae"
  "Eupleridae"
  "Hyaenidae"
  "Viverridae"
  "Balaenidae"
  "Balaenopteridae"
  "Eschrichtiidae"
  "Neobalaenidae"
  "Delphinidae"
  "Iniidae"
  "Kogiidae"
  "Lipotidae"
  "Monodontidae"
  "Phocoenidae"
  "Physeteridae"
  "Platanistidae"
  "Pontoporiidae"
  "Ziphiidae"
)

for i in "${arr[@]}"
do
  bin/species-names-crawler -c Mammalia -f $i
done
# Familiae:
# Pteropodidae (findet nix)
#
# bin/species-names-crawler -c Mammalia -o Cingulata
# Chiroptera
# Afrosoricida
# Artiodactyla
# Dasyuromorphia
# Dermoptera
# Didelphimorphia
# Diprotodontia
# Erinaceomorpha
# Hyracoidea
# Lagomorpha
# Macroscelidea (problem)
# Microbiotheria
# Monotremata
# Notoryctemorphia
# Paucituberculata
# Peramelemorphia
# Perissodactyla
# Pholidota
# Pilosa
# Primates (problem)
# Proboscidea
# Rodentia
# Scandentia
# Sirenia
# Soricomorpha
# Tubulidentata
