import { shallow } from "../enzyme";
import React from "react";
import Navbar from "./Navbar";

describe("Navbar Tests", () => {
    it("Contains Title", () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper.contains("BigBrain")).toBeTruthy();
    });
});
