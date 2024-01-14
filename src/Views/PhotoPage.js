import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppNavbar from '../Components/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import jsonData from './ImageData';


const PhotoPage = () => {
    const filterOptions = ['All', 'Celtic Design Leather Journal', 'Category 2'];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [enlargedImg, setEnlargedImg] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const filterImages = (image) => {
        if (selectedCategory === 'All') {
            return true;
        } else {
            return image.category === selectedCategory;
        }
    };

    const handleImageClick = (image) => {
        setEnlargedImg(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setEnlargedImg(null);
        setShowModal(false);
    };

    const renderImagesForCategory = (categoryData, index) => {
        const categoryBackgroundColor = getCategoryBackgroundColor(categoryData.category);

        return (
            <Row key={categoryData.category} style={{ border: '2px solid red', padding: '20px', backgroundColor: categoryBackgroundColor }}>
                <div
                    className="top-left-text"
                    style={{ padding: '15px', letterSpacing: '0.3rem', fontSize: '1rem', fontFamily: "'Libre Baskerville', serif"  }}
                >
                    {categoryData.category}
                </div>
                {categoryData.images.map((image, index) => (
                    filterImages(image) && (
                        <Col key={index} lg={2} md={3} sm={6} style={{ margin: '-5px', marginLeft: '2px', padding: '10px', marginBottom: '5px' }}>
                            <Card className={`card-border-bottom ${enlargedImg === image ? 'enlarged' : ''}`} onClick={() => handleImageClick(image)}>
                                <Card.Img variant="top" src={image.pic} alt="Card image" className="card-img" />
                                <Card.Body>
                                    <Card.Title>{image.title}</Card.Title>
                                    <Card.Text>{image.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                ))}
            </Row>
        );
    };

    const getCategoryBackgroundColor = (category) => {
        switch (category) {
            case 'Celtic Design Leather Journal':
                return '#FBF8E6'; // Set your desired background color
            case 'Category 2':
                return '#B78365'; // Set another background color
            // Add more cases for other categories with their respective colors
            default:
                return '#f0f0f0'; // Default background color
        }
    };

    return (
        <div>
            <AppNavbar />
            <div className="container-fluid" style={{ marginTop: '5rem' }}>
                <Row className="mb-3">
                    <Col md={3} className="text-start">
                        <select
                            className={`form-select custom-dropdown ${selectedCategory !== 'All' ? 'active' : ''}`}
                            id="filterDropdown"
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            value={selectedCategory}
                        >
                            {filterOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </Col>
                </Row>
                {jsonData.map(
                    (categoryData, index) =>
                        (selectedCategory === 'All' || categoryData.category === selectedCategory) && renderImagesForCategory(categoryData)
                )}
            </div>

            {/* Modal for Enlarged Image */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Enlarged Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {enlargedImg && (
                        <img src={enlargedImg.pic} alt="Enlarged" style={{ width: '100%' }} />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PhotoPage;
