import {connect} from 'react-redux';
import MainComponent from '../components/MainComponent'
import { getNews } from '../action/apiRequests'

const mapStateToProps = state => {
    return {
        validateUser: state.validateUser,
        isLoggedIn: state.filters.isLoggedIn
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNews:(options="")=> dispatch(getNews(options))
    }
};

const MainContainer = connect(mapStateToProps,mapDispatchToProps)(MainComponent);

export default MainContainer;