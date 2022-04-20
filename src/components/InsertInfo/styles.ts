import styled from "styled-components";

export const Container = styled.div`
    background-color:#fff;
    box-shadow:  0 0 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const GroupInput = styled.div<{hiddenLabel?: boolean}>`

    label{
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        opacity: ${props => props.hiddenLabel ? '0' : '1'};
    }
    input,
    select{ 
        background-color: transparent;
        border: 1px solid #D9E8EE;
        min-height: 30px;
        border-radius: 5px;
        width: 165px;
        padding: 0 5px;

        &:focus{
            outline: 1px solid #00008B;
        }
    }
    input[type=submit]{
        padding: 5px 30px;
        cursor: pointer;
        background-color: #AED7E5;
    }
    
`