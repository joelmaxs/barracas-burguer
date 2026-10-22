# Barraca's Burguer — Cardápio digital

Site estático (sem servidor, sem banco). Funciona no GitHub Pages.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | O site (cardápio, carrinho, checkout e envio pelo WhatsApp). Normalmente não precisa mexer. |
| `cardapio.js` | **Todos os dados**: loja, horário, WhatsApp, bairros, categorias, adicionais e produtos. É o arquivo da manutenção — tem comentários explicando cada campo. |
| `img/` | Logo, imagem do topo e fotos dos produtos. |

## Publicar no GitHub Pages

1. Suba os arquivos na raiz do repositório (o `index.html` precisa ficar na raiz).
2. Settings → Pages → Source: *Deploy from a branch* → branch `main`, pasta `/ (root)`.
3. Em ~1 minuto o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Manutenção comum

- **Mudar preço:** em `cardapio.js`, altere `preco: 20.00` do produto.
- **Esgotou / voltou:** `status: "esgotado"` ou `status: "ok"`.
- **Promoção:** `promocao: 18.00` (volte para `null` para tirar).
- **Foto nova:** coloque o arquivo em `img/` e use `foto: "img/nome-do-arquivo.png"`.
- **Fechar num dia específico:** `status: "fechada"` em `loja` (volte para `"auto"` depois).
- **Novo produto:** copie um bloco `{ ... }` de produto, cole embaixo e ajuste o `id` (precisa ser único).

Depois de salvar, se a mudança não aparecer, recarregue com Ctrl+F5 (cache do navegador).

## Pendências antes de divulgar

- [ ] Conferir o número do WhatsApp em `loja.whatsapp` (o da bio parece ter um 0 a mais).
- [ ] Trocar os bairros de exemplo pelos bairros reais e suas taxas.
- [ ] Fotos dos demais produtos (opcional, mas aumenta pedidos).
