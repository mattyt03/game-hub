import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface GenresResponse {
    count: number;
    results: Genre[];
  }

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<GenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        // TODO: won't this be a problem bc react updates state variables asynchronously?
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, loading };
};

export default useGenres;
