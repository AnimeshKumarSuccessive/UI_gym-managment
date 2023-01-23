import { Outlet } from "react-router";

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'plans',
      imageUrl: 'https://i.pinimg.com/originals/81/a2/24/81a2244b2c7d1dbead3e6da8789e4740.jpg',
    },
    {
      id: 2,
      title: 'diet',
      imageUrl: 'https://i.ytimg.com/vi/xWV-11-zIIY/maxresdefault.jpg',
    },
    {
      id: 3,
      title: 'fitness',
      imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
    {
      id: 4,
      title: 'girls',
      imageUrl: 'https://media.istockphoto.com/id/1147772622/photo/sportswoman-exercising-with-battling-ropes.jpg?b=1&s=170667a&w=0&k=20&c=RAzLPJDqHqXxcKx0it3JslGbWN9jkLy5nSJ1ifmktBk=',
    },
    {
      id: 5,
      title: 'boys',
      imageUrl: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltJTIwYm95fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
