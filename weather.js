class Weather {
    constructor(city, state) {
        this.apiKey = '92c7c54ba3178012';
        this.city = city;
        this.state = state;
    }
    async getWeather() {
        const response = await fetch(
            `http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`
        );

        const responseData = await response.json();
        return responseData.current_observation;
    }

    // change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;

    }
}