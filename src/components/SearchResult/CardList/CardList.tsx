import { useEffect, useState } from "react";
import { useCard } from "../../../hooks/Card";
import { usePagination } from "../../../hooks/Pagination";
import PaginationBar from "../../PaginationBar/PaginationBar";
import Card from "../Card/Card";
import CardDelete from "../CardActions/CardDelete/CardDelete";
import { CardListElement } from "./styles";

export default function CardList() {
    const { paginationProperties, mountPagination } = usePagination()
    const { cars, getCards, searchTerm, searchCar, carsCount } = useCard()

    const [selectedCar, setSelectedCar] = useState<number>(null)

    useEffect(() => {
        if (!paginationProperties) return

        searchTerm ? 
        searchCar(searchTerm, paginationProperties.elementsLimit, ((paginationProperties.currentPage - 1) * paginationProperties.elementsLimit))
        : getCards(paginationProperties.elementsLimit, ((paginationProperties.currentPage - 1) * paginationProperties.elementsLimit))
    }, [paginationProperties])

    useEffect(() => {
        if (!paginationProperties) {
            getCards().then((count) => {
                mountPagination(count)
            })
        }
    }, [])


    function deleteCarCard(carId: number) {
        setSelectedCar(carId)
    }

    return (
        <>
            <CardListElement>
                {
                    cars.length > 0 ?
                        cars.map((car, index) => {
                            if (index < paginationProperties.elementsLimit) {
                                return (
                                    <Card car={car}
                                        deleteCar={deleteCarCard}
                                        key={index}
                                    />
                                )
                            }
                        })
                        : null
                }

            </CardListElement>

            {
                carsCount > paginationProperties?.elementsLimit
                    ? <PaginationBar />
                    : null
            }

            {selectedCar
                ? <CardDelete
                    closeModal={() => {
                        setSelectedCar(null)
                    }}
                    carId={selectedCar}
                />
                : null
            }
        </>
    )
}