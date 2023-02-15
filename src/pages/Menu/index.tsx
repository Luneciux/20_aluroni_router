import {ReactComponent as Logo} from 'assets/images/logo.svg'
import { useState } from 'react';

import Search from './Search';
import Order from './Order';
import Itens from './Itens';
import Filters from './Filters';

import styles from './Menu.module.scss';

function Menu() {

    const [searchString, setSearchString] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [order, setOrder] = useState("");

    return (
        <main>
            <nav className={styles.menuStyle}>
                <Logo />
            </nav>
            <header className={styles.headerStyle}>
                <div className={styles.headerStyle__text}>
                    Massas & Restaurante
                </div>
            </header>
            <section className={styles.foodsStyle}>
                <h3 className={styles.foodsStyle__titulo}>Cardápio</h3>
                <Search 
                    searchString={searchString} 
                    setSearchString={setSearchString}
                />
                <div className={styles.foodsStyle__filters}>
                    <Filters 
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <Order 
                        order={order}
                        setOrder={setOrder}
                    />
                </div>
                <Itens 
                    searchString={searchString}
                    filter={filter}
                    order={order}
                />
            </section>
        </main>
    )
}

export default Menu;