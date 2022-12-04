import { useEffect, useState } from "react";
import axios from "../util/axios";

export default function useNeighborMapData() {
  // Create a custom React Hook
  const [neighborData, setNeighborData] = useState([]);

  useEffect(() => {
    async function initialSet() {
      const initNeighborData = await getAllNeighborData();
      setNeighborData(initNeighborData);
    }

    initialSet();
  }, []);

  const getAllNeighborData = async () => {
    const response = await axios.get(`/location`);
    return response.data;
  };

  return {
    neighborData,
    setNeighborData,
  };
}
