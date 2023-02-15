import styles from './Search.module.scss';

import { CgSearch } from 'react-icons/cg'

interface SearchProps {
    searchString: string,
    setSearchString: React.Dispatch<React.SetStateAction<string>>
}

function Search ({searchString, setSearchString} : SearchProps) {
    return (
        <div className={styles.search}>
            <input 
                value={searchString}
                onChange={e => setSearchString(e.target.value)}
                placeholder='Buscar'
            />
            <CgSearch 
                size={20}
            />
        </div>
    )
}

export default Search;