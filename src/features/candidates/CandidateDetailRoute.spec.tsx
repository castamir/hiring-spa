import { shallow } from "enzyme";
import React from "react";

import CandidateDetailRoute from "./CandidateDetailRoute";
import { State } from "../../domain/candidate";

describe("<CandidateDetailRoute />", () => {
  it("should render without candidate", () => {
    const wrapper = shallow(<CandidateDetailRoute />);
    expect(wrapper.html()).toEqual(null);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with candidate", () => {
    const candidateExample = {
      id: "ID 1",
      email: "jedna@domain.com",
      name: "John",
      surname: "Doe",
      state: State.NEW_CONTACT,
      nationality: "Czech",
      links: [],
      location: "Brno",
    };
    const wrapper = shallow(
      <CandidateDetailRoute candidate={candidateExample} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h2")).toHaveLength(1);
    expect(wrapper.find("h2").exists()).toBeTruthy(); //toBe(true)
    expect(wrapper.find("h2").length).toEqual(1);

    expect(wrapper.find("h2").first().text()).toContain("John");
    expect(wrapper.find("h2").first().text()).toContain(
      candidateExample.surname
    );
    // expect(wrapper.text()).not.toContain("Brno");
  });
});
