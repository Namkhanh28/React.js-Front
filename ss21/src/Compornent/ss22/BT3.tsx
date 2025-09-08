import React from "react";
import { Card, Button, Row, Col } from "antd";

const { Meta } = Card;

const products = [
  {
    id: 1,
    title: "MacBook Air 2018",
    description:
      "The reason I am selling the machine is because it is too much power for what I need",
    price: "30.000.000 đ",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/200533/macbook-air-2018-1.jpg",
  },
  {
    id: 2,
    title: "MacBook Pro 2019",
    description:
      "The reason I am selling the machine is because it is too much power for what I need",
    price: "30.000.000 đ",
    image:
      "https://cdn.tgdd.vn/Products/Images/44/200529/macbook-pro-2019.jpg",
  },
];

const Cart = () => {
  return (
    <Row gutter={16} justify="center">
      {products.map((item) => (
        <Col key={item.id} span={6}>
          <Card
            hoverable
            cover={<img alt={item.title} src={item.image} />}
          >
            <Meta title={item.title} description={item.description} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <Button type="primary">Xem chi tiết</Button>
              <span style={{ fontWeight: "bold" }}>{item.price}</span>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cart;
