import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface UserData {
  id: number;
  name: string;
  height: number;
  mass: number;
  gender: string;
}

export function useUser() {
  //TODO add um .env
  return useQuery<UserData[]>({
    queryKey: ["getUser"],
    queryFn: async () => {
      const { data } = await axios.get<UserData[]>(
        // "https://akabab.github.io/starwars-api/api/all.json"
        "http://localhost:3000/api/users"
      );
      return data;
    },
  });
}
