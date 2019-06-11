import React from 'react';
import { shallow } from "enzyme";
import App from './App';
import ProductList from "./components/ProductList"

it('renders without crashing', () => {
  const wrapper = shallow (<App />);
  const header = wrapper.find("h1").first();
  expect (header.contains("My E-Commerce Site")).toBe(true);
});

it ("contains a product list", () => {
  const wrapper = shallow (<App />);
  expect (wrapper.find(ProductList).length).toBe(1)
})

