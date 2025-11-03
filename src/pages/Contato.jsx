import React from "react";

function Contato() {
  return (
    <main className="pagina-contato">
      <h1 className="titulo-pagina">Fale Comigo!</h1>

      <div className="container-contato">
        <form className="form-contato" action="#" method="post">
          <label className="form-contato" htmlFor="nome">
            Nome:{" "}
          </label>
          <input type="text" id="nome" name="nome" required />

          <label className="form-contato" htmlFor="email">
            E-mail:
          </label>
          <input type="email" id="email" name="email" required />

          <label className="form-contato" htmlFor="assunto">
            Assunto:
          </label>
          <input type="text" id="assunto" name="assunto" required />

          <label className="form-contato" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea id="mensagem" name="mensagem" rows="5" required />

          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
}

export default Contato;
