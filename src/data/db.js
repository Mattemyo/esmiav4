import tjockskinka from '../images/tjockskinka.jpg';
import redondoIglesias from '../images/redondoIglesias.jpg';
import korvis from '../images/korvis.jpg';
import korv from '../images/korv.jpg';
import ost from '../images/ost.jpg';
import mahon from '../images/mahon.jpg';
import altoBello from '../images/altoBello.jpg';
import mancebo from '../images/mancebo.jpg';
import paellaValenciana from '../images/paellaValenciana.JPG';
import mariscoPaella from '../images/mariscoPaella.JPG';
import idiazabal from '../images/idiazabal.jpg';
import tortilla from '../images/tortilla.jpg';
import serrano500 from '../images/serrano500.jpg';
import essenbog500 from '../images/essenbog500.jpg';
import serrano5 from '../images/serrano5.jpg';

// catering
import emptyPaella from '../images/catering/empty-paella.jpg';
import onlyPaella from '../images/catering/only-paella.jpg';
import paellaFill from '../images/catering/paella-fill.jpg';
import paellaMiguel from '../images/catering/paella-miguel.jpg';
import paellaMoreFill from '../images/catering/paella-more-fill.jpg';
import shellfish from '../images/catering/shellfish.jpg';
import doubleShellfish from '../images/catering/double-shellfish.jpg';

const products = {
  skinka: [{
    name: 'Serranoskinka skivad 500g',
    image: serrano500,
    price: '115 kr / st',
    description:
      'Över 15 månader lufttorkad. Lätt att hantera och servera. Tips: på brödskiva med tomat och olivolja. 6 brickor per låda. Ref.706022'
  },
  {
    name: 'Serranoskinka 5kg vac. benfri',
    image: serrano5,
    price: '170 kr / kg',
    description:
      'Över 15 månader lufttorkad. Utan svål och benfri för att skära direkt i skärmaskin. 2 st per låda. Ref.22120'
  },
  {
    name: 'Chorizo iberico skivad 500g',
    image: tjockskinka,
    price: '115 kr / st',
    description:
      'Lufttorkad 4 månader. Runt 6 centimeter i diamter. Tips: med oliver och rostad paprika. 6 brickor per låda. Ref.703422'
  },
  {
    name: 'Salchichon iberico skivad 500g',
    image: tjockskinka,
    price: '115 kr / st',
    description:
      'Lufttorkad 4 månader. Lösa skivor att placera på fat. Tips: med grillad aubergine. 6 brickor per låda. Ref.703522'
  },
  {
    name: 'Ibericoskinka skivad 500g',
    image: redondoIglesias,
    price: '370kr / st',
    description:
      'Lagrad 30 månader, utan svål. Tips: med rostade mandlar eller oliver. 6 brickor per låda. Ref.701022'
  },
  {
    name: 'Ibericoskinka vac. benfri 30 mån 5kg',
    image: redondoIglesias,
    price: '640 kr / kg',
    description: 'Utan svål och putsad. Skär direkt i skärmaskin. 1 st per låda. Ref.701022'
  },
  {
    name: 'Iberico essenbogskinka skivad 500g',
    image: essenbog500,
    price: '265 kr / st',
    description:
      'Lagrad 2 år plattare format. Serveras med soltorkade tomater. 6 brickor per låda. Ref.702122'
  }],
  //  chorizoes
  chorizo: [{
    name: 'Chorizo fresco grill 70g',
    image: korvis,
    price: '89 kr / kg',
    description:
      'Färsk chorizo korv lagrad 1 vecka. Perfekt till grillen. Serveras genomstekt eftersom den är rå. Baserad på fläskkött, sött paprikapulver, kryddor och salt. 15 paket per låda. Varje paket innehåller 6 korvar (70g per korv).'
  },
  {
    name: 'Chorizo extra cular påläggschorizo 1,8kg',
    image: korv,
    price: '128 kr / kg',
    description: 'Lufttorkad chorizo 1 månad. Hel i bit 1,8kg. Perfekt till smörgåsar. 4 st / låda.'
  },
  {
    name: 'Chorizo casero natural picante 450g',
    image: korv,
    price: '135 kr / kg',
    description:
      'U-formad chorizo. Pikant inslag av bittert och sött paprikapulver. Tips: serveras direkt i tjocka skivor eller i gryta. 20 st / låda.'
  }],
  // KOLONIAL
  kolonial: [{
    name: 'Olivolja',
    image: korv,
    price: '330 kr / kg',
    description:
      'Ibericoskinkan är lufttorkad i 30 månader. Gris av svart ras. Den avlas i naturen med ekollon och andra örter. 6 månader innan slakt utfodras grisarna med vanligt foder. 7,5kg /st.'
  },
  {
    name: 'Piquillo Paprika',
    image: korv,
    price: '450 kr / kg',
    description:
      'Ibericoskinka 30 månaders lufttorkad. Den svarta grisrasen avlas i naturen med ekollon och örter. Senaste månader äter den vanlig grisföda, recebo. Vikt i vacuumfrp.: 4-5kg /st.'
  },
  {
    name: 'Chorizo och Salami Iberico',
    image: korv,
    price: '175 kr / kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    name: 'Serranoskinka reserva 14 mån',
    image: korv,
    price: '160 kr / kg',
    description:
      'Chorizo och salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    name: 'Serranoskinka 500g skivad',
    image: korv,
    price: '235 kr / kg',
    description:
      'Serranoskinka skivad 500gr. Lätt att dra varje skiva med mellanlägg. Skinkan från grishona med 11 månaders lufttorkning. Linda den med dadlar, runt getost, servera med oliver. Förpackning: 5 st x 500g = 2,5kg/kolli.'
  }],
  // OSTAR
  ostar: [{
    name: 'Manchego Altobello vac. 3,3 kg / st',
    image: altoBello,
    price: '195 kr / kg',
    amount: '2 st / låda',
    description: 'Lagrad 1 år med oätbart skal. Serveras gärna i trianglar med mandlar'
  },
  {
    name: 'Getost färsk vak. 1,1 kg / st',
    image: ost,
    amount: '6 st / låda',
    price: '155kr / kg',
    description: 'Lagrad 20 dagar utan skal. Toledo. Tips: Tjocka trianglar med paprike'
  },
  {
    name: 'Getost lagrad i rödvin vak. 2,5 kg / st',
    image: ost,
    price: '170 kr / kg',
    amount: '2 st / låda',
    description: 'Lagrad 40 dagar med rödvinsskal. Murcia. Tips: Tärningar med ansjovis'
  },
  {
    name: 'Mahon komjölksost lagrad 3,4 kg / st',
    image: mahon,
    price: '165 kr / kg',
    amount: '2 st / låda',
    description: 'Lagrad 1 mån med orange skal. Menorca. Tips: Tjocka skivor med cocktailtomater'
  },
  {
    name: 'Idiazabal',
    image: idiazabal,
    price: '205 kr / kg',
    amount: '2 st / låda',
    description: 'Lagrad 6 mån med oätbart skal. Tunna skivor med räkor. Baskien'
  },
  {
    name: 'Mancebo',
    image: mancebo,
    price: '155 kr / kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  },
  {
    name: 'Manchego fårost 6 mån',
    image: altoBello,
    price: '195 kr / kg',
    description:
      'Chorizo och Salchichon (salame) Iberico charkuteri. Mycket smak och doft av svart den svarta grisrasen Iberico. Serveras kallskuret på fat med paprika, oliver mm. Förpackning: 1,2kg st. 6 st/kolli = 8kg'
  }],
  // PAELLA/Catering
  catering: [{
    name: 'Paella Valenciana',
    image: paellaValenciana,
    price: '180 kr / person',
    description:
      'Paella baserad på färska råvaror som kyckling, skärbönor och elefantbönor. Serveras med citronklyftor och bröd'
  },
  {
    name: 'Paella med skaldjur',
    image: mariscoPaella,
    price: '',
    description: 'Paella gjord på skaldjur'
  },
  {
    name: 'Tilltugg - Spansk Tortilla',
    image: tortilla,
    price: '',
    description: ''
  },
    {
    // name: 'Paella',
    image: shellfish,
    price: '',
    description: ''
  },
  {
    // name: 'Paella',
    image: doubleShellfish,
    price: '',
    description: ''
  },
  {
    // name: 'Paella',
    image: emptyPaella,
    price: '',
    description: ''
  },
  {
    // name: 'Paella',
    image: onlyPaella,
    price: '',
    description: ''
  },
  {
    // name: 'Paella',
    image: paellaFill,
    price: '',
    description: ''
  },
  {
    // name: 'Paella',
    image: paellaMiguel,
    price: '',
    description: ''
  },
  {
    // name: 'Paella',
    image: paellaMoreFill,
    price: '',
    description: ''
  }]
};

export default products;
