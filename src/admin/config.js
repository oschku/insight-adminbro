const resources = require('./resources');
const AdminBro = require("admin-bro");

module.exports = {
  resources,
  branding: {
    logo: 'https://images.vainu.io/5b3dd3511793e606917b3d86_logo.svg',
    companyName: 'Growflow Oy',
  },
  locale: {
    translations: {
      properties: {
        formContent: 'Sisältö (Uutisartikkeli)',
        timestamp: 'Julkaisuhetki (Uutisartikkeli)',
        picUrl: 'Kuvan lähde (URL)' ,
        formTitle: 'Otsikko',
        formUrl:'Kyselyn Id mihin kortti viittaa',
        benefit: 'Kupongin arvo ( Etukortti )' ,
        dateStart: 'Voimaantulo pvm ( Etukortti )',
        valid: 'Voimassa pvm asti ( Etukortti )',
        benefitType: 'Tyyppi ( Etukortti )',
        formText: 'Kuvaus',
        resetHours: 'Uusiutumisaika (Kysely)',
        minutes: 'Pisteet (Kysely)',
        kyselyTitle: 'Otsikko',
        pointCount: 'Pisteet',
        'kysymykset.type': 'Kyselytyyppi',
        'kysymykset.num': 'Numero',
        'kysymykset.group': 'Ryhmä',
        'kysymykset.title': 'Kysymys (otsikko)',
        'kysymykset.choices': 'Vastausvaihtoehdot (valitse yksi/usea)',
        'kysymykset.min': 'Arvosteluasteikon minimi',
        'kysymykset.max': 'Arvosteluasteikon maksimi'
      },
      labels: {
        Vouchers: 'Lahjakortit - myönnetyt',
        Surveys: 'Kyselyt',
        VoucherRegister: 'Lahjakorttirekisteri',
        RouletteItems: 'Ruletti objektit',
        Boosts: 'Nostot'
      },
    },
  },
  dashboard: {
    component: AdminBro.bundle('./DashboardComponent') 
  },
  rootPath: "/admin",
};