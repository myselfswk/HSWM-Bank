import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Career() {

    return (
        <div className='overflow-hidden'>
            <div className='row text-center'>
                {/* Card One */}
                <div className='col-md-4'>
                    <Card style={{ width: '30rem', height: '47rem', padding: '15px', margin: '15px' }}>
                        <Card.Img variant="top" src={require('../../Images/rozee.pk.png')} />
                        <Card.Body>
                            <Card.Title>Operations Officer</Card.Title>
                            <Card.Text>
                                A bank's Operations Officer is someone whose role is to provide information regarding the bank's products and services to its customers.
                                He/she is responsible for communicating with clients and assisting them, in person and over the phone, in financial transactions, service
                                and meeting set-ups, and other tasks in response to the client needs.
                            </Card.Text>
                            <Button variant="primary">
                                <a
                                    href='https://www.rozee.pk/job/jsearch/q/all/fin/3'
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}
                                >Go To Link</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Card Two */}
                <div className='col-md-4'>
                    <Card style={{ width: '30rem', height: '47rem', padding: '15px', margin: '15px' }}>
                        <Card.Img variant="top" src={require('../../Images/rozee.pk.png')} />
                        <Card.Body>
                            <Card.Title>Chinese Interpreter</Card.Title>
                            <Card.Text>
                                Provides interpretation into English of speeches given in Chinese and interpretation into Chinese of speeches given in English. Assist with
                                Chinese social media including Weibo and WeChat
                            </Card.Text>
                            <Button variant="primary">
                                <a
                                    href='https://www.rozee.pk/job/jsearch/q/all/fin/3'
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}
                                >Go To Link</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Card Three */}
                <div className='col-md-4'>
                    <Card style={{ width: '30rem', height: '47rem', padding: '15px', margin: '15px' }}>
                        <Card.Img variant="top" src={require('../../Images/rozee.pk.png')} />
                        <Card.Body>
                            <Card.Title>Customer Screening Analyst</Card.Title>
                            <Card.Text>
                                Work collaboratively with the TeamMates Screening Team and central office Process volunteer applications including mentors, board members,
                                program coordinators and all other volunteers.
                            </Card.Text>
                            <Button variant="primary">
                                <a
                                    href='https://www.rozee.pk/job/jsearch/q/all/fin/3'
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}
                                >Go To Link</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Card Four */}
                <div className='col-md-4'>
                    <Card style={{width: '30rem', height: '47rem', padding: '15px', margin: '15px' }}>
                        <Card.Img variant="top" src={require('../../Images/rozee.pk.png')} />
                        <Card.Body>
                            <Card.Title>Branch Operations Manager</Card.Title>
                            <Card.Text>
                                Achieve optimal score on the Branch Score Card Provide personalized service to customers. Identify and address customers' immediate need
                                ensuring positive customer experience..
                            </Card.Text>
                            <Button variant="primary">
                                <a
                                    href='https://www.rozee.pk/job/jsearch/q/all/fin/3'
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none'
                                    }}
                                >Go To Link</a>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Career;