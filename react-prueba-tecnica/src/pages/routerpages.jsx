import { useEffect, useState } from "react";
import SearchRecords from "../SearchRecords";
import { News } from "../NewsAndRecords";

export function Routerpages() {
    const [page, setPage] = useState(0);

    const changePage = (page) => {
        setPage(page)
      };
    return (
        <div>
            <button onClick={() => changePage(0)}>Buscar</button>
            <button onClick={() =>  changePage(1)}>Ver</button>
            <div>
                {page === 0 ? (
                    <SearchRecords/>
                ) : (
                    <News/>
                )}
            </div>
        </div>
    )
}