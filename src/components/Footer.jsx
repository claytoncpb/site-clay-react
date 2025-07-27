import React from "react";

function Footer () {
    return (
        <footer className="rodape">
            <div className="icones-sociais">
                <a href="https://www.linkedin.com/in/clayton-borges-1b1397105/" target="_blank" rel="noreferrer">
                    <img src="/IMAGENS/linkedin-preto.png" alt="Linkedin"/>
                </a>

                <a href="https://github.com/claytoncpb" target="_blank" rel="noreferrer">
                    <img src="/IMAGENS/github.png" alt="GitHub"/>
                </a>

                <a href="https://www.instagram.com/claytoncpb" target="_blank" rel="noreferrer">
                    <img src="/IMAGENS/instagram-preto.png" alt="Instagram"/>
                </a>

                <p>&copy;2025 Clayton Borges. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;