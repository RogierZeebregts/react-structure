import { useLocation } from 'react-router';
import useScrollToTopOnDependencyChange from '@freshheads/javascript-essentials/build/react/hooks/useScrollToTopOnDependencyChange';

export default function useScrollToTopOnPathChange() {
    const location = useLocation();

    useScrollToTopOnDependencyChange(location.pathname);
}
