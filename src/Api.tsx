import axios from "axios";

// Environment variables
const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

// Definisikan tipe data yang dikembalikan untuk daftar film
interface MovieType {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

// Fungsi untuk mendapatkan daftar film populer
export const getMovieList = async (): Promise<MovieType[]> => {
    try {
        const response = await axios.get<{ results: MovieType[] }>(
            `${baseUrl}/movie/popular?api_key=${apiKey}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching movie list:", error);
        throw error;
    }
};
