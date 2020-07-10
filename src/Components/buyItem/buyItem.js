import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ShopInfo from '../shopInfo';
import './buyItem.scss'

const BuyItem = (props) => {
  const {
    buttonLabel = 'Заказать',
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <Button color="success" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>Заказать</ModalHeader>
        <ModalBody>
          <b>Для осуществления заказа - свяжитесь с нами любым удобным для Вас способом!</b><br />
          <ShopInfo />
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button color="danger" onClick={toggle}>Отмена</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default BuyItem;