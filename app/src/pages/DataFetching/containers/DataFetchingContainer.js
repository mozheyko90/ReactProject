import Spinner from '../../../components/Spinner';
import { useEffect, useState } from 'react';
import { delay } from '../../../utils/index';
import { BASE_URL } from '../api/config';



const DataFetchingContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setLoading] = useState(false); //сразу состояние загрузки не идет
    const [error, setError] = useState(null) // по умолчанию у нас ошибок нет
    

    // useEffect с async await
    useEffect( () => {
        
        (async () => {
            try {
                setLoading(true)
                await delay(2000);
                const data = await fetch(`${BASE_URL}/pokemon`).then((response) => response.json());
                setPokemons(data.results)
            } catch (error) {
                setError(error.message)
            } finally{
                setLoading(false)
            }
        })()
    }, [])


    return(
        <div>
            <h1>Data Fetching</h1>

            <div>
                {isLoading ? (
                    <Spinner />
                ) : (
                    pokemons.map(({url, name}) => (
                        <div key={url}>
                            <a href={url} target="_blank">{name}</a>
                        </div>
                    ))
                )}

                {error && <div style={{color: 'red'}}>{error}</div>}
            </div>
        </div>
    )
}

export default DataFetchingContainer;