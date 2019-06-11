import React from "react";
import { shallow } from "enzyme";
import ProductList from "./ProductList";

const productList = [
    { id: 1, name: "Oranges", price: 1000},
    { id: 2, name: "Apples", price: 50.25},
    { id: 3, name: "Bananas", price: 20.99},
    { id: 4, name: "Kiwis", price: 1000.00},
];


// 4 & 5 & 6
it ("render correct number of items", () => {
    const wrapper = shallow (<ProductList products={productList} />)
    expect (wrapper.find("li").length).toEqual(4)
})

it ("render price for first item", () => {
    const wrapper = shallow (<ProductList products={productList}/>)
    const firstProduct = wrapper.find("li").at(3)
    expect (firstProduct.text()).toMatch(/\$(?!0\.00)\d{1,3}(,\d{3})*(\.\d{2})? \w{3}/);
})
//////////////////////

// 7
it ("item has class", () => {
    const wrapper = shallow (<ProductList products={productList}/>)
    const firstProduct = wrapper.find("li").at(0)
    expect (firstProduct.find("li").hasClass("product-item")).toBe(true)
})
/////////////////

//8
it ("has one button", () => {
    const wrapper = shallow ( <ProductList products={productList} /> )
    expect (wrapper.find("button").at(0).length).toEqual(1)
})

it ("has correct text", () => {
    const wrapper = shallow ( <ProductList products={productList} /> )
    // expect (wrapper.find("button").at(0).contains("Add to Cart")).toBe(true)  // #1
    expect (wrapper.find("button").at(0).text()).toBe("Add to Cart")            // #2
})
//////////////////

//9 & 10
it ("has function", () => {
    
    const testFn = jest.fn();

    const wrapper = shallow  ( <ProductList onAddToCart={testFn} products={productList} /> )
    const firstProduct = wrapper.find("button").at(0)
    firstProduct.simulate("click")
    expect ( testFn.mock.calls.length ).toEqual(1)
})

it ("has function behave correctly", () => {
    const testFn = jest.fn();

    const wrapper = shallow ( <ProductList products={productList} onAddToCart={testFn} /> )
    const firstProduct = wrapper.find("button").at(0)
    firstProduct.simulate("click")
    expect (testFn.mock.calls[0][0]).toEqual(1)
    expect(wrapper).toMatchSnapshot();
})

//////////////////
