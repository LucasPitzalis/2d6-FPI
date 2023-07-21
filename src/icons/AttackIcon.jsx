import PropTypes from 'prop-types';
import IconBackground from './IconBackground';

export default function AttackIcon({ size, color }) {
    return (
        <IconBackground>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width={size} height={size} viewBox="0 0 136.000000 136.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,136.000000) scale(0.100000,-0.100000)"
                fill={color} stroke="none">
                    <path d="M565 1326 c-152 -30 -259 -89 -367 -204 -192 -204 -230 -492 -101
                    -752 50 -99 169 -220 268 -272 202 -105 428 -105 630 0 99 52 218 173 268 272
                    100 200 102 404 6 600 -57 116 -180 240 -289 293 -135 66 -284 88 -415 63z
                    m327 -69 c182 -70 309 -202 376 -389 22 -62 26 -90 26 -188 0 -99 -4 -126 -26
                    -190 -15 -41 -39 -97 -54 -125 -38 -70 -166 -193 -241 -233 -178 -94 -407 -94
                    -586 0 -92 49 -213 174 -259 268 -38 79 -68 199 -68 272 0 235 144 463 355
                    562 97 47 149 56 285 52 106 -2 135 -7 192 -29z"/>
                    <path d="M630 1158 l-44 -82 13 -296 c7 -162 14 -296 15 -297 1 -1 15 1 32 6
                    16 4 44 4 62 0 28 -6 32 -4 32 15 0 11 7 144 15 295 l14 274 -42 83 c-23 46
                    -44 84 -47 84 -4 0 -26 -37 -50 -82z m47 -496 c-1 -70 -3 -12 -3 128 0 140 2
                    198 3 127 2 -70 2 -184 0 -255z"/>
                    <path d="M655 465 c-5 -2 -43 -9 -82 -15 -71 -12 -73 -13 -73 -41 0 -29 0 -29
                    60 -29 59 0 59 0 65 -32 8 -47 9 -138 0 -174 -9 -40 14 -64 60 -64 24 0 38 6
                    45 19 13 26 13 68 -1 77 -10 6 -9 26 7 137 l6 37 59 0 c58 0 59 0 59 29 0 28
                    -2 29 -67 40 -103 18 -127 20 -138 16z m45 -301 c0 -9 -7 -14 -17 -12 -25 5
                    -28 28 -4 28 12 0 21 -6 21 -16z"/>
                </g>
            </svg>
        </IconBackground>
    );
}

AttackIcon.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};

AttackIcon.defaultProps = {
    size: 20,
    color: "#000000",
};