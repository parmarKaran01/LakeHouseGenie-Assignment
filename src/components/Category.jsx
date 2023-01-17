import { Link } from "react-router-dom";
export default function Category({ id, name, icon, item }) {
  console.log(item.sub_categories);
  return (
    <div className="">
      <div className="w-full h-[50px] bg-slate-900 flex flex-row items-center justify-start cursor-default mt-2">
        <span>
          <img src={icon} alt="category icon" className="w-10 h-10" />
        </span>
        <span className="pl-4">{name}</span>
        <hr className="text-white" />
      </div>

      <div>
        {item?.sub_categories.map((sub, index) => {
          return (
            <div key={index}>
              <Link to={sub?.action_url}>
                <span className="w-full h-[50px] bg-slate-700 flex flex-row items-center justify-start px-4 cursor-pointer hover:bg-slate-600">
                  {sub?.name}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
