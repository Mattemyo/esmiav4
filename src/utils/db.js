const images = require.context('../images', true);

const products = [
  // {
  //   name: "Iberico ben, 30 mån",
  //   img: images.tapasJamon,
  //   price: "330kr/kg",
  //   description:
  //     "Ibericoskinkan är lufttorkad i 30 månader. Gris av svart ras. Den avlas i naturen med ekollon och andra örter. 6 månader innan slakt utfodras grisarna med vanligt foder. 7,5kg /st."
  // },
  {
    type: 'ham',
    name: 'Iberico vac., 30 mån',
    img: images.tjockskinka,
    price: '550kr/kg',
    description:
      'Ibericoskinka 30 månaders lufttorkad. Den svarta grisrasen avlas i naturen med ekollon och örter. Senaste månader äter den vanlig grisföda, recebo. Vikt i vacuumfrp.: 4-5kg /st.'
  },
  {
    type: 'ham',
    name: 'Serranoskinka reserva 14 mån',
    img: images.tjockskinka,
    price: '175kr/kg',
    description:
      'Chorizo och salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'ham',
    name: 'Serranoskinka 500g skivad',
    img: images.tjockskinka,
    price: '235kr/kg',
    description:
      'Serranoskinka skivad 500g. Lätt att dra varje skiva med mellanlägg. Skinkan kommer från grishona med 11 månaders lufttorkning. Serveras med med oliver eller dadlar. Förpackning: 5 st x 500g = 2,5kg/kolli.'
  },
  {
    type: 'ham',
    name: 'Redondo Iglesias 500g skivad',
    img: images.redondoIglesias,
    price: '235kr/kg',
    description:
      'Serranoskinka skivad 500g. Lätt att dra varje skiva med mellanlägg. Skinkan från grishona med 11 månaders lufttorkning. Linda den med dadlar, runt gettjockskinka, servera med oliver. Förpackning: 5 st x 500g = 2,5kg/kolli.'
  },
  {
    type: 'chorizo',
    name: 'Chorizo och salami Iberico',
    img: images.korvis,
    price: '175kr/kg',
    description:
      'Chorizo och salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'chorizo',
    name: 'Chorizo färsk grill',
    img: images.korv,
    price: '89kr/kg',
    description:
      'Chorizo färsk 70 gram. Paprikakorv för Bbq och stekning. Chorizo casero lagrad 350 gram. Picante smak som är mild eftersom det innehåller söt paprika & bitter paprikapulver. Perfekt till grytan eller som kallskuret. Serveras med tomatsås, lök, potatis.6,5kg per kolli.'
  },
  {
    type: 'kolonial',
    name: 'Olivolja',
    img: images.korv,
    price: '330kr/kg',
    description:
      'Ibericoskinkan är lufttorkad i 30 månader. Gris av svart ras. Den avlas i naturen med ekollon och andra örter. 6 månader innan slakt utfodras grisarna med vanligt foder. 7,5kg /st.'
  },
  {
    type: 'kolonial',
    name: 'Piquillo Paprika',
    img: images.korv,
    price: '450kr/kg',
    description:
      'Ibericoskinka 30 månaders lufttorkad. Den svarta grisrasen avlas i naturen med ekollon och örter. Senaste månader äter den vanlig grisföda, recebo. Vikt i vacuumfrp.: 4-5kg /st.'
  },
  {
    type: 'kolonial',
    name: 'Chorizo och Salami Iberico',
    img: images.korv,
    price: '175kr/kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'kolonial',
    name: 'Serranoskinka reserva 14 mån',
    img: images.korv,
    price: '160kr/kg',
    description:
      'Chorizo och salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'kolonial',
    name: 'Serranoskinka 500g skivad',
    img: images.korv,
    price: '235kr/kg',
    description:
      'Serranoskinka skivad 500gr. Lätt att dra varje skiva med mellanlägg. Skinkan från grishona med 11 månaders lufttorkning. Linda den med dadlar, runt getost, servera med oliver. Förpackning: 5 st x 500g = 2,5kg/kolli.'
  },
  {
    type: 'cheese',
    name: 'Manchego fårost 6 mån',
    img: images.ost,
    price: '195kr/kg',
    description:
      'Fårost med ursprungsbeteckning Altobello. Skär upp den i trianglar, fyrkantiga pinnar eller tärningar. Fikon, druvor, passionsfrukt, guayaba och kvittens gelé kan passa bra till manchego. Förpackning: 3,5 kg per st, 2 stycken i kolli. = 7kg.'
  },
  {
    type: 'cheese',
    name: 'Getost färsk, 1 mån utan skal',
    img: images.ost,
    price: '155kr/kg',
    description:
      'Getost färsk med enbart getmjölk 1 månad lagrad. Går att marinera med olivolja, dragon och timjan. Täck den med piquillo paprika och spetsa med en oliv. Linda in den med serranoskinka och värm i salamander. Förpackning: 1 kg/st. 6 st/kolli = 7 kilo.'
  },
  {
    type: 'cheese',
    name: 'Mahon komjölksost mellanl.',
    img: images.mahon,
    price: '175kr/kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'cheese',
    name: 'Idiazabal',
    img: images.idiazabal,
    price: '175kr/kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'cheese',
    name: 'Mancebo',
    img: images.mancebo,
    price: '155kr/kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'cheese',
    name: 'Manchego fårost 6 mån',
    img: images.altoBello,
    price: '195kr/kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    type: 'paella',
    name: 'Paella från Valencia',
    img: images.paellaValenciana,
    price: '330kr/kg',
    description:
      'Ibericoskinka är lufttorkad i 30 månader. Gris av svart ras. Den avlas i naturen med ekollon och andra örter. 6 månader innan slakt utfodras grisarna med vanligt foder. 7,5kg /st.'
  },

  {
    type: 'paella',
    name: 'Skaldjurspaella',
    img: images.mariscoPaella,
    price: '175kr/kg',
    description: 'Paella gjord på skaldjur'
  },
  {
    type: 'paella',
    name: 'Tilltugg - Spansk Tortilla',
    img: images.paellaSmiley,
    price: '',
    description:
      'Ibericoskinka 30 månaders lufttorkad. Den svarta grisrasen avlas i naturen med ekollon och örter. Senaste månader äter den vanlig grisföda, recebo. Vikt i vacuumfrp.: 4-5kg /st.'
  },
  {
    type: 'paella',
    name: 'Serranoskinka 500g skivad',
    img: images.paellaspecialistenbgr,
    price: '',
    description: 'Ni är även välkomna att hyra utrustning för att laga paella'
  }
];

export default products;
