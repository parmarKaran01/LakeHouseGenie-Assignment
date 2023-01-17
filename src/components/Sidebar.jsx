import { useEffect, useState } from "react";
import Category from "./Category";

export default function Sidebar() {
  const [content, setContent] = useState([]);

  const fetchContent = async () => {
    const res = await fetch(
      "https://mocki.io/v1/3e0b1c28-8f4d-4a2c-a7d9-15a86424d957"
    );
    const data = await res.json();
    setContent(data?.data);
  };
  useEffect(() => {
    fetchContent();
  }, []);

  if (content.length === 0) {
    return <div>Loading....</div>;
  }
  return (
    <div className="top-0 left-0 w-[300px] bg-black text-white py-5 px-3 overflow-y-scroll">
        <div className="w-full h-[70px] text-2xl flex flex-row items-center justify-center">LakehouseGenie</div>
      {content.map((item) => {
        return (
          <div key={item?.category?.id}>
            <Category
              id={item?.category?.id}
              name={item?.category?.name}
              icon={item?.category?.ui_info?.icon}
              item ={item}
            />
          </div>
        );
      })}
    </div>
  );
}
