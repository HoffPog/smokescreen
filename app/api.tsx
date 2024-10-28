import axios from 'axios';

export async function getToonID(toonName: string) {
    try {
        const response = await axios.post(
            'https://esi.evetech.net/latest/universe/ids/?datasource=tranquility&language=en',
            [toonName],
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-Language': 'en'
                }
            }
        );

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching toon ID:', error);
        throw error;
    }
}