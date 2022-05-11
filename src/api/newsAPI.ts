import axios from "axios";

const instance = axios.create({
    baseURL: 'https://newsdata.io/api/1/'
})
const apiKey = '&apikey=pub_72775a162ae6df41a64282b01f2e459454a2'

export const newsAPI = {
    async getNews(page: number, categories?: TCategory[]) {
        const response = await instance.get<TNewsData>(`news?country=ru${apiKey}&category=${categories?.join()}&page=${page}`);
        return response.data;
    }
}


export type TNewsData = {
    status: string
    totalResults: number
    results: TNews[]
    nextPage: number
}

export type TNews = {
    title:      string
    link:       string
    keywords:   null | string[]
    creator:    null | string[]
    video_url:  null | string
    description:null | string
    content:    null | string
    pubDate:    string
    image_url:  null | string
    source_id:  null | string
    country:    null | string[]
    category:   null | string[]
    language:   null | string
}

export type TCategory = 'sports' | 'technology' | 'top'