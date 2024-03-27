import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Accordion from 'react-bootstrap/Accordion';

export default function Acc(){
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordian Item *1</Accordion.Header>
                <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

            </Accordion.Body>
            </Accordion.Item>
            <div>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordian Item *2</Accordion.Header>
                    <Accordion.Body>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </Accordion.Body>
                </Accordion.Item>
            </div>
            <div>
            <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordian Item *3</Accordion.Header>
                    <Accordion.Body>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </Accordion.Body>
                </Accordion.Item>

            </div>
        </Accordion>
    );
};

