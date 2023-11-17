/**
 * Parenthesis-less function & template literal
 * 
 */

div = function(s, ...v) {
    console.log(s, v);
    return function({props}) {
        return '<div></div>';
    }
}

// ==============================


const StyledDiv = div`
    color: #fff;
    font-size: 20px;
    font-weight: 20px;
`;
