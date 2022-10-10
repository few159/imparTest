import { useState } from "react";
import { useCard } from "../../../hooks/Card";
import { ICar } from "../../../interfaces/cars";
import CardCreate from "../CardActions/CardCrate/CardCreate";
import { CardButtonsGroupElement, CardElement, ImageAndDescriptionElement } from "./styles";

interface ICardProps {
    car: ICar,
    deleteCar: (carId: number) => void
}
export default function Card({ car, deleteCar }: ICardProps) {
    const [showNewCardModal, setShowNewCardModal] = useState(false)

    return (
        <>
            <CardElement>
                <ImageAndDescriptionElement>
                    <div>
                        <img src={car.photo.base64 ?? "/assets/lupa.svg"} alt={car.name} />
                    </div>
                    <span>{car.name.toUpperCase()}</span>
                </ImageAndDescriptionElement>
                <CardButtonsGroupElement>
                    <button onClick={() => deleteCar(car.id)}>
                        <span>
                            <img src="/assets/Icon-trash.svg" alt="Icone de Deleção" />
                            Excluir
                        </span>
                    </button>
                    <button onClick={() => setShowNewCardModal(true)}>
                        <span>
                            <img src="/assets/Icon-edit.svg" alt="Icone de Edição" />
                            Editar
                        </span>
                    </button>
                </CardButtonsGroupElement>
            </CardElement>

            {showNewCardModal ?
                <CardCreate closeModal={() => setShowNewCardModal(false)} updateCar={car} />
                : null}
        </>
    )
}