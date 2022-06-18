# HACKATON CAMPUS PARTY GOIÁS 2022 - Desafio RNP

Live: https://eduplay-cpgoias22.netlify.app/

### Objetivos

Apresentar funcionalidades para melhorar questões associadas a acessibilidade para a plataforma Eduplay (https://eduplay.rnp.br/portal/home)




## Features Implementadas

### :star: Aplicação de filtros Nativos para melhorar a visibilidade de portadores de daltonismo/color blind

Implementação de três filtros para melhorar a visualização de portadores de daltonismo, que funciona alterando um pouco a cor original para a tornar mais diferenciável.

### :star: Navegação por Voz

Implementação de navegação por voz que pode ser acionada clicando para iniciar e clicando novamente para parar a captura de voz ou simplesmente mantendo pressionado a tecla de espaço enquanto se fala o que se deseja buscar.

Nesse caso o foco automático no carregamento da página se inicia no botão para falar, não necessitando de navegação por teclado para se chegar ao botão de captura de voz

### Ajuste de tamanho de fonte personalizada baseada na demanda pessoal

Diferentemente da maioria dos ajustes de tamanho de fonte que apresentam apenas 2 opções (fonte larga e fonte normal), nessa feature o usuário aumenta o tamanho da fonte ao seu gosto, obtendo o tamanho ideal para a sua necessidade.

### Modo Noturno/ Dark Mode

Opção de estilização alternável em modo noturno para reduzir o brilho em excesso que dificulta a leitura por parte do usuário.

Ao acessar o site pela primeira vez o modo apresentado é baseado no horário da Time Zone GMT-3. Caso no horário do acesso o horário seja entre as 06:00 e as 18:00, por padrão o modo apresentado é o modo claro, enquanto, caso o horário de acesso seja entre as 18:01 e as 05:59 o modo padrão é o modo escuro.

### Navegação por Teclado

Funcionalidade para facilitar a navegação. Ao ser implementada a funcionalidade permite ao usuário navegar apertando a tecla TAB do teclado.

### Alt nas imagens

Alt's são atributos das imagens em uma aplicação web responsiva que melhoram a acessibilidade do site. Os Alt's aparecem em dois momentos:
  - Quando uma imagem não pode ser carregada, o texto do atributo Alt aparece como alternativa para que o usuário saiba do que se trata a imagem que não pode ser carregada;
  - Ao se utilizar leitores de tela os Alt's são lidos para informar o usuário o conteúdo da imagem (implementação não utilizada na plataforma atual do Eduplay).


