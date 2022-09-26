import { CardButtonsGroupElement, CardElement, ImageAndDescriptionElement } from "./styles";

export default function Card() {
    return (
        <CardElement>
            <ImageAndDescriptionElement>
                <div>
                    <img src="src/assets/lupa.svg" alt="" />
                </div>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
            </ImageAndDescriptionElement>
            <CardButtonsGroupElement>
                <button>
                    <span>
                        <img src="src/assets/Icon-trash.svg" alt="Icone de Deleção" />
                        Excluir
                    </span>
                </button>
                <button>
                    <span>
                        <img src="src/assets/Icon-edit.svg" alt="Icone de Edição" />
                        Editar
                    </span>
                </button>
            </CardButtonsGroupElement>
        </CardElement>
    )
}