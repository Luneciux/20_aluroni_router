import styles from './Item.module.scss';
import itens from '../itens.json';
import classNames from 'classnames';

type ItemProps = typeof itens[0];

function Item(props : ItemProps) {

    const {
        title,
        description,
        category,   
        size,
        serving,
        price,
        photo
    } = props;

    return (
        <div className={styles.itemStyle}>
            <div className={styles.itemStyle__image}>
                <img src={photo} alt={title}/>
            </div>
            <div className={styles.itemStyle__description}>
                <div className={styles.itemStyle__title}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>
                <div className={styles.itemStyle__tags}>
                    <div className={classNames({
                        [styles.itemStyle__type]: true,
                        [styles[`itemStyle__type__${category.label.toLocaleLowerCase()}`]]: true
                    })}>
                        {category.label}
                    </div>
                    <div className={styles.itemStyle__portion}>
                        {size}g
                    </div>
                    <div className={styles.itemStyle__serves}>
                        Serve {serving} pessoa {serving === 1 ? "" : "s"}
                    </div>
                    <div className={styles.itemStyle__value}>
                        R$ {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;