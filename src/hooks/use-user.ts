import { useEffect, useState } from "react";
import { getCookie } from 'cookies-next';

export const useUser = () => {
    const [user, setUser] = useState('no user');
    const [isLoading, setIsLoading] = useState(false);
    const access_token = getCookie('access-token');
    console.log(process.env.PUBLIC_DOMAIN);

    useEffect(() => {
        const getuser = async () => {
            if (!access_token) return { user, isLoading };
            setIsLoading(true);
            const response = await fetch(`/api/auth/current-user`, {
                method: 'GET',
                headers: {
                    Cookie: `access-token=${access_token}`
                }
            });

            const find_user = await response.json();
            setUser(find_user.user);
            setIsLoading(false);
        };

        getuser();
    }, []);

    return { user, isLoading };

};