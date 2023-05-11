import { CurrentUser } from '../types/user.type';
export const useLogout = () => {
    const CurrentUser = useState('currentUser')
    CurrentUser.value = null;
    useLocalStorage('currentUser', null);
}