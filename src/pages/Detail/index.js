export default function Detail({ params }) {
    // console.log('params=>', params)
    return (
        <div>
            <h1>DETAILS</h1>
            <h1> GIF con id {params.id}</h1>
        </div>
    )
}