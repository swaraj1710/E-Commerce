import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cart.scss';
function Cart({ cartItems }) {
    
    return (
        <div className="container">


            <div className="row">

                {
                    cartItems && cartItems.map((a) => {
                        return (
                            <>

                                <div className='col'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={a.i} />
                                        <Card.Body>
                                            <Card.Title>${a.j}</Card.Title>
                                            <Card.Text>
                                                {a.k}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>



                            </>
                        )
                    })
                }
            </div>
        </div>
    )



}
export default Cart;