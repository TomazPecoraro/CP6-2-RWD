import { NextResponse } from "next/server";

const usuarios = [
  {
    "id": 1,
    "nome": "Clio Thomas",
    "email": "tellus.suspendisse@icloud.edu",
    "senha": "LET64PTD9PG",
  },
  {
    "id": 2,
    "nome": "Charissa Thomas",
    "email": "mauris.eu.elit@outlook.ca",
    "senha": "MFN63URK3PH",
  },
  { "id": 3,
    "nome": "Xena Myers", 
    "email": "erat@icloud.ca",
    "senha": "ODQ54NBH7OQ" },
  {
   "id": 4,
    "nome": "Yoshi Burnett",
    "email": "commodo.at@hotmail.com",
    "senha": "ZSE46OJK3LE",
  },
  {
    "id": 5,
    "nome": "Daniel Newton",
    "email": "magna@outlook.org",
    "senha": "JRC23XGL5RB",
  },
  {
    "id": 6,
    "nome": "Noelle Patel",
    "email": "eget.dictum@yahoo.net",
    "senha": "FJP30XWP4JK",
  },
  {
    "id": 7,
    "nome": "Abraham Miller",
    "email": "nonummy.ipsum@outlook.ca",
    "senha": "JFH85FCS9NI",
  },
  {
    "id": 8,
    "nome": "Simon Beach",
    "email": "et.malesuada@icloud.com",
    "senha": "KUT27THG6RS",
  },
  {
    "id": 9,
    "nome": "Amir Joseph",
    "email": "lobortis.class.aptent@aol.net",
    "senha": "AWD31CAH5TV",
  },
  {
    "id": 10,
    "nome": "Colette Blair",
    "email": "ut.sagittis.lobortis@yahoo.com",
    "senha": "STX57RFZ2LY",
  },
  {
    "id": 11,
    "nome": "Melvin Stephenson",
    "email": "tincidunt@icloud.com",
    "senha": "IBF77PKQ0ZT",
  },
  {
    "id": 12,
    "nome": "Cassandra Duke",
    "email": "adipiscing@google.org",
    "senha": "LWT37GZC7YS",
  },
  {
    "id": 13,
    "nome": "Edward Bauer",
    "email": "tristique.senectus.et@aol.com",
    "senha": "RSQ51LKN8HP",
  },
  {
    "id": 14,
    "nome": "Mufutau Rocha",
    "email": "erat.vitae.risus@google.com",
    "senha": "NKF16MRB6GV",
  },
  {
    "id": 15,
    "nome": "Paul Ferguson",
    "email": "id@icloud.com",
    "senha": "BEH40RHF4QF",
  },
  {
    "id": 16,
    "nome": "Bert Hansen",
    "email": "mattis.semper@google.org",
    "senha": "WDO31COF2IB",
  },
  {
    "id": 17,
    "nome": "Chanda Dunlap",
    "email": "turpis.in@yahoo.edu",
    "senha": "JMC89CHA3TH",
  },
  {
    "id": 18,
    "nome": "Morgan Bates",
    "email": "cum@protonmail.org",
    "senha": "SHJ59PVE7KO",
  },
  {
    "id": 19,
    "nome": "Adrian Hutchinson",
    "email": "pretium@google.net",
    "senha": "GIE49WRR3EI",
  },
  {
    "id": 20,
    "nome": "Kelsie Howard",
    "email": "laoreet.posuere@yahoo.edu",
    "senha": "SWU67YWT8NL",
  },
  {
    "id": 21,
    "nome": "Kennan Johnson",
    "email": "lacus.ut.nec@google.net",
    "senha": "JIT36KTV3WV",
  },
  {
    "id": 22,
    "nome": "Solomon Sanders",
    "email": "dictum.ultricies@yahoo.org",
    "senha": "WSP47IIB9MK",
  },
  {
    "id": 23,
    "nome": "Amal Chen",
    "email": "eu.lacus.quisque@aol.net",
    "senha": "KZJ67IFH5YP",
  },
  {
    "id": 24,
    "nome": "Kylee Kidd",
    "email": "viverra.maecenas@outlook.net",
    "senha": "ZQQ65HFK8DJ",
  },
  {
    "id": 25,
    "nome": "Tiger Boone",
    "email": "in.aliquet.lobortis@outlook.edu",
    "senha": "IXE57VNS5LC",
  },
  {
    "id": 26,
    "nome": "Ryan Stark",
    "email": "molestie@hotmail.couk",
    "senha": "WXQ71BTC2SX",
  },
  {
    "id": 27,
    "nome": "Plato Munoz",
    "email": "aliquam.erat@icloud.couk",
    "senha": "TFQ42UQK0JG",
  },
  {
    "id": 28,
    "nome": "Cairo Hopkins",
    "email": "dignissim.lacus@icloud.ca",
    "senha": "RJU65CUM9QL",
  },
  {
    "id": 29,
    "nome": "Yasir Cotton",
    "email": "a.magna@aol.ca",
    "senha": "IFQ16ETG7NT",
  },
  {
    "id": 30,
    "nome": "Cynthia Gross",
    "email": "diam.pellentesque@protonmail.org",
    "senha": "HKU28RXX4FF",
  },
  {
    "id": 31,
    "nome": "Avram Warner",
    "email": "purus.gravida.sagittis@google.net",
    "senha": "EEQ83SOI1HJ",
  },
  {
    "id": 32,
    "nome": "Nash Blair",
    "email": "fermentum.fermentum.arcu@hotmail.com",
    "senha": "SJR08DJL7WP",
  },
  {
    "id": 33,
    "nome": "Justin Estes",
    "email": "sed@google.edu",
    "senha": "CLP16QLV2UV",
  },
  {
    "id": 34,
    "nome": "Cassady Munoz",
    "email": "felis.adipiscing.fringilla@yahoo.com",
    "senha": "GMK69VIQ4GW",
  },
  {
    "id": 35,
    "nome": "Hiram Mckenzie",
    "email": "bibendum.ullamcorper@icloud.edu",
    "senha": "LOF14EOI7MO",
  },
  {
    "id": 36,
    "nome": "Aspen Robinson",
    "email": "mauris@yahoo.net",
    "senha": "UJA26XHS6BK",
  },
  {
    "id": 37,
    "nome": "Gemma Knowles",
    "email": "non.lacinia.at@hotmail.net",
    "senha": "PIL18AYQ5MR",
  },
  {
    "id": 38,
    "nome": "Serina Lancaster",
    "email": "odio@icloud.com",
    "senha": "NMI08BNL9WR",
  },
  {
    "id": 39,
    "nome": "Delilah Frazier",
    "email": "cras.vulputate.velit@google.couk",
    "senha": "UIN04XJK5BL",
  },
  {
    "id": 40,
    "nome": "Amity Stuart",
    "email": "lacus.aliquam@aol.net",
    "senha": "WRG36DBH3MI",
  },
  {
    "id": 41,
    "nome": "Madonna Harrington",
    "email": "arcu.eu@google.couk",
    "senha": "SDD43YRF7EQ",
  },
  {
    "id": 42,
    "nome": "Clementine Robles",
    "email": "mi@yahoo.couk",
    "senha": "KKT85XOF2ZM",
  },
  {
    "id": 43,
    "nome": "Shelly Gardner",
    "email": "dapibus.rutrum@outlook.com",
    "senha": "NHD95USY6YJ",
  },
  {
    "id": 44,
    "nome": "Lacy Gilliam",
    "email": "eget.ipsum@hotmail.ca",
    "senha": "RQF40FSA2MS",
  },
  {
    "id": 45,
    "nome": "Jennifer Patterson",
    "email": "donec@aol.com",
    "senha": "OHV14YKB6JR",
  },
  {
    "id": 46,
    "nome": "Kathleen Petersen",
    "email": "curabitur@aol.net",
    "senha": "YGU31JNU7PO",
  },
  {
    "id": 47,
    "nome": "Martha Ware",
    "email": "eget.lacus@google.ca",
    "senha": "KTN68PWV1RV",
  },
  {
    "id": 48,
    "nome": "Neil Ferguson",
    "email": "malesuada.augue@yahoo.org",
    "senha": "IMB83XJL4UQ",
  },
  {
    "id": 49,
    "nome": "Rahim Rodriquez",
    "email": "ipsum.cursus@icloud.ca",
    "senha": "LJI67PQO5ZS",
  },
  {
    "id": 50,
    "nome": "Clark Leach",
    "email": "urna.suscipit@icloud.com",
    "senha": "MEW07SVI9JU",
  },
];

export async function GET(request, { params }) {
  const id = params.id;

  if (id > 0 && id <= usuarios.length) {
    return NextResponse.json(usuarios.find((usuario) => usuario.id == id));
  } else {
    return id == 0 ? NextResponse.json(usuarios): NextResponse.redirect("http://localhost:3000/error");
  }
}
