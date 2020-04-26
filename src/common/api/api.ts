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
        {
          id: "ID 3",
          email: "tri@domain.com",
          name: "Eva",
          surname: "Studena",
          state: State.APPROVED,
          nationality: "Slovak",
          links: [],
          location: "Bratislava",
        },
        {
          id: "ID 4",
          email: "ctyri@domain.com",
          name: "Karel",
          surname: "Hynek",
          state: State.APPROVED,
          nationality: "Czech",
          links: [],
          location: "As",
        },
        {
          id: "ID 5",
          email: "pet@domain.com",
          name: "Tomas",
          surname: "Mokry",
          state: State.APPROVED,
          nationality: "Czech",
          links: [],
          location: "Praha",
        },
      ]);
    }, 1000);
  });
};
