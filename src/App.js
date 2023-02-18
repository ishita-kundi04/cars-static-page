import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  const cars_info = [
    {
      imgsrc:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      carname: "Mercedes",
      value: "4.5",
    },
    {
      imgsrc:
        "https://images.unsplash.com/photo-1597687210367-a4915552d886?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      carname: "Ferrari",
      value: "5",
    },
    {
      imgsrc:
        "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      carname: "Rolls-Royce",
      value: "5",
    },
    {
      imgsrc:
        "https://images.unsplash.com/photo-1589539027938-35266cbbf280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      carname: "Hyundai",
      value: "3.5",
    },
    {
      imgsrc:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      carname: "BMW",
      value: "4",
    },
  ];

  return (
    <div id="Main_window">
      <Header />
      <div id="card_box">
        {cars_info.map((ele) => {
          return (
            <Card imgsrc={ele.imgsrc} carname={ele.carname} value={ele.value} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
