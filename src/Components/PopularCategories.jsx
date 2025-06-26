import {
    FaPaintBrush,
    FaPenNib,
    FaBullhorn,
    FaCode,
    FaMobileAlt,
    FaDatabase,
    FaRobot,
    FaBrain,
} from "react-icons/fa";
import { Link } from "react-router";

const categories = [
    {
        name: "Design",
        icon: <FaPaintBrush size={40} className="text-pink-500" />,
    },
    {
        name: "Writing",
        icon: <FaPenNib size={40} className="text-purple-500" />,
    },
    {
        name: "Marketing",
        icon: <FaBullhorn size={40} className="text-orange-500" />,
    },
    {
        name: "Web Development",
        icon: <FaCode size={40} className="text-blue-600" />,
    },
    {
        name: "Mobile Development",
        icon: <FaMobileAlt size={40} className="text-teal-500" />,
    },
    {
        name: "Data Science",
        icon: <FaDatabase size={40} className="text-cyan-500" />,
    },
    {
        name: "Machine Learning",
        icon: <FaRobot size={40} className="text-amber-600" />,
    },
    {
        name: "Artificial Intelligence",
        icon: <FaBrain size={40} className="text-indigo-600" />,
    },
];

const PopularCategories = () => {
    return (
        <section className="w-full mx-auto px-4 md:px-0 pb-10 pt-8 text-center rounded-2xl">
            <h2 className="text-3xl font-bold mb-2"> Popular Categories</h2>
            <p className="text-base-content/70 mb-10">
                Explore the most in-demand tasks on Flexlance
            </p>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
                {categories.map((cat, idx) => (
                    <Link
                        to={`/category-details/category=${encodeURIComponent(cat.name)}`}
                        key={idx}
                        className="bg-base-300 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center">
                        <div className="mb-4">{cat.icon}</div>
                        <h3 className="text-lg font-semibold">{cat.name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default PopularCategories;
