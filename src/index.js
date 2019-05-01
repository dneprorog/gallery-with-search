import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {
  ContainerGallery,
  WrapperSearch,
  Input,
  WrapperCard,
  ItemCard,
  ModalGallery,
  ModalContent,
  Button
} from './ui/index';

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      search: '',
      isOpen: false,
      id: null
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  };

  toggleModal(id) {
    this.setState({
      isOpen: !this.state.isOpen,
      id: this.state.isOpen ? null : id
    });
  };

  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0, 100) });
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((response) => {
      this.setState({data: response.data})
    })
  };

  render() {
    const { data, search } = this.state

    const filterCardImg = data.slice(0, 50).filter(
      (title) => title.title.indexOf(search) !== -1
    )

    const imageId = this.state.id === null ? {} : filterCardImg.find((item) => item.id === this.state.id)

    const CardImg = ({data, onClick}) => {
      return data.slice(0, 50).map((item) => (
        <ItemCard
          key={item.id}
          className='item'
          onClick={() => onClick(item.id)}
          widthCardItem={this.props.widthCardItem}
          backgroundCardItem={this.props.backgroundCardItem}
          colorCardItem={this.props.colorCardItem}
          alignTextCardItem={this.props.alignTextCardItem}
        >
          <img src={item.thumbnailUrl} alt='image' />
          <p>{item.title}</p>
        </ItemCard>
    ))}

    const Modal = ({show, children, onClose}) => {
      if(!show) {
        return null;
      };

      return (
        <ModalGallery
          backgroundModalWrap={this.props.backgroundModalWrap}
        >
          <ModalContent
            widthModal={this.props.widthModal}
            heightModal={this.props.heightModal}
            backgroundModal={this.props.backgroundModal}
            colorModal={this.props.colorModal}
          >
            {children}
            <Button
              onClick={onClose}
              backgroundButtonModal={this.props.backgroundButtonModal}
              colorButtonModal={this.props.colorButtonModal}
              colorBorderButtonModal={this.props.colorBorderButtonModal}
              widthButtonModal={this.props.widthButtonModal}
              heightButtonModal={this.props.heightButtonModal}
            >
              Close
            </Button>
          </ModalContent>
        </ModalGallery>
      )
    };

    return (
      <ContainerGallery background={this.props.background}>
        {this.props.isNoneSearch && <WrapperSearch>
          <Input
            type='text'
            value={search}
            placeholder='Search...'
            onChange={this.updateSearch}
            backgroundInput={this.props.backgroundInput}
            fontSizeInput={this.props.fontSizeInput}
          />
        </WrapperSearch>}

        <WrapperCard>
          <CardImg
            onClick={this.toggleModal}
            data={filterCardImg}
          />

          {this.props.isNoneModal &&
          <Modal
            show={this.state.isOpen}
            onClose={this.toggleModal}
          >
            <div>
              <img src={imageId.url} alt='image-item'/>
              <p>{imageId.title}</p>
            </div>
          </Modal>
          }
        </WrapperCard>
      </ContainerGallery>
    )
  };
};

export default Gallery;
