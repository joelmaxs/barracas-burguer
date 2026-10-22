/* =====================================================================
   CARDÁPIO — Barraca's Burguer
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar no dia a dia.
   Depois de salvar no GitHub, o site atualiza em ~1 minuto
   (se não aparecer, recarregue com Ctrl+F5 / limpe o cache).

   REGRAS RÁPIDAS
   • Preços em REAIS com PONTO: 18.00  (não use vírgula: 18,00 quebra)
   • Textos sempre entre aspas: "assim"
   • Toda linha de item termina com vírgula, menos a última da lista
   • Não apague as chaves { } nem os colchetes [ ]
   • Se o site ficar em branco depois de editar, quase sempre é uma
     vírgula ou aspas faltando — abra o site, aperte F12 > Console
     e veja a linha do erro.
   ===================================================================== */

window.CARDAPIO = {

  /* ------------------------------------------------------------------
     LOJA
     ------------------------------------------------------------------ */
  loja: {
    nome: "Barraca's Burguer",
    whatsapp: "5508381153583",   // 55 + DDD + número, só dígitos. Ex.: "5583981153583"  ⚠ conferir: este é o da bio do Instagram e parece ter um 0 a mais
    endereco: "Rua José Leal, 21 · Picuí–PB",
    boasVindas: "Qualidade premium. Monte seu pedido e envie pelo WhatsApp.",   // frase embaixo do título no topo
    abre: 18,          // hora que abre (0–23)
    fecha: 23,         // hora que fecha (0–24). Nos últimos 45 min aparece o aviso "fechando"
    status: "auto",     // "auto" = segue o horário | "aberta" = força aberta | "fechada" = força fechada (feriado, folga…)
    pedidosAntecipados: false,  // true = deixa enviar pedido mesmo com a loja fechada
    entrega: true,       // true/false — oferece entrega?
    retirada: true,      // true/false — oferece retirada no local?
    pedidoMinimo: null,    // valor mínimo do pedido em reais, ou null para não ter
    imagemTopo: "img/topo.webp", // imagem grande do topo (PNG/WebP com fundo transparente fica melhor). null = mostra o logo

    // Bairros atendidos e taxa de entrega de cada um (em reais)
    bairros: [
      { nome: "Centro", taxa: 5.00 },
      { nome: "Outro bairro (exemplo)", taxa: 7.00 }   // ⚠ exemplo — trocar pelos bairros reais
    ]
  },

  /* ------------------------------------------------------------------
     CATEGORIAS — a ordem aqui é a ordem no site.
     id: nome interno (sem espaço/acento), usado nos produtos em "categoria"
     oculta: true esconde a categoria inteira do cardápio
     ------------------------------------------------------------------ */
  categorias: [
    { id: "burguers", nome: "Burguers", oculta: false },
    { id: "entradas", nome: "Entradas", oculta: false },
    { id: "sobremesas", nome: "Sobremesas", oculta: false },
    { id: "bebidas", nome: "Bebidas", oculta: false }
  ],

  /* ------------------------------------------------------------------
     GRUPOS DE OPÇÕES (adicionais, combo, recheio…)
     Cada produto escolhe quais grupos usa, em "opcoes".
     minimo: quantas o cliente É OBRIGADO a escolher (0 = opcional)
     maximo: quantas ele pode escolher no máximo
     preco: valor somado ao lanche (0 = sem custo)
     ------------------------------------------------------------------ */
  grupos: [
    {
      id: "combo",
      nome: "Transformar em combo",
      minimo: 0,
      maximo: 1,
      itens: [
        { nome: "Combo: + refrigerante lata + batata 150g", preco: 10.00 }
      ]
    },
    {
      id: "adicionais",
      nome: "Adicionais",
      minimo: 0,
      maximo: 10,
      itens: [
        { nome: "Cheddar cremoso", preco: 3.00 },
        { nome: "Queijo cheddar", preco: 3.00 },
        { nome: "Queijo mussarela", preco: 3.00 },
        { nome: "Queijo coalho", preco: 3.00 },
        { nome: "Queijo do reino", preco: 4.00 },
        { nome: "Bacon", preco: 3.00 },
        { nome: "Charque desfiada", preco: 4.00 },
        { nome: "Blend 150g (com fatia de queijo)", preco: 9.00 },
        { nome: "Smash 2x 60g (com fatia de queijo)", preco: 9.00 },
        { nome: "Blend suíno (com fatia de queijo)", preco: 9.00 },
        { nome: "Filé de frango empanado (com fatia de queijo)", preco: 9.00 },
        { nome: "Maionese Barraca's", preco: 1.00 },
        { nome: "Molho barbecue", preco: 1.00 },
        { nome: "Melaço", preco: 1.00 },
        { nome: "Abacaxi", preco: 1.00 },
        { nome: "Verduras (alface, tomate e cebola)", preco: 1.00 },
        { nome: "Cebola caramelizada", preco: 3.00 },
        { nome: "Cebola crispy", preco: 2.00 },
        { nome: "Onion rings (2 unidades)", preco: 3.00 }
      ]
    },
    {
      id: "recheio-churros",
      nome: "Recheio",
      minimo: 1,
      maximo: 1,
      itens: [
        { nome: "Doce de leite", preco: 0.00 },
        { nome: "Chocolate", preco: 0.00 }
      ]
    }
  ],

  /* ------------------------------------------------------------------
     PRODUTOS — a ordem aqui é a ordem no site (dentro de cada categoria).
     categoria : id da categoria (lá em cima)
     descricao : use \n para quebrar linha (cada ingrediente numa linha)
     preco     : preço normal em reais
     promocao  : preço promocional em reais, ou null (sem promoção)
     status    : "ok" (disponível) | "esgotado" (aparece apagado) | "oculto" (some do site)
     destaque  : true = aparece em "Mais pedidos"
     opcoes    : ids dos grupos acima que o cliente pode escolher
     remover   : ingredientes que o cliente pode tirar ("Sem cebola"…)
     foto      : caminho da foto dentro da pasta img/, ou null
     ------------------------------------------------------------------ */
  produtos: [

    // ===== BURGUERS =====
    {
      id: "smash",
      categoria: "burguers",
      nome: "SMASH BURGUER",
      descricao: "Pão Tradicional\nMaionese Barraca's\nAlface americana\nTomate\nCebola\nQueijo cheddar\nSmash 2x 60G",
      preco: 20.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: ["combo", "adicionais"],
      remover: ["maionese", "alface", "tomate", "cebola", "queijo cheddar"],
      foto: "img/smash-burguer.png"
    },
    {
      id: "gold",
      categoria: "burguers",
      nome: "GOLD BURGUER",
      descricao: "Pão Tradicional\nCebola caramelizada\nFarofa de bacon\nCheddar cremoso\nQueijo cheddar\nBlend 150G",
      preco: 22.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: ["combo", "adicionais"],
      remover: ["cebola caramelizada", "farofa de bacon", "cheddar cremoso", "queijo cheddar"],
      foto: null
    },
    {
      id: "kids",
      categoria: "burguers",
      nome: "BARRAQUINHA KIDS",
      descricao: "Pão Tradicional\nQueijo cheddar\n1x smash 60G",
      preco: 15.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: ["combo", "adicionais"],
      remover: ["queijo cheddar"],
      foto: null
    },
    {
      id: "picanha",
      categoria: "burguers",
      nome: "PICANHA BURGUER",
      descricao: "Pão Tradicional\nMaionese Barraca's\nAlface americana\nTomate\nOnion rings\nBacon fatia\nQueijo do reino\nBlend picanha 150G",
      preco: 28.00,
      promocao: null,
      status: "ok",
      destaque: true,
      opcoes: ["combo", "adicionais"],
      remover: ["maionese", "alface", "tomate", "onion rings", "bacon", "queijo do reino"],
      foto: "img/picanha-burguer.png"
    },
    {
      id: "picui",
      categoria: "burguers",
      nome: "PICUÍ BURGUER",
      descricao: "Pão Tradicional\nMaionese Barraca's\nCharque desfiada\nMelaço\nQueijo coalho\nBlend 150G",
      preco: 26.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: ["combo", "adicionais"],
      remover: ["maionese", "charque", "melaço", "queijo coalho"],
      foto: null
    },
    {
      id: "porc",
      categoria: "burguers",
      nome: "PORC BURGUER",
      descricao: "Pão Tradicional\nMolho barbecue\nCebola crispy\nBacon fatia\nAbacaxi\nQueijo mussarela\nBlend suíno 150G",
      preco: 26.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: ["combo", "adicionais"],
      remover: ["molho barbecue", "cebola crispy", "bacon", "abacaxi", "queijo mussarela"],
      foto: null
    },
    {
      id: "chicken",
      categoria: "burguers",
      nome: "CHICKEN BURGUER",
      descricao: "Pão Tradicional\nMaionese Barraca's\nAlface americana\nQueijo cheddar\nFilé de frango empanado",
      preco: 21.00,
      promocao: null,
      status: "ok",
      destaque: true,
      opcoes: ["combo", "adicionais"],
      remover: ["maionese", "alface", "queijo cheddar"],
      foto: null
    },

    // ===== ENTRADAS =====
    {
      id: "batata-frita",
      categoria: "entradas",
      nome: "BATATA FRITA",
      descricao: "300g",
      preco: 12.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "batata-cb",
      categoria: "entradas",
      nome: "BATATA FRITA CHEDDAR E BACON",
      descricao: "300g, cheddar cremoso e bacon em farofa",
      preco: 15.00,
      promocao: null,
      status: "ok",
      destaque: true,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "onion-rings",
      categoria: "entradas",
      nome: "ONION RINGS",
      descricao: "Cebolas empanadas (10 unidades)",
      preco: 15.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "bolinho",
      categoria: "entradas",
      nome: "BOLINHO DE CARNE DE SOL",
      descricao: "Bolinho de carne de sol com cream cheese (5 unidades)",
      preco: 20.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "coxinha",
      categoria: "entradas",
      nome: "COXINHA SEM MASSA",
      descricao: "Coxinha de frango (5 unidades)",
      preco: 20.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },

    // ===== SOBREMESAS =====
    {
      id: "brownie",
      categoria: "sobremesas",
      nome: "BROWNIE COM SORVETE",
      descricao: "Sorvete de creme com ganache de chocolate",
      preco: 18.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "churrinhos",
      categoria: "sobremesas",
      nome: "CHURRINHOS",
      descricao: "Doce de leite ou chocolate",
      preco: 18.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: ["recheio-churros"],
      remover: [],
      foto: null
    },

    // ===== BEBIDAS =====
    {
      id: "agua",
      categoria: "bebidas",
      nome: "ÁGUA",
      descricao: "",
      preco: 3.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "agua-gas",
      categoria: "bebidas",
      nome: "ÁGUA COM GÁS",
      descricao: "",
      preco: 4.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "coca",
      categoria: "bebidas",
      nome: "COCA-COLA",
      descricao: "Lata ou KS",
      preco: 6.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "coca-zero",
      categoria: "bebidas",
      nome: "COCA-COLA ZERO",
      descricao: "Lata ou KS",
      preco: 6.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "guarana",
      categoria: "bebidas",
      nome: "GUARANÁ",
      descricao: "",
      preco: 6.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "guarana-zero",
      categoria: "bebidas",
      nome: "GUARANÁ ZERO",
      descricao: "",
      preco: 6.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "soda",
      categoria: "bebidas",
      nome: "SODA LIMONADA",
      descricao: "",
      preco: 6.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "h2o",
      categoria: "bebidas",
      nome: "H2O LIMONETO",
      descricao: "",
      preco: 8.00,
      promocao: null,
      status: "ok",
      destaque: true,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "dellvale",
      categoria: "bebidas",
      nome: "SUCO DEL VALLE",
      descricao: "Laranja",
      preco: 6.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "guarana-1l",
      categoria: "bebidas",
      nome: "GUARANÁ 1L",
      descricao: "",
      preco: 9.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "coca-1l",
      categoria: "bebidas",
      nome: "COCA-COLA 1L",
      descricao: "",
      preco: 9.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "suco",
      categoria: "bebidas",
      nome: "SUCO",
      descricao: "Verificar disponibilidade",
      preco: 6.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "suco-leite",
      categoria: "bebidas",
      nome: "SUCO COM LEITE",
      descricao: "Verificar disponibilidade",
      preco: 6.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "budweiser",
      categoria: "bebidas",
      nome: "BUDWEISER",
      descricao: "Long neck",
      preco: 9.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    },
    {
      id: "heineken",
      categoria: "bebidas",
      nome: "HEINEKEN",
      descricao: "Long neck",
      preco: 11.00,
      promocao: null,
      status: "ok",
      destaque: false,
      opcoes: [],
      remover: [],
      foto: null
    }
  ]
};
