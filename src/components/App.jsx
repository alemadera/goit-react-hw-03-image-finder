import React, { Component } from 'react';
import Searchbar from './SearchBar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';
import '../index.css';

const API_KEY = '42609932-4bff4bd098f55c20bce283dff';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      images: [],
      loading: false,
      page: 1,
      selectedImage: null
    };
  }

  fetchImages = async () => {
    const { query, page } = this.state;
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        page: prevState.page + 1
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSubmit = (newQuery) => {
    this.setState({ query: newQuery, images: [], page: 1 }, () => {
      this.fetchImages();
    });
  };

  handleLoadMore = () => {
    this.fetchImages();
  };

  openModal = (image) => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, loading, selectedImage } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />
        {loading && <Loader />}
        {images.length > 0 && <Button onLoadMore={this.handleLoadMore} />}
        {selectedImage && <Modal image={selectedImage} closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default App;
