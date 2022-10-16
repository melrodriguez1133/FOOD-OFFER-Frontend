import styled from "styled-components";
export {Formulario, Label, GrupoInput, Input};

const colores ={
    borde: "#0075FE",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label `
    display: block;
    font-weight: 700;
    padding : 10px;
    min-height: 40px;
    cursor: pointer;
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    Line-height: 45px;
    padding: 0 0px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadoW: 3px 0px 30px rgba(163,163,163, 0.4);
    }
`;
