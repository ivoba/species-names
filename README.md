# species-names [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url]

***WIP***

1. crawler for species names
2. data set for species names
3. api for species names

## Usage

### Crawler
The crawler retrieves Species names from https://species.wikimedia.org.

Crawling from Genus:

    node crawler.js -g Brachypteryx

Crawling from Familia:

    node crawler.js -f Muscicapidae

parse structures:

    Ordo -> Cladi -> Familia
         -> Subordo -> Infraorides -> Suberfamilia -> Familia
                    -> Parvordo -> Superfamilia
                                -> Familiae incertae sedis
                                -> Genera incertae sedis
         -> Familia -> Subfamiliae -> Tribus -> Genera
         -> Familiae (4 + 1†): -> Genus
         -> Familiae (3)


### Dataset
Species names are stored in json format in one file per genera.  

#### Todo
- init test for client, mock client
- json-schema
- licence data-set under Creative Commons Attribution-ShareAlike License;
- synonyms: Turnix sylvaticus: 
                  
                  {
                    "lang": "en",
                    "name": "Common Buttonquail, Kurrichane Buttonquail, Small Buttonquail, Andalusian Hemipode"
                  }

#### Docker
- run: docker-compose up
- login: docker exec -it species-names bash

run commands in container

## License

© [Ivo Bathke]()


[travis-image]: https://travis-ci.org/ivoba/species-names.svg?branch=master
[travis-url]: https://travis-ci.org/ivoba/species-names
[coveralls-image]: https://coveralls.io/repos/ivoba/species-names/badge.svg
[coveralls-url]: https://coveralls.io/r/ivoba/species-names
