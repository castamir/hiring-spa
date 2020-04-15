enum LinkType {
  LINKED_IN,
  SMITIO,
  MEET_FRANK,
  TECHLOOP,
  STARTUP_JOBS,
}

enum State {
  NEW_CONTACT,
  APPROVED,
  DECLINED,
  INITIAL_MEETING,
  TECHNICAL_INTERVIEW,
  TEST_ASSIGNMENT_SEND,
  TEST_ASSIGNMENT_IN_REVIEW,
  FINAL_INTERVIEW,
  HIRED,
  SHORTLIST,
}

type CandidateBase = {
  name: string;
  surname: string;
  email: string;
  links: { type: LinkType; link: string }[];
  state: State;
  location: string;
  nationality: string;
};

export type CandidateReadDto = CandidateBase & {
  id: string;
};
export type CandidateCreateDto = CandidateBase;
