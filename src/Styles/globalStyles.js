import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    // transition: all .5s linear;
}
#mobilenav {
    background-color: ${({ theme }) => theme.navcolor}
}
#line1 {
    background-color: ${({ theme }) => theme.text}
}
#line2 {
    background-color: ${({ theme }) => theme.text}
}
#line3 {
    background-color: ${({ theme }) => theme.text}
}

.links:hover {
    color: ${({ theme }) => theme.hover}
}

`;

export const lightTheme = {
    body: '#fff',
    text: '#121212',
    navcolor: '#fff',
    hover: 'black'
};

export const darkTheme = {
    body: '#121212',
    text: '#fff',
    navcolor: '#121212',
    hover: 'white'
};