// Dados iniciais dos locais (coordenadas aproximadas: confira e corrija pelo botão Editar)
const MATS=["Papel","Plástico","Metal","Vidro","Eletrônicos","Óleo de cozinha","Entulho e móveis"];
const EQ=["Papel","Plástico","Metal","Óleo de cozinha","Eletrônicos"];
const SEED=[
{id:"e1",n:"Posto E+ – Sede Equatorial",b:"Coqueiro",a:"Av. Augusto Montenegro, Km 8,5",h:"Seg–Sex 7h30–11h30 e 13h–17h · Sáb 8h–12h",d:"Posto de reciclagem da Equatorial: o material entregue gera crédito na conta de luz.",m:EQ,lat:-1.355,lng:-48.439,ap:1},
{id:"e2",n:"Posto E+ – Assaí Atacadista",b:"Coqueiro",a:"Rod. Mário Covas, 69",h:"Seg–Sex 8h–12h e 13h–17h · Sáb 8h–12h",d:"Posto de reciclagem da Equatorial no Assaí.",m:EQ,lat:-1.334,lng:-48.395,ap:1},
{id:"e3",n:"Posto E+ – Parque Shopping",b:"Parque Verde",a:"Av. Augusto Montenegro, 4300",h:"Seg–Sex 10h–13h e 14h–19h · Sáb 10h–14h",d:"Posto de reciclagem no estacionamento do Parque Shopping Belém.",m:EQ,lat:-1.33,lng:-48.437,ap:1},
{id:"e4",n:"Posto E+ – Aeroporto de Belém",b:"Val-de-Cães",a:"Av. Júlio César, s/n",h:"Seg–Sex 8h–12h e 13h–17h · Sáb 8h–12h",d:"Posto de reciclagem no Aeroporto Internacional de Belém.",m:EQ,lat:-1.3792,lng:-48.4763,ap:1},
{id:"e5",n:"Ecoponto Parque São Joaquim",b:"São Joaquim",a:"Rua Sol Nasce Para Todos c/ Tv. Alferes Costa",h:"",d:"Ecoponto da Prefeitura para descarte fora da coleta programada.",m:["Papel","Plástico","Eletrônicos","Entulho e móveis"],lat:-1.41,lng:-48.45,ap:1},
{id:"e6",n:"Ecoponto Porto Futuro",b:"Reduto",a:"Complexo Porto Futuro",h:"",d:"Ecoponto entregue pela Semas.",m:[],lat:-1.4495,lng:-48.498,ap:1},
{id:"e7",n:"Ponto de coleta – Praça da República",b:"Campina",a:"Praça da República",h:"",d:"Ponto de coleta seletiva no centro.",m:[],lat:-1.4527,lng:-48.4905,ap:1},
{id:"e8",n:"Ponto de coleta – Feira Bandeira Branca",b:"Marco",a:"Av. Almirante Barroso c/ Dr. Freitas",h:"",d:"Ponto de coleta seletiva na feira.",m:[],lat:-1.431,lng:-48.462,ap:1},
{id:"e9",n:"Ecoponto Parque Estadual do Utinga",b:"Utinga",a:"Parque Estadual do Utinga",h:"",d:"Ecoponto entregue pela Semas.",m:[],lat:-1.43,lng:-48.43,ap:1},
{id:"e10",n:"Ecoponto Usina da Paz da Cabanagem",b:"Cabanagem",a:"Usina da Paz – Cabanagem",h:"",d:"Ecoponto inaugurado pela Semas.",m:[],lat:-1.365,lng:-48.43,ap:1},
{id:"e11",n:"Ecoponto Municipal da Sacramenta",b:"Sacramenta",a:"Av. Pedro Álvares Cabral, em frente ao Casota, próximo à Av. Júlio César",h:"Seg–Sex 8h–19h · Sáb 8h–12h",d:"Ecoponto da Prefeitura de Belém. Recebe restos de obras, móveis, colchões, eletrodomésticos, papel, papelão, plástico, vidro, metais, pneus e resíduos eletrônicos. Limite informado pela Prefeitura: até 1 m³ por pessoa ao dia. Não recebe lixo doméstico comum. Fonte: Agência Belém. Coordenada aproximada; confirme a posição exata no mapa antes de usar como navegação.",m:["Papel","Plástico","Metal","Vidro","Eletrônicos","Entulho e móveis"],lat:-1.4140,lng:-48.4850,ap:1}];
