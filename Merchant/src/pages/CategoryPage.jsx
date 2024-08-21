import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryPage = () => {
    let url = "http://ecommerce.reworkstaging.name.ng/v2"
    let loggedUser = JSON.parse(localStorage.getItem("Task_Manager_User"));
    const [showCategories, setShowCategories] = useState([]);
    const [category, setCategory] = useState({ merchant_id: loggedUser.id, name: "", image: "" });
    const [newCategory, setNewCategory] = useState({ name: "", image: "" });
    const [productsDetails, setProductsDetails] = useState({
        title: "",
        descp: "",
        price: "",
        brand: "",
        quantity: "",
        images: [],
        attrib: [
            { type: "", content: [{ name: "", value: "" }] }
        ],
        currency: "NGN",
        min_qty: "",
        max_qty: "",
        discount: "",
        discount_expiration: "",
        has_refund_policy: true,
        has_discount: true,
        has_shipment: true,
        has_variation: true,
        shipping_locations: [],
        variations: [
            { type: "", text: "", content: [{ display: [{ type: "", value: "" }], text: "" }] }
        ],
        merchant_id: loggedUser.id,
        category_id: ""
    });

    const [showModal, setShowModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingCategory, setEditingCategory] = useState({});

    const fetchCategories = async () => {
        try {
            const res = await axios.get(`${url}/categories?merchant_id=${loggedUser.id}`);
            setShowCategories(res.data);
            console.log("fetching categories", res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []); // Fetch categories on initial component mount

    // useEffect to fetch categories whenever a new category is created
    useEffect(() => {
        if (category.name !== "" || category.image !== "") {
            fetchCategories();
        }
    }, [category]);

    const handleEdit = (category) => {
        setEditingCategory(category);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setShowAddModal(false);
    };

    const handleSaveCategory = async (category) => {
        try {
            const updatedCategory = {
                ...category,
                name: category.name,
                image: category.image,
                // Add other updated properties here
            };
            await axios.put(`${url}/categories/${category.id}`, updatedCategory);
            // Update the showCategories state with the updated category
            setShowCategories(showCategories.map((cat) => (cat.id === category.id ? updatedCategory : cat)));
            handleCloseModal();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (categoryId) => {
        try {
            const response = await axios.delete(`${url}/categories/${categoryId}`);
            console.log(`Deleted category with ID ${categoryId}`, response.data);
            setShowCategories(showCategories.filter((category) => category.id !== categoryId));
        } catch (error) {
            console.error(`Failed to delete category with ID ${categoryId}`, error);
        }
    };

    const handleAddCategory = async () => {
        try {
            const newCat = { ...newCategory, merchant_id: loggedUser.id };
            const res = await axios.post(`${url}/categories`, newCat);
            setShowCategories([...showCategories, res.data]);
            setNewCategory({ name: "", image: "" });
            handleCloseModal();
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <div style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            overflow: "hidden"
        }}>

            <video autoPlay loop muted playsInline style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}>
                <source src="https://www.shutterstock.com/shutterstock/videos/1108312863/preview/stock-footage-animated-infinite-zoom-out-virtual-background-with-social-networks-connected-together-online.mp4" type="video/mp4" />
            </video>
            <div style={styles.container}>
                <h4 style={styles.title}>List Of Created Categories</h4>
                <Button
                    variant="success"
                    style={styles.addButton}
                    onClick={() => setShowAddModal(true)}
                >
                    Add Category
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Category ID</th>
                            <th>Category Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showCategories && showCategories.map((category) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td><Link style={styles.link} to={`/createproduct/${category.id}`}>{category.name}</Link><div style={styles.createProductText}>Click the above to create a product.</div></td>
                                <td>
                                    <Button variant="primary" size="sm" onClick={() => handleEdit(category)}>
                                        Edit
                                    </Button>
                                    {' '}
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(category.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div style={styles.createCategoryText}>
                    Haven't created a category yet? Then, Click the add category button above.
                </div>
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Product Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="categoryName">
                                <Form.Label>Category Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editingCategory.name}
                                    onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => handleSaveCategory(editingCategory)}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={showAddModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formCategoryName">
                                <Form.Label>Category Name **</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter category name"
                                    value={newCategory.name}
                                    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group controlId="formCategoryImage">
                                <Form.Label>Category Image URL</Form.Label>
                                <Form.Control
                                    type="file"
                                    placeholder="Enter image URL"
                                    value={newCategory.image}
                                    onChange={(e) => setNewCategory({ ...newCategory, image: e.target.value })}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAddCategory}>
                            Add Category
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

const styles = {
    background: {
        backgroundImage: `url("https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg?auto=compress&cs=tinysrgb&w=600")`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        padding: "20px",
        maxWidth: "1200px",
        width: "90%",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#fff",
        fontSize: "24px",
        fontWeight: "bold",
    },
    addButton: {
        position: "absolute",
        right: "60px",
        top: "20px",
    },
    link: {
        textDecoration: "none",
        color: "#007bff",
        fontWeight: "bold",
    },
    createProductText: {
        fontSize: "12px",
        color: "#555",
    },
    createCategoryText: {
        textAlign: "center",
        marginTop: "40px",
        color: "yellow",
        fontSize: "18px",
    },
};

export default CategoryPage;
