import styles from './Filters.module.scss';
import filters from './filters.json';
import classNames from 'classnames';

interface Ioption {
    id: number,
    label: string
}

interface FilterProps {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

function Filters ( {filter, setFilter} : FilterProps ) {

    function selectFilter(option : Ioption){
        if(filter === option.id) return setFilter(null);
        return setFilter(option.id);
    }

    return (
        <div className={styles.filtersStyle}>
            {filters.map((option) => (
                <button 
                    key={option.id}
                    onClick={() => selectFilter(option)}

                    className={classNames({
                            [styles.filtersStyle__filter]: true,
                            [styles["filtersStyle__filter--active"]]: filter === option.id,
                    })}
                >
                    {option.label}
                </button>    
            ))}
        </div>
    )
}

export default Filters;