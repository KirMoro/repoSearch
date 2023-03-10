import * as dotenv from 'dotenv';
import axios from 'axios';

export const GITHUB_CLIENT_ID = '8d970ed03ae6f5d51356';
export const GITHUB_CLIENT_SECRET = '61b9706871762014602f431aee588243cafae26a';

dotenv.config();

type AccessTokenData = {
    access_token: string;
    token_type: string;
    scope: string;
} | null;

export const getAccessToken = async (
    code: string,
): Promise<AccessTokenData> => {
    try {
        const params = `?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`;

        const { data } = await axios.post(
            `https://github.com/login/oauth/access_token${params}`,
            {},
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getUserData = async (accessToken: string) => {
    try {
        const { data } = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return data;
    } catch (error) {
        return null;
    }
};
