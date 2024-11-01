
const CategoryCard = ({ item }) => {
    console.log(item)
    const {id,logo, category_name, availability} = item
    
    return (
      <div className="card p-8 mt-10 gap-2 bg-[#7e8ffe13]">
            <div >
                <img src={logo} alt="" 
                className="bg-gray-200 rounded-md p-4"
                />
                </div>
           <h1 className="text-xl font-bold">{category_name}</h1>
           <p className="text-gray-500">{availability}</p>
      </div>
    );
};

export default CategoryCard;