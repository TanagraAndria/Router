import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import styles from './Produto.module.css'


export const Produto = () => {
  
    const [produto, setProduto] = useState(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProduto(url) {
          try {
            setLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setProduto(json);
          } catch (erro) {
            setError('Um erro ocorreu');
          } finally {
            setLoading(false);
          }
        }
        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
      }, [id]);
      
      if (loading) return <div className="loading"></div>;
      if (error) return <p>{error}</p>;
      if (produto === null) return null;

    return (
        <section className={styles.produto + ' animeLeft'}>
        <div>
          {produto.fotos.map((foto) => (
            <img key={foto.src} src={foto.src} alt={foto.titulo} />
          ))}
        </div>
        <div>
          <h1>{produto.nome}</h1>
          <span className={styles.preco}>R$ {produto.preco}</span>
          <p className={styles.descricao}>{produto.descricao}</p>
        </div>
      </section>
    )
}
