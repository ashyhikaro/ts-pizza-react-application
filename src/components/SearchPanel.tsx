import React from 'react'

interface SearchPanelProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setQueryTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({searchTerm, setSearchTerm, setQueryTerm}) => {
    const handleSearch = () => {
        setQueryTerm(searchTerm)
    }

    return (
        <div className='search_panel'>
            <p>Find by name:</p>
            <div>
                <input placeholder='Enter search pizza' type="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}