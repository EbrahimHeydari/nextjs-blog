import data from '../api/data.json'

export default (request, response) => {
  response.status(200).json(data.detail)
}