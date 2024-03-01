import styles from './CreateAdd.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {definedAdData} from './definedAdData'

const CreateAdd = () => {

    return (
        <>
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
                            <Row className={styles['no-border']}>
                                <Col className={styles['no-border']}>Svilengrad</Col>

                            </Row>
                            <Row className={styles['no-border']}>
                                <Col className={styles['no-border']}>Bulgaria</Col>
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
                <div className={styles['right-side']}>
                    <Row>
                        <Col>
                            Ime
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            Адрес за кореспонденция
                        </Col>
                        <Col>
                            <Row >
                                <Col >Svilengrad</Col>

                            </Row>
                            <Row>
                                <Col>Bulgaria</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>ЕИК </Col>

                    </Row>
                    <Row>
                        <Col>ИНДС/ИНРТ</Col>
                    </Row>
                    <Row>
                        <Col>ИН: </Col>
                    </Row>
                    <Row>
                        <Col>Вложител: ЕИК:</Col>
                    </Row>
                    <Row>
                        <Col>Акцизно известие:
                        </Col>
                        <Col>
                            <Row>
                                <div>
                                    X
                                    <span>Дебитно</span>
                                </div>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <div>
                                    X
                                    <span>Кредитно</span>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Към акцизен данъчен документ No:
                        </Col>
                    </Row>
                    <Row>
                        <Col>Основание за изменението:</Col>
                    </Row>



                </div>

            </div>

            <div className={styles['bottom-part']}>
                <Row>
                {definedAdData.map((r,index) => <Col Col key={index}><span>{r} </span></Col> )}
                </Row>
            </div>
        </>




    )


}

export default CreateAdd;