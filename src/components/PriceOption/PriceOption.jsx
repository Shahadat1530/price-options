import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { price, optionName, features } = option;
    return (
        <div className='bg-blue-500 text-white flex flex-col p-4 rounded-md'>
            <h2 className='text-center'>
                <span className='text-6xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className="text-4xl text-center my-6 ">{optionName}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx) =>
                        <Feature
                            key={idx} feature={feature}
                        ></Feature>)
                }
            </div>
            <button className='mt-12 p-2 bg-green-500 rounded-lg w-full hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;