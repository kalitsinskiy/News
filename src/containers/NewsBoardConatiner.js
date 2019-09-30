import {connect} from 'react-redux';
import {addComment} from '../action/addComment';
import {chooseArticle, showArticleModal} from '../action/filters';
import NewsBoard from '../components/NewsBoard';

const mapStateToProps = state => {
    return {
        news: state.news,
        newsSource: state.filters.newsSource,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddComment: (index,user,comment) => dispatch(addComment(index,user,comment)),
        chooseArticle: article => {
            dispatch(chooseArticle(article));
            dispatch(showArticleModal(true));
        }
    }
};

const NewsBoardConatiner = connect(mapStateToProps, mapDispatchToProps)(NewsBoard);

export default NewsBoardConatiner;
