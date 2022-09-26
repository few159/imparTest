import { CreateFormElement } from "./styles";

export default function CardCreateForm() {
    return (
        <CreateFormElement>
            <header>
                <img src="src/assets/icone_criar.svg" alt="Icone adicionar imagem" />
                <h2>Criar Card</h2>
            </header>

            <form action="">
                <div>
                    <label>DIGITE UM NOME PARA O CARD</label>
                    <input type="text" placeholder="Digite o título" />
                </div>

                <div>
                    <label>INCLUA UMA IMAGEM PARA APARECER NO CARD</label>
                    <input type="text" placeholder="Nenhum arquivo selecionado" />
                    <button type="button">Escolher arquivo</button>
                    {/* <input type="file" placeholder="Nenhum arquivo selecionado"/> */}
                </div>

                <footer>
                    <button type="submit">Criar card</button>
                </footer>
            </form>
        </CreateFormElement>
    )
}