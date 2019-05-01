import styled from 'styled-components';

export const ContainerGallery = styled.div`
    position: relative;
`

export const WrapperSearch = styled.div`
    height: 50px;
    padding: 20px;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    font-size: ${p => p.fontSizeInput ? p.fontSizeInput : ''};
    background: ${p => p.backgroundInput ? p.backgroundInput : ''};
    color: #cccccc;
    border: none;
    text-align: center;
`;

export const WrapperCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
`;

export const ItemCard = styled.div`
    text-align: ${p => p.alignTextCardItem ? p.alignTextCardItem : ''};;
    width: ${p => p.widthCardItem ? p.widthCardItem : ''};
    margin: 5px 0;
    padding: 8px;
    font-size: 14px;
    color: ${p => p.colorCardItem ? p.colorCardItem : ''};
    cursor: pointer;
    background: ${p => p.backgroundCardItem ? p.backgroundCardItem : ''};
    display: flex;
    flex-direction: column;
`;

export const ModalGallery = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${p => p.backgroundModalWrap ? p.backgroundModalWrap : ''};
    padding: 50px;
`;

export const ModalContent = styled.div`
    width: ${p => p.widthModal ? p.widthModal : ''};
    height: ${p => p.heightModal ? p.heightModal : ''};
    background: ${p => p.backgroundModal ? p.backgroundModal : ''};
    color: ${p => p.colorModal ? p.colorModal : ''};
    padding: 10px;
    
    img {
      width: 100%;
      height: 400px
    }
`;

export const Button = styled.button`
    border: 1px solid ${p => p.colorBorderButtonModal ? p.colorBorderButtonModal : ''};
    color: ${p => p.colorButtonModal ? p.colorButtonModal : ''};
    background: ${p => p.backgroundButtonModal ? p.backgroundButtonModal : ''};
    width: ${p => p.widthButtonModal ? p.widthButtonModal : ''};
    height: ${p => p.heightButtonModal ? p.heightButtonModal : ''};
    cursor: pointer;
`;
