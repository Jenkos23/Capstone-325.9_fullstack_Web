import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Form, Button, Spinner, Alert, Card, Row, Col } from 'react-bootstrap';
import DateTimeDisplay from "./DatetimeDisplay";


export default function FashionNews() {
    const [author, setAuthor] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState(null);

    // Function to fetch fashion data by author
    const fashData = async () => {
        if (!author) return;
        setLoading(true);
        setError('');
        setData(null);  // Reset the previous data

        try {
            const response = await axios.get(`https://ezieke-jennifer-backend-capstone.onrender.com/fashion/${author}`);
            setData(response.data);  // Set the response data
        } catch (error) {
            setError('The author is unavailable or an error occurred. Put keywords: clarke, Jessica, Ava, Oliver,liam, Emma, Sophia');
        } finally {
            setLoading(false);
        }
    };

    // Automatically fetch data when author changes
    useEffect(() => {
        if (author) {
            fashData(); // Trigger the data fetch
        }
    }, [author]);

    return (
        <>
          <DateTimeDisplay/>
        <div className="container">
            <h1>Fashion News</h1>
            <p className="styled-paragraph">Discover the Fashion News page, your go-to destination for the latest updates, trends, and insights from the world of fashion. Stay informed with breaking news, designer interviews, runway highlights, and behind-the-scenes stories that shape the fashion industry. Whether you're a style enthusiast, a designer, or just someone who loves to keep up with the ever-evolving fashion scene, this page provides you with all the essential news to stay ahead of the trends.</p><br/><br/>

            {/* Form to input author's name */}
            <Form onSubmit={(e) => { e.preventDefault(); fashData(); }}>
                <Form.Group controlId="author">
                    <Form.Label class="fw-medium">Search by Author</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter author's name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>

            {/* Loading state */}
            {loading && (
                <div className="mt-3">
                    <Spinner animation="border" />
                    <span>Loading...</span>
                </div>
            )}

            {/* Error state */}
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

            {/* Display fetched data in a table */}
            {data && !loading && !error && (
                 <div className="mt-3">
                <Table striped bordered hover className="mt-3">
                    <thead>
                        <tr>
                            <th>Headline</th>
                            <th>Date</th>
                            <th>Author</th>
                            <th>Introduction</th>
                            <th>tags</th>
                            <th>Conclusion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.headline}</td>
                            <td>{data.date}</td>
                            <td>{data.author}</td>
                            <td>{data.content.introduction}</td>
                            <td>{data.tags}</td>
                            <td>{data.content.conclusion}</td>
                        </tr>
                    </tbody>
                </Table><br/>


                {/* Display Designers from Highlights */}
                <h1 class="text-center">Designers and Collections</h1>
                    <Row>
                        {data.content.highlights.map((highlight, index) => (
                            <Col sm={12} md={6} lg={4} key={index}>
                                <Card className="mb-4">
                                    <Card.Img variant="top" src={highlight.imageUrl} alt={highlight.designer} />
                                    <Card.Body>
                                        <Card.Title> {highlight.designer}</Card.Title>
                                        <Card.Text><span style={{fontSize: '1em', fontWeight: 'bold'}}>Collection:</span> {highlight.collection}</Card.Text>
                                        <Card.Text>{highlight.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                
            )}
        </div>
       
         </>
    );
}
