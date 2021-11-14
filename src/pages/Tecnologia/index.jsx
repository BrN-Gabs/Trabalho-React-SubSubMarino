import gatsby from '../../images/gatsby.png';

export const Tecnologia = () => {
    return (
        <>  
            <br/>
            <h1>Tecnologia para SEO em React</h1>
            <p>Os robôs de rastreamento do Google não são tão bons para entender tags em uma página feita em JavaScript. 
            O React, responsável por criar uma SPA (Single Page Application), renderiza os conteúdos da página em JavaScript.
            Ou seja, pensando nisso é que foram desenvolvidas Tecnologias capazes de realizar essa renderização em segundo plano e subir esse conteúdo, já transformado, em HTML. 
            Dessa forma, o Google passa a entender melhor e consequentemente recomenda mais o site em seus motores de busca.</p>
            <br/>
            <a href="https://www.gatsbyjs.com" target="_blank" className="gatsby"><h2><img src={gatsby} alt="Gatsby" style={{height: 50}} /> Gatsby.js</h2></a>
            <p>O Gatsby é uma framework escrito em JavaScript e React, cuja sua proposta é em ajudar os desenvolvedores a construir aplicações e websites de forma facilitada.
            Seu foco é proporcionar um desenvolvimento rápido, efetivo e performático.</p>
            <p> Seu funcionamento consiste em três etapas. Primeiramente, você tem o Data Source, que é basicamente a fonte desses dados que você vai entregar pra construir o web site ou uma aplicação.
            Depois, vem o processo de building, onde ele vai incorporar todo o HTML, JavaScript e CSS que são necessários para compilar sua aplicação, lendo em cima dessa fonte de dados e construir o site estático.
            Por fim, a terceira etapa é o Deploy, onde você entrega esses arquivos e os visualiza na web.</p>
            <p>Então para resumir, o Gatsby é uma ferramenta que vai pegar a fonte de dados, fazer uma building de um site estático e entregar para o usuário.</p>
           
            <a href="https://www.gatsbyjs.com" target="_blank" className="btn btn-info"> Clique aqui para acessar o site!</a>
        </>
    )
}