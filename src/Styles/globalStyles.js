import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
}
#mobilenav {
    background-color: ${({ theme }) => theme.navcolor}
}

`;

export const lightTheme = {
    body: '#fff',
    text: '#121212',
    navcolor: '#fff'
};

export const darkTheme = {
    body: '#121212',
    text: '#fff',
    navcolor: '#121212'
};