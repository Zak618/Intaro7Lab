import fetchJsonp from 'fetch-jsonp';
import credentials from '@/credentials.json';

const access_token = credentials.access_token;

export class Api {
    static async getCities(query) {
        let requestUrl = `https://api.vk.com/method/${credentials.city}?country_id=1&count=100&q=${query}&access_token=${access_token}&v=5.81`;
        return await fetchJsonp(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                return json.response.items;
            });
    }

    static async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8888/JSBack/public/api/cv',
                "Access-Control-Allow-Methods" : 'POST',
            },
            body: data
        });

        response.json().then(data => {
            return JSON.stringify(data);
        });
    }

    static async get(url) {
        let response = await fetch(url);
        return await response.json();
    }

    static async getUniversities(query, cityId) {
        let requestUrl = `https://api.vk.com/method/${credentials.university}?country_id=1&city_id=${cityId}&count=100&q=${query}&access_token=${access_token}&v=5.81`;
        return await fetchJsonp(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                return json.response.items;
            });
    }

}