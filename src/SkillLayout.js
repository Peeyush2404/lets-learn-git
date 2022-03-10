import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const SkillLayout = (props) => {
  return (
    <div>
        <div className='container'>
        <Row  className="Layout">
            <Col className="Navigation" md = "3">
                <ListGroup>
                    <ListGroup.Item variant="light" action href="myskill">
                        My Skills
                    </ListGroup.Item>
                    <ListGroup.Item variant="light" action href="addskill">
                        Add Skills
                    </ListGroup.Item>
                    <ListGroup.Item variant="light" action href="searchskill">
                        Search Skills
                    </ListGroup.Item>
                </ListGroup>
                
            </Col>
            <Col md = "1">
                <div class="vl"></div>
            </Col>
            
            <Col md = "8">{props.children}</Col>
        </Row>
        
        </div>
    </div>
  )
}

export default SkillLayout