import {Profile} from "./types/profile";
import {LiveStream} from "./types/livestream";
import {VOD} from "./types/VOD";
import {Serie} from "./types/serie";
import {Category} from "./types/category";

/**
 * Xtream class is used to interact with the Xtream API.
 * It provides methods to fetch profiles, live streams, VOD streams, series, categories, EPG, server info and user info.
 */
export class Xtream {
    #baseUrl: string;
    #username: string;
    #password: string;
    #buildUrl: string;

    /**
     * Constructs an instance of the Xtream class.
     * @param {string} baseUrl - The base URL of the Xtream API.
     * @param {Object} auth - The authentication object containing username and password.
     */
    constructor(baseUrl: string, auth: {username:string, password:string}) {
        if(!baseUrl) {
            throw new Error('Base URL is required');
        }
        this.#baseUrl = baseUrl.trim();
        if(!this.#baseUrl.endsWith('/')) {
            this.#baseUrl += '/';
        }
        this.#username = auth.username.trim();
        this.#password = auth.password.trim();

        this.#buildUrl = `${this.#baseUrl}/player_api.php?username=${this.#username}&password=${this.#password}&action=`
    }

    /**
     * Fetches the user profile.
     * @returns {Promise<Profile>} A promise that resolves to the user profile.
     */
    async getProfiles():Promise<Profile> {
        const response = await fetch(`${this.#buildUrl}get_user_info`);
        if(response.status !== 200) {
            throw new Error('Credentials must be invalid');
        }
        return await response.json();
    }

    /**
     * Fetches the live streams.
     * @returns {Promise<LiveStream[]>} A promise that resolves to an array of live streams.
     */
    async getLiveStreams():Promise<LiveStream[]> {
        const response = await fetch(`${this.#buildUrl}get_live_streams`);
        return await response.json();
    }

    /**
     * Fetches the VOD streams.
     * @returns {Promise<VOD[]>} A promise that resolves to an array of VOD streams.
     */
    async getVODStreams():Promise<VOD[]> {
        const response = await fetch(`${this.#buildUrl}get_vod_streams`);
        const data:VOD[] = await response.json();
        data.map((item:VOD) => {
            item.url = `${this.#baseUrl}movie/${this.#username}/${this.#password}/${item.stream_id}.${item.container_extension}`
        });
        return data;
    }

    /**
     * Fetches the series.
     * @returns {Promise<Serie[]>} A promise that resolves to an array of series.
     */
    async getSeries():Promise<Serie[]> {
        const response = await fetch(`${this.#buildUrl}get_series`);
        return await response.json();
    }

    /**
     * Fetches the categories.
     * @returns {Promise<Category[]>} A promise that resolves to an array of categories.
     */
    async getCategories():Promise<Category[]> {
        const response = await fetch(`${this.#buildUrl}get_live_categories`);
        return await response.json();
    }

    /**
     * Fetches the EPG.
     * @returns {Promise<any>} A promise that resolves to the EPG.
     * @throws {Error} Throws an error if the method is not implemented.
     */
    async getEPG() {
        throw new Error('Method not implemented')
        const response = await fetch(`${this.#baseUrl}/xmltv.php?username=${this.#username}&password=${this.#password}`);
        return await response.json();
    }

    /**
     * Fetches the server info.
     * @returns {Promise<Profile>} A promise that resolves to the server info.
     */
    async getServerInfo():Promise<Profile> {
        const response = await fetch(`${this.#buildUrl}get_server_info`);
        return await response.json();
    }

    /**
     * Fetches the user info.
     * @returns {Promise<Profile>} A promise that resolves to the user info.
     */
    async getUserInfo():Promise<Profile> {
        const response = await fetch(`${this.#buildUrl}get_user_info`);
        return await response.json();
    }
}