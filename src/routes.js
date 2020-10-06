import Popular from '@/components/Popular';
import SingleView from '@/components/SingleView';

export default [
    { path: '/', component: Popular },
    { path: '/game/:id', component: SingleView }
]