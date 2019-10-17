import Component from 'react'
export default class apiAva extends Component {

    loginAva = token => {
        var data = new FormData()
        data.append('wstoken', token)
        data.append('wsfunction', 'core_webservice_get_site_info')
        const response = fetch('http://ava.ufrpe.br/webservice/rest/server.php?moodlewsrestformat=json', {
            method: 'POST',
            body: data
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                //fazer as outras requisições
                // resposta = responseJSON.token ? responseJSON.token: this.setState({ error: responseJSON.error })
            })
            .catch((error) => {
                //Nunca entra aqui ?
                console.log(error)
            })
    }
}