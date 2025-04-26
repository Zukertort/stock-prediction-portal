import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Request Interceptor
axiosInstance.interceptors.request.use(
    function(config){
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    function(response){
        return response;
    },
    // Error Handler
    async function(error){
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refresh_token');
            try{
                const response = await axiosInstance.post(`/token/refresh/`, {refresh: refreshToken})
                localStorage.setItem('access_token', response.data.access)
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return axiosInstance(originalRequest);
            }catch(error){
                console.log('Token refresh failed');
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;