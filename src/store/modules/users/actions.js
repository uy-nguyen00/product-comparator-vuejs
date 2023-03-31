import axios from "axios";

export default {
    async signup(context, payload) {
        const url = 'http://localhost:3000/user/signup';

        const response = await axios.post(url, {
            email: payload.email,
            password: payload.password
        });

        const responseData = response.data;

        if (responseData._id === '') {
            throw new Error(responseData.error || 'Something went wrong, please try again later.');
        }
    },
    async login(context, payload) {
        const url = 'http://localhost:3000/user/login';

        const response = await axios.post(url, {
            email: payload.email,
            password: payload.password
        });

        const responseData = response.data;

        if (!responseData.jwt) {
            throw new Error(
                responseData.error || 'Failed to authenticate. Check your login data.'
            );
        }

        localStorage.setItem('token', responseData.jwt);
        localStorage.setItem('userId', responseData.localId);

        context.commit('setUser', {
            token: responseData.jwt,
            userId: payload.email
        });
    },
    tryLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId
            });
        }
    },
    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');

        context.commit('setUser', {
            token: null,
            userId: null
        });
    }
};
