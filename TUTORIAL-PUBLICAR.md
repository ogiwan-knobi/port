# Como colocar seu portfólio no ar (gratuito)

Este guia usa o **GitHub Pages**, que hospeda o site de graça. Você não precisa de servidor nem de cartão de crédito.

## Antes de começar: sobre domínio grátis

Domínios totalmente gratuitos (.tk, .ml etc.) saíram do ar ou são bloqueados por muitos navegadores e não são recomendados para portfólio profissional. Você tem duas opções:

1. **Gratuito (subdomínio):** `seunome.github.io`. Funciona perfeitamente e custa R$ 0.
2. **Domínio próprio:** `igosouza.com.br` custa cerca de R$ 40 por ano no [Registro.br](https://registro.br). Esta é a opção mais profissional. O passo 6 mostra como ligar o domínio.

Recomendo começar pela opção 1 e depois comprar o domínio, se quiser.

---

## Passo 1: criar uma conta no GitHub

1. Acesse [github.com](https://github.com) e clique em **Sign up**.
2. Crie a conta com seu e-mail e escolha um nome de usuário. Ele aparece na URL do site, por exemplo `igoreiz`.

## Passo 2: criar o repositório

1. Clique no **+** no canto superior direito e escolha **New repository**.
2. Em **Repository name**, digite `portfolio` (ou outro nome).
3. Marque **Public**.
4. Clique em **Create repository**.

## Passo 3: enviar os arquivos do site

Você pode fazer isso pelo navegador, sem instalar nada:

1. Na página do repositório, clique em **uploading an existing file**.
2. Arraste **todo o conteúdo** da pasta `site/` para a área de upload. Isso inclui:
   - `index.html`
   - `pix.html`, `go-now.html`, `mobills.html`, `caixa-tem.html`
   - a pasta `assets/` inteira (com `css`, `img`, `js` e o PDF do currículo)
3. Role até o final, escreva uma mensagem como "primeira versão" e clique em **Commit changes**.

> Importante: o `index.html` precisa ficar na raiz do repositório, não dentro de uma pasta.

## Passo 4: ativar o GitHub Pages

1. No repositório, clique em **Settings**.
2. No menu lateral, clique em **Pages**.
3. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
4. Em **Branch**, selecione `main` e a pasta `/ (root)`. Clique em **Save**.
5. Aguarde de 1 a 3 minutos e recarregue a página. Vai aparecer a mensagem: *"Your site is live at https://seunome.github.io/portfolio/"*.

Pronto. Seu site já está no ar nessa URL.

## Passo 5: testar

Abra o link e confira:
- o menu: **Currículo** abre o PDF em outra aba, **Behance** e **LinkedIn** abrem seus perfis;
- os quatro banners da home levam para os cases certos (Pix, Go Now, Mobills e Caixa Tem);
- os botões do footer estão na mesma ordem: Behance e depois LinkedIn.

## Passo 6 (opcional): usar seu próprio domínio

1. **Compre o domínio** no [Registro.br](https://registro.br) (para `.com.br`) ou em outro registrador.
2. No GitHub, vá em **Settings → Pages → Custom domain**, digite seu domínio (ex.: `igosouza.com.br`) e clique em **Save**.
3. Marque **Enforce HTTPS** quando a opção aparecer (pode levar alguns minutos).
4. No painel onde você comprou o domínio, crie os registros DNS:

   **Para o domínio raiz (`igosouza.com.br`)**, crie quatro registros do tipo `A`, todos apontando para:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

   **Para o `www`**, crie um registro `CNAME` com nome `www` apontando para `seunome.github.io`.

5. Aguarde a propagação do DNS (de alguns minutos até 24 horas).

> Os IPs acima são os oficiais do GitHub Pages. Se o GitHub mudar essa informação, confira a documentação em [docs.github.com/pages](https://docs.github.com/pages).

## Atualizando o site depois

Para trocar uma imagem ou um texto, abra o arquivo no GitHub, clique no ícone de lápis (**Edit**), faça a alteração e clique em **Commit changes**. O site atualiza sozinho em poucos minutos.

## Alternativa: Netlify (mais simples para arrastar arquivos)

1. Acesse [app.netlify.com](https://app.netlify.com) e crie uma conta gratuita.
2. Clique em **Add new site → Deploy manually**.
3. Arraste a pasta `site/` para a área indicada.
4. Você ganha uma URL do tipo `nome-aleatorio.netlify.app`. Em **Domain management** dá para trocar o nome ou adicionar um domínio próprio.

---

## Checklist final

- [ ] Site abre pelo link público
- [ ] Currículo abre em outra aba
- [ ] Behance e LinkedIn corretos no menu e no footer
- [ ] Banners da home levam para os 4 cases
- [ ] Imagens e textos conferidos no celular
- [ ] (Opcional) domínio próprio apontando e HTTPS ativo
