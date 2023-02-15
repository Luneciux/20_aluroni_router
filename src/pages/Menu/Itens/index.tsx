import { useEffect, useState } from 'react';
import styles from './Itens.module.scss';
import itens from './itens.json';
import Item from './Item';


interface ItensProps {
    searchString: string;
    filter: number | null;
    order: string;
}


function Itens(props : ItensProps) {

    const [list, setList] = useState(itens);

    const {
        searchString,
        filter,
        order
    } = props;


    //funções de busca
    function testSearch (title : string) {
        const regex = new RegExp(searchString, 'i');
        return regex.test(title);
    }

    function testFilter (id : number) {
        if (filter !== null) return filter === id;
        return true;
    }

    const orderByProp = (
        list: typeof itens,
        prop: "size" | "serving" | "price"
    ) => {
        return list.sort((a, b) => a[prop] > b[prop] ? 1 : -1);
    }
    
    const orderList = ( newList : typeof itens) => {
        switch (order) {
          case 'porcao':
            return orderByProp(newList, 'size');
          case 'qtd_pessoas':
            return orderByProp(newList, 'serving');
          case 'preco':
            return orderByProp(newList, 'price');
          default:
            return newList;
        }
      };

    // function orderList (newList : typeof itens) {
    //     switch (order) {
    //         case 'porcao':
    //             return newList.sort((a, b) => a.size > b.size ? 1 : -1);
    //         case 'qtd_pessoas':
    //             return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
    //         case 'preco':
    //             return newList.sort((a, b) => a.price > b.price ? 1 : -1);
    //         default:
    //             return newList;
    //     }

    //     fazer um enum
    //     colocar num arquivo de tipo

    //     const options = {
    //         "porcao": () => { return newList.sort((a, b) => a.size > b.size ? 1 : -1)},
    //         "qtd_pessoas": () =>  {return newList.sort((a, b) => a.serving > b.serving ? 1 : -1)},
    //         "preco": () => { return newList.sort((a, b) => a.price > b.price ? 1 : -1)},
    //     } as const;

    //     return options?.[order as keyof typeof options] ?? newList;
    // }

    useEffect(() => {
        const newList = itens.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(orderList(newList));
    }, [searchString, filter, order]);

    return (
        <div className={styles.itens}>
            {
                list.map(item => (
                    <Item 
                        key={item.id}
                        {...item}
                    />
                ))
            }
        </div>
    )
}

export default Itens;

