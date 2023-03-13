# Medium-post-integracao-api

Medium post - Projeto simples com html, csss e javascript acessando uma API externa para fazer pesquisas de forma dinâmica. 

# Explicação

O HTML consiste em uma estrutura básica com um título, um campo de pesquisa (input), um botão e um contêiner (div) para exibir os resultados da pesquisa.

O CSS estiliza a página, definindo a fonte, margens, preenchimentos e cores.

O JavaScript lida com a interação do usuário e a busca na API. 

Ele começa obtendo os elementos da página usando document.getElementById().

Em seguida, adiciona um evento de clique ao botão de pesquisa usando addEventListener(). 

Quando o usuário clica no botão, ele extrai o valor do campo de pesquisa usando .value e envia uma solicitação HTTP para a API do GitHub usando fetch(). 

A resposta da API é convertida em formato JSON usando .json() e, em seguida, o resultado é exibido na página. 

A resposta é iterada usando .forEach() para exibir o nome completo do repositório, descrição e um link para o repositório em si.
