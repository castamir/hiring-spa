import { CandidateReadDto, State } from "../../domain/candidate";

export const getCandidates = () => {
  return new Promise<CandidateReadDto[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "ID 1",
          email: "jedna@domain.com",
          name: "John",
          surname: "Doe",
          state: State.NEW_CONTACT,
          nationality: "Czech",
          links: [],
          location: "Brno",
        },
        {
          id: "ID 2",
          email: "dva@domain.com",
          name: "Eva",
          surname: "Dlouha",
          state: State.APPROVED,
          nationality: "Slovak",
          links: [],
          location: "Kosice",
        },
      ]);
    }, 1000);
  });
};
