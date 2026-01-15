# ia-na-pratica-github-copilot-actions
Projeto acadêmico demonstrando o uso de GitHub Copilot e GitHub Actions para acelerar o desenvolvimento e garantir a qualidade de software com testes automatizados.
# IA na prática: Acelerando o desenvolvimento e garantindo a qualidade com um fluxo de trabalho automatizado por IA

## 1. Contexto e problema

Este projeto foi desenvolvido a partir de um cenário comum em empresas de tecnologia em crescimento: a dificuldade em equilibrar **velocidade de entrega** e **qualidade de software**.

A empresa simulada atua no desenvolvimento de uma ferramenta de colaboração online e enfrenta forte pressão para lançar novas funcionalidades em prazos curtos. Quando a equipe prioriza velocidade, a qualidade do código e a cobertura de testes diminuem, resultando em aumento de bugs. Por outro lado, quando o foco é qualidade, os prazos do roadmap deixam de ser cumpridos.

Os principais gargalos identificados foram:

* Tempo excessivo gasto na escrita de código repetitivo;
* Baixa cobertura de testes automatizados;
* Feedback tardio sobre erros, descobertos apenas em QA manual ou em produção;
* Inconsistência na base de código, causada por diferentes abordagens para problemas semelhantes.

## 2. O papel da IA no ciclo de desenvolvimento de software

A Inteligência Artificial tem se tornado uma aliada estratégica no desenvolvimento de software moderno. Seu uso vai além da simples geração de código, atuando em diferentes etapas do ciclo de desenvolvimento:

* **Geração de código:** acelera a criação de funções, classes e estruturas básicas;
* **Geração de testes automatizados:** auxilia na criação de testes unitários, aumentando a cobertura de testes;
* **Padronização:** incentiva boas práticas e reduz inconsistências no código;
* **Integração com CI/CD:** contribui para ciclos de feedback mais rápidos e confiáveis.

Quando integrada corretamente, a IA não substitui o desenvolvedor, mas potencializa sua produtividade e reduz erros humanos.

## 3. GitHub Copilot na prática

O GitHub Copilot é uma ferramenta baseada em IA que sugere código em tempo real dentro da IDE. Ele se mostra especialmente útil para equipes compostas por desenvolvedores júnior e pleno, pois:

* Reduz o tempo de escrita de código repetitivo;
* Auxilia na criação de funções de negócio;
* Gera exemplos de testes unitários a partir do código existente;
* Serve como apoio educacional, explicando trechos de código e testes.

Neste projeto, o Copilot foi utilizado para gerar funções principais de negócio e seus respectivos testes automatizados, sempre com comentários indicando os prompts utilizados.

## 4. GitHub Actions e automação de testes

GitHub Actions é uma plataforma de automação integrada ao GitHub que permite criar pipelines de **Integração Contínua (CI)**.

No contexto deste projeto, o GitHub Actions foi utilizado para:

* Instalar automaticamente as dependências do projeto;
* Executar os testes automatizados a cada push no repositório;
* Garantir que erros sejam identificados rapidamente.

Esse processo reduz significativamente o risco de falhas em produção e promove um fluxo de desenvolvimento mais confiável.

## 5. Importância da cobertura de testes

A cobertura de testes indica a porcentagem do código que é executada durante os testes automatizados. Conforme discutido por Martin Fowler, a cobertura não deve ser vista apenas como um número, mas como um indicador da qualidade dos testes.

Uma boa cobertura ajuda a:

* Detectar erros mais cedo;
* Facilitar manutenções futuras;
* Aumentar a confiança nas entregas contínuas.

Neste projeto, a combinação entre GitHub Copilot e GitHub Actions contribui diretamente para o aumento da cobertura de testes e para a melhoria da qualidade do código.

## 6. Caso real de uso

Empresas como a **Microsoft** e equipes internas do próprio **GitHub** relatam ganhos significativos de produtividade com o uso do GitHub Copilot, especialmente na escrita de código e testes. Da mesma forma, o GitHub Actions se tornou um padrão amplamente adotado para automação de pipelines de CI/CD, reduzindo erros humanos e acelerando ciclos de entrega.

Esses casos demonstram que o uso combinado dessas ferramentas pode gerar impactos positivos reais em ambientes corporativos.

## 7. Conclusão

A adoção de um fluxo de trabalho assistido por IA permite equilibrar velocidade e qualidade no desenvolvimento de software. O GitHub Copilot acelera a escrita de código e testes, enquanto o GitHub Actions garante automação e feedback contínuo.

Juntas, essas ferramentas reduzem bugs, aumentam a produtividade da equipe e tornam o processo de entrega mais seguro e eficiente, atendendo às demandas de crescimento da empresa simulada.
