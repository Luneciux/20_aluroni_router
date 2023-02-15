import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import styles from './Order.module.scss';
import options from './options.json';
import classNames from 'classnames';

interface OrderProps {
    order: string,
    setOrder: React.Dispatch<React.SetStateAction<string>>
}

function Order ({ order, setOrder } : OrderProps) {
    const [open, setOpen] = useState(false);

    const orderName = order && options.find(option => option.value === order)?.nome;

    return (

        <button 
            className={classNames({
                [styles.orderStyle]: true,
                [styles["orderStyle--active"]]: order !== "",
            })} 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
        >

            <span>{orderName || "Ordenar Por"}</span>

            {open ? < MdKeyboardArrowUp size={20}/> : < MdKeyboardArrowDown size={20}/>}

            <div 
                className={classNames({
                    [styles.orderStyle__options]: true,
                    [styles['orderStyle__options--active']]: open,
                })}
            >
                {
                    options.map(option => (
                        <div 
                            key={option.value}
                            className={styles.orderStyle__option} 
                            onClick={() => {setOrder(option.value)}}                    
                        >
                            {option.nome}
                        </div>
                    ))
                }
            </div>

        </button>
    )
}

export default Order;