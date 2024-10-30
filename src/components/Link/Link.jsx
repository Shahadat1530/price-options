import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-10 px-3 hover:bg-slate-100 rounded-md">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route : PropTypes.object
}

export default Link;