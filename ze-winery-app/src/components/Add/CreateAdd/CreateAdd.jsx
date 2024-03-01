import styles from './CreateAdd.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateAdd = () => {

    return (

        <div className={styles['new-add-container']}>
            <div className={styles['left-side']}>
                <Row>
                    <Col>
                        Ime
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Адрес за кореспонденция
                    </Col>
                    <Col>
                        <Row>
                            <Col>Svilengrad</Col>

                        </Row>
                        <Row>
                            <Col>Bulgaria</Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>No ЕИК/ЕГН: </Col>
                </Row>
                <Row>
                    <Col>АКЦИЗЕН ДАНЪЧЕН ДОКУМЕНТ N</Col>
                </Row>
                <Row>
                    <Col>УНИКАЛЕН КОНТРОЛЕН N</Col>
                </Row>
                <Row>
                    <Col>Място и даrа на издаване:

                    </Col>
                </Row>
                <Row>
                    <Col>Приложения N:14a: Брой, N: u дата:
                    </Col>
                </Row>
                <Row>
                    <Col>Превоэвач и регистрационен N: нa транспортното средство:
                    </Col>
                </Row>
                <Row>
                    <Col>N: u дата на докуменга удостоверяващ недължимостта на аициза:
                    </Col>
                </Row>
                <Row>
                    <Col>N: u дата на удостоверението за освободен от акциз краен потребител:
                    </Col>
                </Row>
                <Row>
                    <Col>Номер на анализен сертификат/протокол за съответната партида
                    </Col>
                </Row>


            </div>
            {/* <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row> */}

        </div>



    )


}

export default CreateAdd;