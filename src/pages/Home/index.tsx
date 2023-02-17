import itens from 'data/Menu.Itens.json';
import styles from './Home.module.scss';

function Home() {

  let recomendedItens = [...itens];
  recomendedItens = recomendedItens.sort(() => 0.5 - Math.random());
  return (
    <section>
      <h3 className={styles.titulo}>
        Recomendações da Cozinha
      </h3>
      <div className={styles.recomendados}>
        {recomendedItens.map(item => (
          <div 
            key={item.id} 
            className={styles.recomendado}
          >
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}>
              Ver Mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;