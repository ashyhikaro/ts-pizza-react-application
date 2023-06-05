import React, {useState} from 'react'
import SinglePizza from './SinglePizza';
import Pizza from '../models/Pizza';
import ReactPaginate from 'react-paginate';

interface DisplayPizzasProps {
    curentPizzas: Pizza[];
}

interface PagginationPizzasProps {
    pizzasArr: Pizza[];
}

const DisplayPizzas: React.FC<DisplayPizzasProps> = ({curentPizzas}) => {
    return (
        <div className='container'>
            {curentPizzas?.map((pizza) => 
                <SinglePizza 
                    key={pizza.id} 
                    pizza={pizza} 
                />
            )}
        </div>
    )
}

const PagginationPizzas: React.FC<PagginationPizzasProps> = ({pizzasArr}) => {
    const [itemOffset, setItemOffset] = useState<number>(0);
    const itemsPerPage: number = 2

    const endOffset: number = itemOffset + itemsPerPage;
    const currentItems: Pizza[] = pizzasArr.slice(itemOffset, endOffset);
    const pageCount: number = Math.ceil(pizzasArr.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % pizzasArr.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <DisplayPizzas curentPizzas={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className='pagination_panel'
            />
        </>
    )
}

export default PagginationPizzas;