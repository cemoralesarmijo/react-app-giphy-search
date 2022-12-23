
const apiKey = 'wLsI3UXC0omLRdDD2He1W4FPS1lzSwDE&'
// const apiKey = process.env.REACT_APP_GIPHY_API_KEY

export default function getGiphys ({keyword}) {
  keyword = 'luffy'
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}q=${keyword}&limit=3&offset=0&rating=g&lang=en`
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      return data.map(giphy => {
        const { title, id, images: { downsized_medium: {url } } } = giphy
        return { title, id, url}
      })
    })
}
