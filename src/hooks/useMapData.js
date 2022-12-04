import { useEffect, useState } from "react";
import axios from "../util/axios";

export default function useMapData() {
  // Create a custom React Hook
  const [businessData, setBusinessData] = useState([]);
  const [neighborData, setNeighborData] = useState([]);
  const [starLevel, setStarLevel] = useState("");
  const [category, setCategory] = useState("");

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
    async function updateBusinessWithStarLevelAndCategory() {
      if (!starLevel && category) {
        const newBusinessData = await getBusinessDataWithCategory(category)
        setBusinessData(newBusinessData)
      } else if (!category && starLevel) {
        const newBusinessData = await getBusinessDataWithStar(starLevel)
        setBusinessData(newBusinessData)
      } else if (category && starLevel) {
        const newBusinessData = await getBusinessDataWithStarAndCategory(starLevel, category)
        setBusinessData(newBusinessData)
      }
    }

    updateBusinessWithStarLevelAndCategory();
  }, [starLevel, category])

  const getAllBusinessData = async () => {
    const response = await axios.get(`/map`);
    return response.data;
  };

  const getAllNeighborData = async () => {
    const response = await axios.get(`/location`);
    return response.data;
  };

  const getBusinessDataWithStar = async (value) => {
    const response = await axios.get(`/map/s/${value}`);
    return response.data;
  };

  const getBusinessDataWithCategory = async (value) => {
    const response = await axios.get(`/map/c/${value}`);
    return response.data;
  };

  const getBusinessDataWithStarAndCategory = async (starLevel, category) => {
    const response = await axios.get(`/map/sc/${starLevel}/${category}`);
    return response.data;
  };

  return {
    businessData,
    setBusinessData,
    neighborData,
    setNeighborData,
    getAllBusinessData,
    starLevel,
    setStarLevel,
    category,
    setCategory
  };
}
