import Configuration from './configuration';

class AppService {
    constructor() {
        this.config = new Configuration();
    }

    async getMessage() {
        return fetch(this.config.APP_URL)
            .then(response => {
                if (!response.ok) {
                    this.handleResponseError(response);
                }
                return response.json();
            })
            .then(json => {
                console.log("app message", json);
                return json.content;
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    handleResponseError(response) {
        throw new Error("HTTP error, status = " + response.status);
    }

    handleError(error) {
        console.error(error.message);
    }
}

export default AppService;
