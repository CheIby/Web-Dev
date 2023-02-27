import './App.css';
import { FoodBox } from './components/FoodBox';

function App() {
  const lst = [
    {
      kind : "อาหารคาว",
      name : "ข้าวผัด",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni corrupti officia tempora provident earum sint quam, illum cum numquam quibusdam, aliquid dolores corporis reiciendis et at iure esse? Expedita fuga soluta, ipsum corrupti incidunt laudantium enim qui nemo quo! Hic assumenda quis incidunt voluptatum, explicabo aliquid voluptate et repudiandae.",
      img:"https://www.nestleprofessional.co.th/sites/default/files/styles/np_recipe_detail/public/2022-04/resive_04062021_430x320px-2_0.png?itok=IVRT5J1c"
    },{
      kind : "อาหารหวาน",
      name : "บัวลอย",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni corrupti officia tempora provident earum sint quam, illum cum numquam quibusdam, aliquid dolores corporis reiciendis et at iure esse? Expedita fuga soluta, ipsum corrupti incidunt laudantium enim qui nemo quo! Hic assumenda quis incidunt voluptatum, explicabo aliquid voluptate et repudiandae.",
      img:"https://aroi-mark.com/wp-content/uploads/2020/10/%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%A5%E0%B8%AD%E0%B8%A21.jpg"
    },
  ]

  return (
    <div className='bg-gray-500'>
        <div className="flex flex-col items-center w-[60%] mx-auto">
          <div className='text-3xl font-black my-8 text-yellow-400'>
            <h1>โหวตอาหาร</h1>
          </div>
          <div className='w-full'>
            {lst.map((e,key)=>{
              console.log(key)
              return(
              
                <FoodBox kind={e.kind} name={e.name} description={e.description} img={e.img} key={key}/>
              )
            })}
          </div>
      </div>
    </div>
    
  );
}

export default App;
