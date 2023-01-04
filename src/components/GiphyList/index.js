import Giphy from "../Giphy";
import './style.css'

export default function GiphyList( props ) {
    const data = props.data || []

    return < div className="ListOfGiphys">
        {
            data.map(({ url, title, id }) =>
                <Giphy
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}