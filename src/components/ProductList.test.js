import React from "react";
import { shallow } from "enzyme";
import ProductList from "./ProductList";

const productList = [
    { id: 1, name: "Oranges", price: 1000},
    { id: 2, name: "Apples", price: 50.25},
    { id: 3, name: "Bananas", price: 20.99},
    { id: 4, name: "Kiwis", price: 1000.00},
];

it ("render correct number of items", () => {
    const wrapper = shallow (<ProductList products={productList} />)
    expect (wrapper.find("li").length).toEqual(4)
})

it ("render price for first item", () => {
    const wrapper = shallow (<ProductList products={productList}/>)
    const firstProduct = wrapper.find("li").at(3)
    expect (firstProduct.text()).toMatch(/\$(?!0\.00)\d{1,3}(,\d{3})*(\.\d{2})? \w{3}/);
})



