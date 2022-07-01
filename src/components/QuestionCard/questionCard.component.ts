import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #FAF0D7;
    border-radius: 10px;
    border: 2px solid #DAE5D0;
    padding: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;

    p{
        font-size: 18px;
    }
`

    type ButtonWrapper = {
        correct: boolean;
        userClicked: boolean;
    }

    export const ButtonWrapper = styled.div<ButtonWrapper>`
        transition: all 0.3s ease;

        :hover{
            opacity: 0.8;
        }

        button{
            cursor: pointer;
            user-select: none;
            font-size: 0.8rem;
            width: 100%;
            height: 40px;
            margin: 5px 0;
            background: ${({correct, userClicked}) => 
                correct
                // if answers's correct
                    ? 'linear-gradient(53deg, #C4DFAA, #C4DFAA)' 
                    : !correct && userClicked
                // if answer's wrong
                    ? 'linear-gradient(53deg, #FF7171, #FF7171)'
                // general
                    : 'linear-gradient(90deg, #F5F0BB, #F5F0BB)'};
            border: 3px solid #fff;
            box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            color: #000;
            text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
        }
    `
