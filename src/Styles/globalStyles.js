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
a {
    color: ${({ theme }) => theme.text};
}
a:hover {
    color: ${({ theme }) => theme.texthover};
}
.aboutPage {
    color: ${({ theme }) => theme.abouttext};
}
#photoLink {
    color: ${({ theme }) => theme.abouttext};
}
#photoLink:hover {
    color: ${({ theme }) => theme.texthover};
}
`;

export const lightTheme = {
    body: '#fff',
    text: '#121212',
    navcolor: '#fff',
    hover: 'black',
    texthover: 'rgb(116, 116, 116, 0.5)',
    abouttext:'#121212'
};

export const darkTheme = {
    body: '#121212',
    text: '#fff',
    navcolor: '#121212',
    hover: 'white',
    texthover: 'rgb(116, 116, 116, 0.5)',
    abouttext: '#dbdbdb'
};