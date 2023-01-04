import Spinner from "../../components/Spinner"
import GiphyList from "../../components/GiphyList"
import useGiphysHooks from '../../hooks/useGiphys'

export default function SearchResult( props ) {
    console.log('SearhResult->params:', props.params)
    const {keyword} = props.params
    const { loadingValue, giphyValues } = useGiphysHooks({keyword})
    return (
        <>
            {
                loadingValue
                ? <Spinner />
                : <GiphyList data={giphyValues}/>
            }
        </>
    )
}