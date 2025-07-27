import React from "react";

function Home () {
    return (
        <main className="container-inicio">
            <section className="banner-apresentacao">
                <h1 className="titulo-banner">Olá, sou o <b>Clayton</b></h1>

                <div className="imagem-perfil">
                    <img src="/IMAGENS/CLAYTON-PERFIL.jpg" alt="Foto de Perfil" /></div>
            </section>

            <div className="apresentacao">
                <p>Tenho 34 anos e atuo como Analista de E-commerce, com forte experiência em gestão de marketplaces (<strong>Mercado Livre, Shopee</strong>), controle e reposição de estoques, planejamento logístico (envios Full) e configuração de campanhas digitais. Possuo vivência com integrações de ERP (<strong>Bling, Millennium, OnClick</strong>),  de banco de dados, suporte técnico e implantação de plataformas de vendas online. Perfil analítico, organizado e orientado à resolução de problemas, com domínio de ferramentas de marketing digital como Google Ads, Facebook Business,{" "} <strong>Google Analytics e Tag Manager</strong>, além de competências em criação e edição de conteúdos visuais para mídias sociais.</p>

                <p>Tenho também uma base sólida em{" "} <strong>finanças e investimentos</strong>, certificado pelo curso “Investidor  e Internacional” da <strong>AUVP</strong> (A Única Verdade Possível). Conhecimento prático em renda fixa, ações, investimentos internacionais e planejamento financeiro — complementando minha experiência técnica com visão estratégica voltada para resultados e tomada de decisões. Profissional adaptável, focado em eficiência operacional e  de valor em diferentes contextos.</p>
            </div>
      </main>
    );
}

export default Home;