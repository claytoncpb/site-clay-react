import "./App.css";

function App() {
  return (
    <>
      <header className="fixed">
        <nav>
          <button className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="menu">
            <li>
              <a href="#" className="ativo">
                Início
              </a>
            </li>
            <li>
              <a href="#">Experiência</a>
            </li>
            <li>
              <a href="#">Qualificações</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container-inicio">
        <section className="banner-apresentacao">
          <h1 className="titulo-banner">
            Olá, sou o <b>Clayton</b>
          </h1>

          <div className="imagem-perfil">
            <img src="/IMAGENS/CLAYTON-PERFIL.jpg" alt="Foto de Perfil" />
          </div>
        </section>

        <div className="apresentacao">
          <p>
            Tenho 34 anos e atuo como Analista de E-commerce, com forte
            experiência em gestão de marketplaces (
            <strong>Mercado Livre, Shopee</strong>), controle e reposição de
            estoques, planejamento logístico (envios Full) e configuração de
            campanhas digitais. Possuo vivência com integrações de ERP (
            <strong>Bling, Millennium, OnClick</strong>), parametrização de
            banco de dados, suporte técnico e implantação de plataformas de
            vendas online. Perfil analítico, organizado e orientado à resolução
            de problemas, com domínio de ferramentas de marketing digital como
            Google Ads, Facebook Business,{" "}
            <strong>Google Analytics e Tag Manager</strong>, além de
            competências em criação e edição de conteúdos visuais para mídias
            sociais.
          </p>

          <p>
            Tenho também uma base sólida em{" "}
            <strong>finanças e investimentos</strong>, certificado pelo curso
            “Investidor Nacional e Internacional” da <strong>AUVP</strong> (A
            Única Verdade Possível). Conhecimento prático em renda fixa, ações,
            investimentos internacionais e planejamento financeiro —
            complementando minha experiência técnica com visão estratégica
            voltada para resultados e tomada de decisões. Profissional
            adaptável, focado em eficiência operacional e entrega de valor em
            diferentes contextos.
          </p>
        </div>
      </main>

      <footer className="rodape">
        <div className="icones-sociais">
          <a
            href="https://www.linkedin.com/in/clayton-borges-1b1397105/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/IMAGENS/linkedin-preto.png" alt="Linkedin" />
          </a>

          <a
            href="https://github.com/claytoncpb"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/IMAGENS/github.png" alt="GitHub" />
          </a>

          <a
            href="https://www.instagram.com/claytoncpb/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/IMAGENS/instagram-preto.png" alt="Instagram" />
          </a>

          <p>&copy; 2025 Clayton Borges. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
