import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SubmitReview() {
    const [PokeReview, setPokeReview] = useState('');
    const nav = useNavigate();

    const navigation = ()=>{
        nav('/home')
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted review: ${PokeReview}`);
        alert('Successful submission');
    };


    return (
        <div id='submitpage' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
            <div className="container" style={{ padding: '2em', backgroundColor: 'darkorange', borderRadius: '10px', height: "auto", boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 className='s_h' style={{ textAlign: 'center', marginBottom: '1em', color: '#333333' }}>Submit a Review</h2>
                <Form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <textarea
                            id="PokeReview"
                            value={PokeReview}
                            onChange={(e) => setPokeReview(e.target.value)}
                            className="form-control"
                            required
                            placeholder='Enter review here'
                            style={{ minHeight: '150px', background: "white", color: "black" }}
                        ></textarea>
                    </div>
                    <Button type='submit' className="btn btn-primary" style={{ backgroundColor: 'orange', borderColor: 'orange', marginTop: "50px" }}>&#x2713; Submit</Button>
                    <Button onClick={navigation} className="btn btn-primary" style={{ backgroundColor: 'orange', borderColor: 'orange', marginTop: "50px" }}>Go Home</Button>
                </Form>
            </div>
        </div>
    );
}
