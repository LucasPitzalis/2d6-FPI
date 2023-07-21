import PropTypes from 'prop-types';
import IconBackground from './IconBackground';

export default function SpecialIcon({ size, color }) {
    return (
        <IconBackground>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 174.66667 174.66667"
                height={size}
                width={size}
                preserveAspectRatio="xMidYMid meet"
            >
                <g transform="matrix(1.3333333,0,0,-1.3333333,0,174.66667) scale(0.1)">
                    <path
                        fill="none"
                        stroke={color}
                        strokeWidth={40}
                        d="M 1290,655 C 1290,304.301 1005.7,20 655,20 304.297,20 20,304.301 20,655 c 0,350.7 284.297,635 635,635 350.7,0 635,-284.3 635,-635 z"
                    />
                    <g transform="translate(20,20)">
                        <path
                            fill={color}
                            d="M 637.223,1071.36 768.652,805.051 1062.55,762.344 849.883,555.051 900.09,262.34 637.223,400.539 374.359,262.34 l 50.204,292.711 -212.665,207.293 293.895,42.707 131.43,266.309"
                        />
                    </g>
                </g>
            </svg>
        </IconBackground>
    );
}

SpecialIcon.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};

SpecialIcon.defaultProps = {
    size: 20,
    color: "#000000",
};