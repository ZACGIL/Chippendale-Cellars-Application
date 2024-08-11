import Auth from '../../utils/auth';

export default function Order() {
    if(!Auth.loggedIn){
        return (
            <h1>You must be logged in to access this feature.</h1>
        );
    }
}