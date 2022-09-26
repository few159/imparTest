import { useEffect } from "react";
import ReactLoading from "react-loading";
import { useCard } from "../../hooks/Card";
import { usePagination } from "../../hooks/Pagination";
import { DeleteOverlayElement } from "../SearchResult/CardActions/styles";
import { PaginationBarElement } from "./styles";

export default function PaginationBar() {
    const { pokemonsCount, isLoading } = useCard()
    const { paginationProperties, mountPagination, changePage, goToPage } = usePagination()

    useEffect(() => {
        mountPagination(pokemonsCount)
    }, [])

    return (
        <>
            {
                isLoading ?
                    <DeleteOverlayElement>
                        <ReactLoading type="spin" color="var(--cor-texto)" height={150} width={150} />
                    </DeleteOverlayElement>
                    : null
            }
            {
                paginationProperties ?
                    <PaginationBarElement>
                        <div
                            className="firstPage"
                            onClick={() => goToPage(1)}
                        >
                            {'<<'}
                        </div>
                        <div onClick={() => changePage("prev")}>
                            {'<'}
                        </div>
                        {
                            Array(Math.ceil(paginationProperties.totalElements / paginationProperties.elementsLimit)).fill('mock').map((mock, pageNum) => {
                                const page = pageNum + 1
                                if (page >= (paginationProperties.currentPage - 2) && page <= (paginationProperties.currentPage + 2)) {
                                    return (
                                        <div
                                            onClick={() => goToPage(page)}
                                            className={paginationProperties.currentPage == page ? "active" : ""}
                                        >
                                            {page}
                                        </div>
                                    )
                                }
                            })
                        }
                        <div onClick={() => changePage("next")}>
                            {'>'}
                        </div>
                        <div
                            className="lastPage"
                            onClick={() => goToPage(Math.ceil(paginationProperties.totalElements / paginationProperties.elementsLimit))}
                        >
                            {'>>'}
                        </div>
                    </PaginationBarElement>
                    : null
            }
        </>
    )
}