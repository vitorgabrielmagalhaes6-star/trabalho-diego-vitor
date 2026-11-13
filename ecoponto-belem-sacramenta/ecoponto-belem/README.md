# EcoPonto Belém

Localizador de pontos de coleta seletiva com mapa OpenStreetMap + Leaflet, busca, filtro por material e cadastro (criar, editar, excluir) de locais com coordenadas.

## Como rodar no VS Code
1. Abra a pasta `ecoponto-belem` no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html` > **Open with Live Server**. O mapa não precisa de chave de API.

## Mapa gratuito
- O mapa é exibido com Leaflet e os tiles do OpenStreetMap.
- Não precisa criar conta nem chave de API.
- Ao publicar o site ou receber muito tráfego, respeite a política de uso dos servidores de tiles do OpenStreetMap: https://operations.osmfoundation.org/policies/tiles/

## Arquivos
- `index.html` – estrutura da página
- `style.css` – visual (responsivo)
- `data.js` – os 10 locais iniciais (coordenadas aproximadas: confira em Editar)
- `app.js` – mapa, lista, busca, filtros e cadastro
- `index.html` – estrutura da página e carregamento do Leaflet

## Observações
- Os locais ficam salvos no navegador (localStorage). O botão "Restaurar dados" volta aos 10 originais.
- O mapa depende de conexão com a internet para carregar os tiles do OpenStreetMap.
- Fontes dos dados: reportagens (O Liberal, Diário do Pará, DOL), Equatorial e trabalhos da UFPA (nov/2026). Confirme horários antes de ir.


### Cadastro do Ecoponto Municipal da Sacramenta

Foi acrescentado o Ecoponto da Avenida Pedro Álvares Cabral, em frente ao Casota, no bairro da Sacramenta. Endereço, materiais aceitos e horário foram baseados nas publicações da Agência Belém:
- https://agencia.belem.pa.gov.br/coleta-programada-combate-descarte-irregular-de-entulhos-em-belem/
- https://agencia.belem.pa.gov.br/dia-do-meio-ambiente-prefeitura-de-belem-celebra-sucesso-do-ecoponto/

A coordenada do marcador está identificada como aproximada (`ap: 1`) e deve ser conferida/ajustada no mapa antes de apresentar o projeto como localização precisa.
