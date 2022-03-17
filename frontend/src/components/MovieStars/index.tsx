import { ReactComponent as StarFull } from 'assets/img/star.svg';
import { ReactComponent as StarHalf } from 'assets/img/half_star.svg';
import { ReactComponent as StarEmpty } from 'assets/img/empty_star.svg';
import './styles.css';

function MovieStars() {

    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>

    );
}

export default MovieStars;