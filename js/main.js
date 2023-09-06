function MudaDesenho() {
    const texto = document.querySelector("h1");
    const data = document.querySelector('#data').value;
    const imagem = document.querySelector("img");
    const descrição = document.querySelector("p");
   

     if(data >= '2023/03/21' && data <= '2023/04/20') {
        texto.innerHTML = "seu cavaleiro é MU, de ÁRIES";
        descrição.innerHTML = " Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco.";
        imagem.setAttribute("src","img/aries.webp");
        imagem.setAttribute("width","400px");
    }
   
   else if (data >= '2023/04/21' && data <= '2023/05/20') {
    texto.innerHTML = "seu cavaleiro é ALDEBARAN, de TOURO";
        descrição.innerHTML = "Aldebaran é o Cavaleiro de Ouro da Constelação de Touro, durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte.";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("width","400px");
    }

   
    else if (data >= '2023/05/21' && data <= '2023/06/21') {
        texto.innerHTML = "seu cavaleiro é SAGA, de GÊMEOS";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","400px");
        descrição.innerHTML = " Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena.";
    }
    else if (data >= '2023/06/21' && data <= '2023/07/22') {
        texto.innerHTML = "seu cavaleiro é MÁSCARA DA MORTE, de CANCER";
        descrição.innerHTML = "Máscara da Morte de Câncer é, provavelmente, um dos cavaleiros de ouro mais lembrados da Saga do Santuário de Cavaleiros do Zodíaco. Primeiro porque ele tem uma das lutas mais emblemáticas das 12 Casas, enfrentando Shiryu de Dragão. Segundo, porque ele era um cavaleiro de ouro que realmente agia como um vilão. E terceiro, porque ele sempre gritava “Ondas do Inferno” bem na hora que a sua mãe passava na sala.";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","400px");
   
    }
    else if (data >= '2023/07/23' && data <= '2023/08/22') {
        texto.innerHTML = "seu cavaleiro é AIOLIA, de LEÃO";
        descrição.innerHTML =  "Apesar de sua personalidade explosiva,Aiolia tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena. Como seu irmão Aiolos foi condenado como traidor, ele tenta limpar o nome da família jurando fidelidade ao Grande Mestre, até participando voluntariamente do extermínio dos Cavaleiros de Bronze. ";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","400px");
    }
    else if (data >= '2023/08/23' && data <= '2023/09/22') {
        texto.innerHTML = "seu cavaleiro é SHAKA, de VIRGEM";
        descrição.innerHTML = "Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades.";
        imagem.setAttribute("src","img/virgem.webp");
        imagem.setAttribute("width","400px");
    }
    else if (data >= '2023/09/23' && data <= '2023/10/22') {
        texto.innerHTML = "seu cavaleiro é DOHKO, de LIBRA";
        descrição.innerHTML = "O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades.";
        imagem.setAttribute("src","img/libra.webp");
        imagem.setAttribute("width","400px");
    }
    else if (data >= '2023/10/23' && data <= '2023/11/21') {
        texto.innerHTML = "seu cavaleiro é MILO, de ESCORPIÃO";
        imagem.setAttribute("src","img/escorpiao.webp");
        imagem.setAttribute("width","400px");
        descrição.innerHTML = "Milo de Escorpião era um Cavaleiro fiel ao Santuário, inicialmente obedecendo as ordens do Grande Mestre, embora houvesse ocasiões em que ele se negaria a realizar missões específicas por questões de orgulho, sentimento este que determinava o rumo de suas conversas inicialmente, tendo se tornado consideravelmente mais humilde depois de sua batalha contra Hyoga de Cisne.";
   
    }
    else if (data >= '2023/11/22' && data <= '2023/12/21') {
        texto.innerHTML = "seu cavaleiro é AIOLOS, de SAGITÁRIO";
        descrição.innerHTML = "nvocando o poder da Constelação de Pégaso e concentrando seu cosmo em seu punho, Seiya pode dar mais de cem socos por segundo, até mesmo a longas distâncias, criando uma onda de cosmo que toma a forma de diversos meteoros.";
        imagem.setAttribute("src","img/sargitario.jpg");
        imagem.setAttribute("width","400px");
   
    }
    else if (data >= '2023/12/22' && data <= '2023/01/20') {
        texto.innerHTML = "seu cavaleiro é SHURA, de CAPRICÓRNIO";
        descrição.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos.";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","400px");
   
    }
    else if (data >= '2023/01/21' && data <= '2023/02/18') {
        texto.innerHTML = "seu cavaleiro é CAMUS, de AQUÁRIO";
        descrição.innerHTML = " Camus é um cavaleiro bastante poderoso, com habilidade de baixar a temperatura e lançar o Pó de Diamante com grande facilidade. A Execução Aurora é o seu golpe secreto mais poderoso, que emite um frio próximo ao zero absoluto, e foi herdado por Hyoga.";
        imagem.setAttribute("src","img/aquario.webp");
        imagem.setAttribute("width","400px");
   
    }
    else if (data >= '2023/02/19' && data <= '2023/03/20') {
        texto.innerHTML = "seu cavaleiro é AFRODITE, de PEIXES";
        imagem.setAttribute("src","img/peixess.webp");
        imagem.setAttribute("width","400px");
        descrição.innerHTML = "O protetor da última Casa do Zodíaco sendo o sucessor de Albafica de Peixes. Pode derrotar qualquer inimigo se estiver lutando com toda sua força. É um cavaleiro famoso não apenas por sua beleza, mas também pela sua reputação como um dos mais fortes entre os 88 cavaleiros.";
   
    }
   
    else {
        texto.innerHTML = "Deu ruim... =(";
    }
}