import { useEffect, useState } from "react";
import axios from "../util/axios";

export default function useMapData() {
  // Create a custom React Hook
  const [businessData, setBusinessData] = useState([]);
  const [neighborData, setNeighborData] = useState([]);
  const [starLevel, setStarLevel] = useState("");

  useEffect(() => {
    async function initialSet() {
      const initBusinessData = await getAllBusinessData();
      setBusinessData(initBusinessData);
    }

    initialSet();
  }, []);

  useEffect(() => {
    async function initialSet() {
      const initNeighborData = await getAllNeighborData();
      setNeighborData(initNeighborData);
    }

    initialSet();
  }, []);

  useEffect( () => {
    async function updateBusinessWithStarLevel() {
      if(!starLevel) return;
      const newBusinessData = await getBusinessDataWithStar(starLevel)
      setBusinessData(newBusinessData)
    }

    updateBusinessWithStarLevel();
  }, [starLevel])

  const getAllBusinessData = async () => {
    const response = await axios.get(`/map`);
    return response.data;
  };

  const getAllNeighborData = async () => {
    const response = await axios.get(`/location`);
    return response.data;
  };

  const getBusinessDataWithStar = async (value) => {
    const response = await axios.get(`/map/${value}`);
    return response.data;
  };

  return {
    businessData,
    setBusinessData,
    neighborData,
    setNeighborData,
    getAllBusinessData,
    getBusinessDataWithStar,
    starLevel,
    setStarLevel
  };
}
