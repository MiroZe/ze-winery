import styles from './AddTemplate.module.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddTemplate = () => {

    const addNumbers = () => {
        const arr = [];
        for (let index = 1; index <= 27; index++) {
            
            arr.push(index)
        }
        return arr
    }

    return (
        <div className={styles['add-container']}>
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
                    <Col className={styles['vertical-col']}><span>No:</span></Col>
                    <Col className={styles['vertical-col']}><span>Търговско наименование</span></Col>
                    <Col className={styles['vertical-col']}><span>Търговска марка</span></Col>
                    <Col className={styles['vertical-col']}><span>АКР No: на е-ЕАД или No: на друг документ</span></Col>
                    <Col className={styles['vertical-col']}><span>Действителни количества</span></Col>
                    <Col className={styles['vertical-col']}><span>УИКТ-уникален идентиФикатор на контролна точка</span></Col>
                    <Col className={styles['vertical-col']}><span>No: на транзакцията</span></Col>
                    <Col className={styles['vertical-col']}><span>Стойност на сделката</span></Col>
                    <Col className={styles['vertical-col']}><span>код на АП</span></Col>
                    <Col className={styles['vertical-col']}><span>Код по КН</span></Col>
                    <Col className={styles['vertical-col']}><span>Допълнитепен код на стоката</span></Col>
                    <Col className={styles['vertical-col']}><span>Основание за възникване на задължение эа начисляване на аициз или недължимост на акциза(предназначение)</span></Col>
                    <Col className={styles['vertical-col']} ><span>Апкохолно съдържание/ градус плато /дължина на цигарата без Филтьра или мундщука/горна топлотворна способност</span></Col>
                    <Col className={styles['vertical-col']} ><span>Продажна цена</span></Col>
                    <Col className={styles['vertical-col']} ><span>Вместимост на потребителската опаковка</span></Col>
                    <Col className={styles['vertical-col']} ><span>брой потребителски опаковки</span></Col>
                    <Col className={styles['vertical-col']} ><span>Мерна единица</span></Col>
                    <Col className={styles['vertical-col']} ><span>коефициент на преизчиспяване към данъчна основа</span></Col>
                    <Col className={styles['hotizontal-col']} >
                        <Row><span>Основа эа облагане с акциз, съгласно чл. 28 и 29 от ЭАДС</span></Row>
                        <Row className={styles['row-container']}>
                            <Col className={styles['vertical-col-2']}><span>LTR, нLТ, РСЕ,К GM, TNE</span></Col>
                            <Col className={styles['vertical-col-2']}><span>пропорционален акциз</span></Col>
                             <Col className={styles['vertical-col-2']}><span>С02</span></Col>
                             <Col className={styles['vertical-col-2']}><span>GJ</span></Col>

                        </Row>
                    </Col>
                    <Col className={styles['hotizontal-col']} >
                        <Row><span>Основа эа облагане с акциз, съгласно чл. 28 и 29 от ЭАДС</span></Row>
                        <Row className={styles['row-container']}>
                            <Col className={styles['vertical-col-2']}><span>За LTR, нLТ, РСЕ,К GM, TNE</span></Col>
                            <Col className={styles['vertical-col-2']}><span>За С02</span></Col>
                             <Col className={styles['vertical-col-2']}><span>За GJ</span></Col>
                             <Col className={styles['vertical-col-2']}><span>По чл. 39, ап. 1, т. 2 от 3АДС</span></Col>

                        </Row>
                    </Col>
                    <Col className={styles['vertical-col']} ><span>плащане(освободен/предварително платен)</span></Col>
                    <Col className={styles['vertical-col']} ><span>Размер на акциза</span></Col>
                    <Col className={styles['vertical-col']} ><span>увеличение/ намаление</span></Col>
                    <Row className={styles['row-numbers']}>
                    {addNumbers().map((e,index) => <Col  key={index}><span>{e}</span></Col>)}

                    </Row>


                </Row>
            </div>
        </div>




    )


}

export default AddTemplate;